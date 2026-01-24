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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6">
            <TrendingUp size={16} className="mr-2 text-gray-700" />
            <span className="text-sm font-medium text-gray-900">Insights & Thought Leadership</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep thoughts on technology, culture, and the future from our polymath collective.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <div className="w-1 h-6 bg-gray-900 mr-3"></div>
            Featured Articles
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article 
                key={index}
                className="group card hover:shadow-strong transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-gray-700 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <button className="group flex items-center text-gray-700 font-medium hover:text-gray-900 transition-colors">
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <div className="w-1 h-6 bg-gray-900 mr-3"></div>
            Latest Insights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <article 
                key={index}
                className="group card hover:shadow-strong transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-gray-700 text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="card-elevated p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Expert-O Insights
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly insights on polymathic thinking, AI integration, and India's digital transformation 
            directly from our team of visionary experts.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 w-full md:w-auto p-4 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button className="w-full md:w-auto bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            No spam, just valuable insights. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
