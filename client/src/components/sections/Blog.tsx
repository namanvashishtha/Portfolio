import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaTag, FaUser, FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  link?: string;
}

interface MediumRssItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {
    url: string;
  };
  categories: string[];
}

const LOCAL_STORAGE_KEY = "my_blog_posts";
const MEDIUM_CACHE_KEY = "medium_blog_posts";
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds

// Fallback posts in case the Medium API fails
const fallbackPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with LoRaWAN for IoT Applications",
    excerpt: "An introduction to LoRaWAN technology and how it enables long-range, low-power IoT communication.",
    content: "LoRaWAN (Long Range Wide Area Network) is a protocol designed for low-power, wide-area networking. It's perfect for IoT devices that need to transmit small amounts of data over long distances while conserving battery power. In this post, we'll explore the fundamentals of LoRaWAN architecture and how to set up your first LoRaWAN device...",
    date: "April 15, 2025",
    author: "Naman Vashishtha",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Advanced Java Techniques for Enterprise Applications",
    excerpt: "Exploring design patterns and architectural approaches for scalable Java applications.",
    content: "Enterprise-grade Java applications require thoughtful architecture to ensure maintainability and scalability. This post explores essential design patterns like Dependency Injection, Factory Method, and Observer pattern, along with architectural considerations for microservices deployment...",
    date: "March 22, 2025",
    author: "Naman Vashishtha",
    category: "Java",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "New Trends in Web Development: JAMstack and Beyond",
    excerpt: "Exploring the JAMStack and its impact on modern web development.",
    content: "JAMstack is revolutionizing modern web development by prioritizing speed, security, and scalability. This architecture—built on JavaScript, APIs, and Markup—decouples the frontend from the backend, enabling developers to create fast, static sites that dynamically pull data via APIs. With tools like Next.js and Gatsby, JAMstack simplifies workflows while leveraging CDNs for global performance. Beyond JAMstack, trends like serverless computing and AI-driven development are emerging, allowing for more efficient scaling and personalized user experiences. As web development evolves, embracing these innovations ensures developers can build robust, future-proof applications that meet growing user demands.",
    date: "May 12, 2025",
    author: "Naman Vashishtha",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [isWriting, setIsWriting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "Naman Vashishtha",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  });

  // Function to extract text content from HTML
  const extractTextFromHtml = (html: string): string => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  // Function to get a suitable image from the post
  const getPostImage = (item: MediumRssItem): string => {
    // Try to get image from enclosure
    if (item.enclosure && item.enclosure.url) {
      return item.enclosure.url;
    }
    
    // Try to get first image from content
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const match = imgRegex.exec(item.content);
    if (match && match[1]) {
      return match[1];
    }
    
    // Default image if none found
    return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";
  };

  // Function to fetch Medium posts
  const fetchMediumPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Check if we have cached data that's not expired
      const cachedData = localStorage.getItem(MEDIUM_CACHE_KEY);
      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        const now = new Date().getTime();
        
        // If cache is still valid, use it
        if (now - timestamp < CACHE_EXPIRY) {
          setPosts(data);
          setLoading(false);
          return;
        }
      }
      
      // Use a CORS proxy to fetch the RSS feed
      const response = await axios.get(
        'https://api.rss2json.com/v1/api.json',
        {
          params: {
            rss_url: 'https://medium.com/@unclejiyo/feed',
            api_key: 'ykxoqnpwmgn8gsjybfeilroqmvhlwsyrhsdwvjfk',
            count: 10
          },
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (response.data && response.data.items) {
        const mediumPosts: BlogPost[] = response.data.items.map((item: MediumRssItem, index: number) => {
          // Extract a clean excerpt from the description
          const excerpt = extractTextFromHtml(item.description).substring(0, 150) + '...';
          
          // Format the date
          const pubDate = new Date(item.pubDate);
          const formattedDate = pubDate.toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          });
          
          return {
            id: index + 1,
            title: item.title,
            excerpt: excerpt,
            content: item.content,
            date: formattedDate,
            author: item.author || "Naman Vashishtha",
            category: item.categories && item.categories.length > 0 ? item.categories[0] : "Technology",
            image: getPostImage(item),
            link: item.link
          };
        });
        
        // Cache the data with timestamp
        localStorage.setItem(
          MEDIUM_CACHE_KEY, 
          JSON.stringify({
            data: mediumPosts,
            timestamp: new Date().getTime()
          })
        );
        
        setPosts(mediumPosts);
      } else {
        throw new Error("No posts found");
      }
    } catch (err) {
      console.error("Error fetching Medium posts:", err);
      
      // More detailed error logging
      if (axios.isAxiosError(err)) {
        console.error("Axios error details:", {
          status: err.response?.status,
          statusText: err.response?.statusText,
          data: err.response?.data,
          message: err.message
        });
      }
      
      setError("Failed to load blog posts from Medium. Using fallback posts instead.");
      setPosts(fallbackPosts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMediumPosts();
  }, []);

  useEffect(() => {
    // Only save locally created posts to localStorage
    const localPosts = posts.filter(post => !post.link);
    if (localPosts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localPosts));
    }
  }, [posts]);

  const handleCreatePost = () => {
    const post: BlogPost = {
      ...newPost as BlogPost,
      id: Date.now(), // Use timestamp as unique ID
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    };

    setPosts([post, ...posts]);
    setNewPost({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      author: "Naman Vashishtha",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    });
    setIsWriting(false);
  };
  
  // Function to refresh posts from Medium
  const refreshPosts = () => {
    fetchMediumPosts();
  };

  return (
    <section id="blog" className="py-12 md:py-20 px-4 md:px-6 lg:px-12 xl:px-16 dark-section">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="mb-8 md:mb-12 flex flex-wrap justify-between items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Blog</h2>
            <div className="h-1 w-16 md:w-20 bg-primary rounded"></div>
            {error && (
              <p className="text-red-500 mt-2 text-xs sm:text-sm">{error}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <button 
              onClick={refreshPosts}
              className="px-3 sm:px-4 py-2 border border-border text-foreground rounded-md hover:bg-background transition-all flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px] touch-manipulation"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Refresh Medium Posts'}
            </button>
            <button 
              onClick={() => setIsWriting(true)}
              className="px-3 sm:px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
            >
              Write New Post
            </button>
          </div>
        </motion.div>

        {loading && !isWriting && !activePost ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : isWriting ? (
          <motion.div 
            className="bg-card rounded-lg p-4 sm:p-6 mb-8 sm:mb-10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Create New Post</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input 
                  type="text" 
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  className="w-full p-2 sm:p-3 rounded-md bg-background border border-border focus:border-primary outline-none text-sm sm:text-base touch-manipulation"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <input 
                  type="text" 
                  value={newPost.category}
                  onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                  className="w-full p-2 sm:p-3 rounded-md bg-background border border-border focus:border-primary outline-none text-sm sm:text-base touch-manipulation"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Excerpt (Short Summary)</label>
                <textarea 
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                  className="w-full p-2 sm:p-3 rounded-md bg-background border border-border focus:border-primary outline-none h-20 resize-none text-sm sm:text-base touch-manipulation"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea 
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  className="w-full p-2 sm:p-3 rounded-md bg-background border border-border focus:border-primary outline-none h-40 sm:h-48 resize-none text-sm sm:text-base touch-manipulation"
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-3">
                <button 
                  onClick={() => setIsWriting(false)}
                  className="px-4 py-2 border border-border text-foreground rounded-md hover:bg-background transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleCreatePost}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
                  disabled={!newPost.title || !newPost.content}
                >
                  Publish Post
                </button>
              </div>
            </div>
          </motion.div>
        ) : activePost ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
              <img 
                src={activePost.image} 
                alt={activePost.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <button 
                onClick={() => setActivePost(null)}
                className="mb-4 text-primary hover:underline inline-flex items-center gap-1 text-sm sm:text-base min-h-[44px] px-2 py-1 -mx-2 rounded-md touch-manipulation"
              >
                ← Back to all posts
              </button>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">{activePost.title}</h3>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mt-3 mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <FaCalendar className="text-primary text-xs sm:text-sm" />
                  <span>{activePost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaUser className="text-primary text-xs sm:text-sm" />
                  <span>{activePost.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaTag className="text-primary text-xs sm:text-sm" />
                  <span>{activePost.category}</span>
                </div>
              </div>
              
              {activePost.link ? (
                <div>
                  <div 
                    className="prose prose-invert prose-sm sm:prose-base max-w-none mb-4 sm:mb-6"
                    dangerouslySetInnerHTML={{ __html: activePost.content }}
                  />
                  <a 
                    href={activePost.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline mt-4 text-sm sm:text-base touch-manipulation min-h-[44px] px-2 py-1 -mx-2 rounded-md"
                  >
                    Read full article on Medium <FaExternalLinkAlt size={12} className="sm:text-sm" />
                  </a>
                </div>
              ) : (
                <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
                  <p className="text-base sm:text-lg leading-relaxed">{activePost.content}</p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {posts.length === 0 && !loading ? (
              <div className="col-span-1 lg:col-span-2 text-center py-10">
                <p className="text-base sm:text-lg text-muted-foreground">No blog posts found. Try refreshing or check back later.</p>
              </div>
            ) : (
              posts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group touch-manipulation active:scale-95"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActivePost(post)}
                >
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xs font-semibold text-primary">
                        {post.category}
                      </div>
                      {post.link && (
                        <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          Medium
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm sm:text-base line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-muted-foreground">
                        {post.date}
                      </span>
                      <span className="text-primary group-hover:underline font-medium">
                        Read more
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
