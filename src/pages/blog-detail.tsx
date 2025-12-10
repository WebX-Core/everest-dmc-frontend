import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { blogApi } from "../services/blog";


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

  // Share functionality
  const handleShare = async () => {
    const shareData = {
      title: post?.title || 'Check out this blog post',
      text: post?.description || 'I found this interesting article and wanted to share it with you.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        // Web Share API (mobile devices)
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } else {
        // Fallback: Open mailto link
        const subject = encodeURIComponent(shareData.title);
        const body = encodeURIComponent(`${shareData.text}\n\n${shareData.url}`);
        window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Image Skeleton */}
        <div className="h-[60vh] bg-gray-200 animate-pulse"></div>

        {/* Content Skeleton */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back button skeleton */}
          <div className="h-4 w-24 bg-gray-200 rounded-full mb-8 animate-pulse"></div>
          
          {/* Title skeleton */}
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>
          
          {/* Meta info skeleton */}
          <div className="flex gap-8 mb-8">
            <div className="h-4 w-32 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-4 w-40 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-4 w-28 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          
          {/* Share button skeleton */}
          <div className="flex justify-end mb-8">
            <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          
          {/* Content paragraphs skeleton */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded-full animate-pulse" style={{
                width: `${Math.floor(Math.random() * 30) + 70}%`
              }}></div>
            ))}
            <div className="h-4 w-3/4 bg-gray-200 rounded-full animate-pulse mt-6"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          
          {/* Author bio skeleton */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-3 w-40 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
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
      <article className="max-w-4xl mx-auto px-4  py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Share Button */}
          <div className="flex justify-end mb-8">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#1C4D9B] hover:border-[#1C4D9B] transition-all duration-200 ease-in-out"
              aria-label="Share this post"
            >
              <Share2 className="w-4 h-4" />
              <span className="font-medium">Share</span>
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
