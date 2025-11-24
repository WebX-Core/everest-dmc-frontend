import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { blogApi } from "../services/blog";
import Preloader from "../Components/common/Preloader";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => blogApi.getBlogBySlug(slug!),
    enabled: !!slug,
  });

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1C4D9B]"></div>
          <p className="mt-4 text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link
            to="/blogs"
            className="text-[#1C4D9B] hover:underline flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={post.banner}
          alt={post.title}
          className="w-full h-full object-cover"
        />
         <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-700/50 to-blue-500/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-white mb-4 hover:text-blue-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
           
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.estimatedReadTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Share Button */}
          <div className="flex justify-end mb-8">
            <button className="flex items-center gap-2 text-gray-600 hover:text-[#1C4D9B] transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#1C4D9B] prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.description }}
          />

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#1C4D9B] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author}</h3>
                <p className="text-gray-600">Travel Writer & Guide</p>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogDetail;
