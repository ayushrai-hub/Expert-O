import React from 'react';
import { Clock, ArrowRight, TrendingUp } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Polymathic Thinking in Tech",
      excerpt: "Why cross-domain expertise is becoming the ultimate competitive advantage in India's digital landscape.",
      category: "Thought Leadership",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      featured: true
    },
    {
      title: "AI-Augmented Workflows: 5x Productivity Guide",
      excerpt: "Practical strategies for integrating AI tools into your daily workflow without losing the human touch.",
      category: "AI & Productivity",
      readTime: "12 min read", 
      date: "Dec 12, 2024",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      featured: true
    },
    {
      title: "Building Trust in Distributed Teams",
      excerpt: "How Expert-O maintains radical ownership and deep trust across our global polymath network.",
      category: "Team Culture",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      featured: false
    },
    {
      title: "India's Digital Transformation: Opportunities Ahead",
      excerpt: "Analyzing emerging trends and opportunities in India's rapidly evolving digital ecosystem.",
      category: "Market Insights", 
      readTime: "10 min read",
      date: "Dec 8, 2024",
      image: "https://images.pexels.com/photos/3862600/pexels-photo-3862600.jpeg",
      featured: false
    },
    {
      title: "Sustainable Tech: Building for Tomorrow",
      excerpt: "How conscious technology choices today create a better tomorrow for generations to come.",
      category: "Sustainability",
      readTime: "7 min read",
      date: "Dec 5, 2024", 
      image: "https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg",
      featured: false
    },
    {
      title: "From Idea to Launch: The Expert-O Way",
      excerpt: "A behind-the-scenes look at our rapid prototyping and launch methodology.",
      category: "Process",
      readTime: "9 min read",
      date: "Dec 3, 2024",
      image: "https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-6">
            <TrendingUp size={16} className="mr-2 text-green-400" />
            <span className="text-sm font-medium text-green-300">Insights & Thought Leadership</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep thoughts on technology, culture, and the future from our polymath collective.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-blue-500 mr-3"></div>
            Featured Articles
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article 
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500/20 backdrop-blur border border-green-500/30 rounded-full text-green-300 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <button className="group flex items-center text-green-400 font-medium hover:text-green-300 transition-colors">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 mr-3"></div>
            Latest Insights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <article 
                key={index}
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/50 backdrop-blur rounded text-white text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Expert-O Insights
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get weekly insights on polymathic thinking, AI integration, and India's digital transformation 
            directly from our team of visionary experts.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 w-full md:w-auto p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            No spam, just valuable insights. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;