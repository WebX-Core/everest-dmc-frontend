export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "ultimate-guide-everest-base-camp-trek",
    title: "Ultimate Guide to Everest Base Camp Trek",
    excerpt:
      "Discover everything you need to know about trekking to Everest Base Camp, from preparation tips to what to expect on the journey.",
    image:
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    author: "Rajesh Sharma",
    date: "March 15, 2024",
    category: "Trekking",
    readTime: "8 min read",
    content: [
      "The Everest Base Camp trek is one of the most iconic adventures in the world. Standing at 5,364 meters (17,598 feet), reaching base camp is a dream for many trekkers and adventure enthusiasts.",
      "The journey typically takes 12-14 days round trip from Lukla, allowing proper acclimatization to the high altitude. You'll pass through traditional Sherpa villages, ancient monasteries, and breathtaking mountain landscapes.",
      "Preparation is key for this trek. Physical fitness is important, but mental preparation and understanding altitude sickness are equally crucial. We recommend at least 2-3 months of cardiovascular training before your trek.",
      "The best seasons for the EBC trek are spring (March-May) and autumn (September-November). During these months, you'll enjoy clear skies, stable weather, and the best mountain views.",
      "Along the way, you'll experience the warm hospitality of the Sherpa people, taste traditional Nepali cuisine, and witness the majestic beauty of peaks like Ama Dablam, Lhotse, and of course, Mount Everest itself.",
    ],
  },
  {
    id: 2,
    slug: "best-time-to-visit-nepal",
    title: "Best Time to Visit Nepal: A Complete Guide",
    excerpt:
      "Learn about the ideal seasons for visiting Nepal, weather patterns, and what activities are best during different times of the year.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
    author: "Sita Gurung",
    date: "March 10, 2024",
    category: "Travel Tips",
    readTime: "6 min read",
    content: [
      "Nepal is a year-round destination, but the best time to visit depends on what you want to experience. Each season offers unique advantages and challenges.",
      "Autumn (September to November) is considered the peak season. The weather is clear, temperatures are moderate, and mountain views are spectacular. This is the best time for trekking and mountaineering.",
      "Spring (March to May) is another excellent time to visit. Rhododendrons bloom across the hills, creating stunning landscapes. The weather is warm and stable, perfect for both trekking and cultural tours.",
      "Monsoon season (June to August) brings heavy rainfall, especially in the lower regions. However, this is the best time to visit the rain-shadow areas like Upper Mustang and Dolpo.",
      "Winter (December to February) can be cold, especially at higher altitudes, but lower elevation treks and cultural tours are still enjoyable. The skies are often clear, offering pristine mountain views.",
    ],
  },
  {
    id: 3,
    slug: "cultural-experiences-kathmandu-valley",
    title: "Cultural Experiences in Kathmandu Valley",
    excerpt:
      "Explore the rich cultural heritage of Kathmandu Valley, from ancient temples to vibrant local markets and traditional festivals.",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80",
    author: "Anil Thapa",
    date: "March 5, 2024",
    category: "Culture",
    readTime: "7 min read",
    content: [
      "Kathmandu Valley is a living museum of art, architecture, and culture. With seven UNESCO World Heritage Sites, the valley offers an incredible journey through centuries of history.",
      "Start your exploration at Durbar Square in Kathmandu, where ancient palaces and temples showcase the finest examples of Newari architecture. The intricate wood carvings and stone sculptures are truly mesmerizing.",
      "Visit Swayambhunath (Monkey Temple) for panoramic views of the valley and a spiritual experience. The ancient stupa, prayer wheels, and resident monkeys create a unique atmosphere.",
      "Don't miss Pashupatinath Temple, one of the holiest Hindu sites in the world. Witness the evening aarti ceremony by the Bagmati River for a deeply moving spiritual experience.",
      "Explore the vibrant streets of Thamel for shopping, dining, and nightlife. Sample traditional Newari cuisine, shop for handicrafts, and immerse yourself in the bustling energy of Kathmandu.",
    ],
  },
  {
    id: 4,
    slug: "annapurna-circuit-trekkers-paradise",
    title: "Annapurna Circuit: A Trekker's Paradise",
    excerpt:
      "Journey through one of the world's most diverse trekking routes, experiencing stunning landscapes and warm Himalayan hospitality.",
    image:
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=1200&q=80",
    author: "Maya Sherpa",
    date: "February 28, 2024",
    category: "Trekking",
    readTime: "10 min read",
    content: [
      "The Annapurna Circuit is renowned for its incredible diversity. In just two weeks, you'll trek through subtropical forests, alpine meadows, and high-altitude deserts.",
      "The circuit takes you around the Annapurna massif, crossing the challenging Thorong La Pass at 5,416 meters. The sense of achievement at the pass is indescribable.",
      "You'll experience the cultural richness of various ethnic communities, from Hindu villages in the lowlands to Tibetan Buddhist settlements in the higher regions.",
      "The trek offers stunning views of Annapurna I, Dhaulagiri, Manaslu, and numerous other peaks. Each day brings new landscapes and photographic opportunities.",
      "Modern infrastructure along the route provides comfortable teahouses, making this trek accessible to a wide range of trekkers while maintaining its adventurous spirit.",
    ],
  },
  {
    id: 5,
    slug: "nepal-hidden-gems-off-beaten-path",
    title: "Nepal's Hidden Gems: Off the Beaten Path",
    excerpt:
      "Discover lesser-known destinations in Nepal that offer authentic experiences away from the tourist crowds.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    author: "Bikash Rai",
    date: "February 20, 2024",
    category: "Adventure",
    readTime: "9 min read",
    content: [
      "While Everest and Annapurna attract thousands of trekkers, Nepal has countless hidden treasures waiting to be discovered by adventurous travelers.",
      "Upper Mustang offers a glimpse into ancient Tibetan culture. This restricted area preserves centuries-old traditions, cave dwellings, and stunning desert landscapes.",
      "The Tsum Valley, known as the 'Hidden Valley,' is a sacred Himalayan pilgrimage valley. Its remote location has preserved unique Buddhist culture and traditions.",
      "Rara Lake in western Nepal is the country's largest lake, surrounded by pristine forests and snow-capped peaks. The area sees very few tourists, offering true wilderness experience.",
      "Khaptad National Park combines natural beauty with spiritual significance. The park's diverse flora and fauna, along with the ashram of the late Khaptad Baba, make it a unique destination.",
    ],
  },
  {
    id: 6,
    slug: "preparing-high-altitude-essential-tips",
    title: "Preparing for High Altitude: Essential Tips",
    excerpt:
      "Learn how to acclimatize properly and stay safe while trekking at high altitudes in the Himalayas.",
    image:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&q=80",
    author: "Dr. Pemba Lama",
    date: "February 15, 2024",
    category: "Health & Safety",
    readTime: "5 min read",
    content: [
      "Altitude sickness is a serious concern for anyone trekking above 3,000 meters. Understanding the symptoms and prevention methods is crucial for a safe trek.",
      "The golden rule is 'climb high, sleep low.' Ascend gradually, allowing your body time to adjust to decreasing oxygen levels. Never rush your ascent.",
      "Stay well-hydrated by drinking at least 3-4 liters of water daily. Avoid alcohol and caffeine, which can contribute to dehydration and worsen altitude symptoms.",
      "Recognize the symptoms of Acute Mountain Sickness (AMS): headache, nausea, dizziness, and fatigue. If symptoms worsen, descend immediately.",
      "Consider taking Diamox (acetazolamide) as a preventive measure, but consult with your doctor first. Carry a comprehensive first aid kit and travel insurance that covers high-altitude rescue.",
    ],
  },
];
