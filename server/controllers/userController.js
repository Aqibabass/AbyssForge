import e from "express";
import sql from "../configs/db.js";

const parseLikes = (dbLikes) => {
    if (Array.isArray(dbLikes)) {
      return dbLikes; 
    }
    if (typeof dbLikes === 'string' && dbLikes.startsWith('{') && dbLikes.endsWith('}')) {
      const innerContent = dbLikes.slice(1, -1);
      if (innerContent === '') {
        return [];
      }
      return innerContent.split(',').map(id => id.replace(/"/g, ''));
    }
    return []; 
};


export const getUserCreations = async (req, res) => {
   try {
      const { userId } = req.auth();
      const creations = await sql`SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;
      res.json({ success: true, creations });
   } catch (error) {
      res.json({ success: false, message: error.message });
   }
}

export const getPublishedCreations = async (req, res) => {
   try {
      const creations = await sql`SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC`;
      
      const formattedCreations = creations.map(creation => ({
         ...creation,
         likes: parseLikes(creation.likes)
       }));
   
       res.json({ success: true, creations: formattedCreations });
   } catch (error) {
      res.json({ success: false, message: error.message });
   }
}

export const toggleLikeCreation = async (req, res) => {
   try {
      const { userId } = req.auth();
      const { id } = req.body
      const [creation] = await sql`SELECT * FROM creations WHERE id = ${id}`;
      if (!creation) {
         return res.json({ success: false, message: 'Creation not found' });
      }
      
      const currentLikes = parseLikes(creation.likes);
      const userIdStr = userId.toString();
      let updatedLikes;
      let message;

      if(currentLikes.includes(userIdStr)) {
         updatedLikes = currentLikes.filter((user) => user !== userIdStr);
         message= 'Creation Unliked';
      } else {
         updatedLikes = [...currentLikes, userIdStr];
         message= 'Creation Liked';
      }

      await sql`UPDATE creations SET likes = ${updatedLikes} WHERE id = ${id}`;

      res.json({ success: true, message });
   
   } catch (error) {
      res.json({ success: false, message: error.message });
   }
}