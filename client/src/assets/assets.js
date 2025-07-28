import logo from "./logo.svg";
import gradientBackground from "./gradientBackground.png";
import user_group from "./user_group.png";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import arrow_icon from "./arrow_icon.svg";
import { SquarePen, Hash, Image, Eraser, Scissors, FileText } from 'lucide-react'
import ai_gen_img_1 from "./ai_gen_img_1.png";
import ai_gen_img_2 from "./ai_gen_img_2.png";
import ai_gen_img_3 from "./ai_gen_img_3.png";

export const assets = {
    logo,
    gradientBackground,
    user_group,
    star_icon,
    star_dull_icon,
    profile_img_1,
    arrow_icon,
};

export const AiToolsData = [
    {
        title: 'AI Itinerary Planner',
        description: 'Create personalized travel itineraries with our AI-powered travel planning technology.',
        Icon: SquarePen,
        bg: { from: '#3588F2', to: '#0BB0D7' },
        path: '/ai/plan-itinerary'
    },
    {
        title: 'Destination Explorer',
        description: 'Discover unique destinations and get AI-curated recommendations based on your preferences.',
        Icon: Hash,
        bg: { from: '#B153EA', to: '#E549A3' },
        path: '/ai/explore-destinations'
    },
    {
        title: 'Budget Calculator',
        description: 'Plan your travel budget efficiently with our AI-driven cost estimation tool.',
        Icon: Image,
        bg: { from: '#20C363', to: '#11B97E' },
        path: '/ai/calculate-budget'
    },
    {
        title: 'Local Guide',
        description: 'Get AI-powered insights about local attractions, cuisine, and cultural experiences.',
        Icon: Eraser,
        bg: { from: '#F76C1C', to: '#F04A3C' },
        path: '/ai/local-guide'
    },
    {
        title: 'Transport Planner',
        description: 'Optimize your travel routes and transportation options with our AI tool.',
        Icon: Scissors,
        bg: { from: '#5C6AF1', to: '#427DF5' },
        path: '/ai/plan-transport'
    },
    {
        title: 'Accommodation Finder',
        description: 'Find the perfect place to stay with our AI-powered accommodation recommendations.',
        Icon: FileText,
        bg: { from: '#12B7AC', to: '#08B6CE' },
        path: '/ai/find-accommodation'
    }
]

export const dummyTestimonialData = [
    {
        image: assets.profile_img_1,
        name: 'Sarah Khan',
        title: 'Adventure Traveler',
        content: 'Traveller has made planning my trips so much easier! The AI itinerary planner saved me hours of research and created the perfect personalized travel plan.',
        rating: 5,
    },
    {
        image: assets.profile_img_1,
        name: 'Rajesh Patel',
        title: 'Business Traveler',
        content: 'The budget calculator and accommodation finder are game-changers. Traveller helps me find the best deals while maintaining my preferred travel style.',
        rating: 4,
    },
    {
        image: assets.profile_img_1,
        name: 'Maria Garcia',
        title: 'Family Vacation Planner',
        content: 'Planning family trips was always challenging until I found Traveller. The local guide feature helped us discover family-friendly attractions everywhere we went.',
        rating: 5,
    },
]


export const dummyCreationData = [
    {
        "id": 9,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Plan a 3-day itinerary for Srinagar, Kashmir.",
        "content": "Here's your personalized 3-day Srinagar itinerary:\n\n**Day 1: Dal Lake & Gardens**\n\n* Morning: Shikara ride on Dal Lake\n* Afternoon: Visit Mughal Gardens (Shalimar Bagh & Nishat Bagh)\n* Evening: Shopping at Lal Chowk\n\n**Day 2: Old City & Culture**\n\n* Morning: Visit Hazratbal Shrine\n* Afternoon: Explore Old City markets\n* Evening: Sunset at Hari Parbat Fort\n\n**Day 3: Nature & Adventure**\n\n* Morning: Day trip to Gulmarg\n* Afternoon: Gondola ride\n* Evening: Return to Srinagar",
        "type": "itinerary",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:09:50.492Z",
        "updated_at": "2025-07-01T11:09:50.492Z"
    },
    {
        "id": 8,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Recommend budget-friendly hotels in Pahalgam.",
        "content": "Here are some recommended budget-friendly hotels in Pahalgam:\n\n**Best Value Options:**\n\n* Hotel Mountain View\n* Pine Valley Inn\n* Pahalgam Resort\n\n**Features & Amenities:**\n\n* Mountain views\n* Close to market\n* Free breakfast\n* WiFi included\n* Local tour assistance",
        "type": "accommodation",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:08:10.450Z",
        "updated_at": "2025-07-01T11:08:10.450Z"
    },
    {
        "id": 7,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Calculate budget for 5-day Kashmir trip.",
        "content": "## 5-Day Kashmir Trip Budget Breakdown\n\n**Accommodation (4 nights):**\n* Mid-range hotel: ₹2,000-3,000/night\n* Total: ₹8,000-12,000\n\n**Transportation:**\n* Flights: ₹8,000-12,000 (round trip)\n* Local transport: ₹3,000-4,000\n\n**Activities:**\n* Shikara ride: ₹800-1,000\n* Gulmarg Gondola: ₹1,600\n* Garden entries: ₹500\n\n**Food & Dining:**\n* Daily meals: ₹800-1,000/day\n* Total: ₹4,000-5,000\n\n**Total Budget Range:**\n₹25,000-35,000 per person",
        "type": "budget",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:07:51.312Z",
        "updated_at": "2025-07-01T11:07:51.312Z"
    }
]


export const dummyPublishedCreationData = [
    {
        "id": 1,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "7-day itinerary for exploring Kashmir Valley",
        "content": ai_gen_img_1,
        "type": "itinerary",
        "publish": true,
        "likes": [
            "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-19T09:02:25.035Z",
        "updated_at": "2025-06-19T09:58:37.552Z",
    },
    {
        "id": 2,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Best budget hotels in Gulmarg with mountain views",
        "content": ai_gen_img_2,
        "type": "accommodation",
        "publish": true,
        "likes": [
            "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-19T08:16:54.614Z",
        "updated_at": "2025-06-19T09:58:40.072Z",
    },
    {
        "id": 3,
        "user_id": "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
        "prompt": "Local food guide for Srinagar's best restaurants",
        "content": ai_gen_img_3,
        "type": "guide",
        "publish": true,
        "likes": [
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-23T11:29:23.351Z",
        "updated_at": "2025-06-23T11:29:44.434Z",
        "__v": 1
    },
]
