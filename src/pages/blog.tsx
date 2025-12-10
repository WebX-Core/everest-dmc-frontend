import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { blogApi } from "../services/blog";

const Blog = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: blogApi.getAllBlogs,
  });

  // Helper function to strip HTML tags and get excerpt
  const getExcerpt = (html: string, length: number = 150) => {
    // Create a temporary div element to parse HTML
    const temp = document.createElement('div');
    temp.innerHTML = html;
    
    // Get text content and clean it up
    let text = temp.textContent || temp.innerText || '';
    
    // Replace multiple spaces, newlines, and HTML entities with a single space
    text = text.replace(/\s+/g, ' ').trim();
    text = text.replace(/&nbsp;/g, ' ').trim();
    
    // Return truncated text if needed
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80"
          alt="Nepal Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                Travel Stories & Guides
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                Explore our collection of travel insights, trekking guides, and
                cultural experiences from the heart of the Himalayas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-11/12 mx-auto px-2 sm:px-4 lg:px-4 py-16">
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white overflow-hidden  animate-pulse">
                {/* Image Skeleton */}
                <div className="h-48 bg-gray-300"></div>
                
                {/* Content Skeleton */}
                <div className="p-6">
                  {/* Title Skeleton */}
                  <div className="h-6 bg-gray-300 rounded mb-3"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                  
                  {/* Description Skeleton */}
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                  
                  {/* Meta Info Skeleton */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-28"></div>
                  </div>
                  
                  {/* Footer Skeleton */}
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-600">Error loading blogs. Please try again later.</p>
          </div>
        )}

        {data && data.data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.data.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <Link 
                  to={`/blogs/${post.slug}`}
                  className="block h-full"
                  aria-label={`Read more about ${post.title}`}
                >
                  <article className="bg-white overflow-hidden h-full flex flex-col ">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.banner}
                        alt=""
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        aria-hidden="true"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#1C4D9B] text-white px-3 py-1 rounded-full text-sm font-medium">
                          Travel
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-3 group-hover:text-[#1C4D9B] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
                        {getExcerpt(post.description)}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.createdAt)}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{post.estimatedReadTime} min read</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#1C4D9B] font-medium group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      {/* <section className="bg-[#1C4D9B] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-blue-100 mb-8">
              Get the latest travel tips, trekking guides, and exclusive offers
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-[#1C4D9B] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Blog;
