import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Search, 
  ArrowRight,
  BookOpen,
  Heart,
  TrendingUp,
  Users,
  Eye
} from 'lucide-react'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [categories, setCategories] = useState(['All'])

  // Fetch blogs from JSON file
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/assets/blogs.json')
        const data = await response.json()
        setBlogs(data.blogs)
        setFilteredBlogs(data.blogs)
        
        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(data.blogs.map(blog => blog.category))]
        setCategories(uniqueCategories)
        
        setLoading(false)
      } catch (error) {
        console.error('Error fetching blogs:', error)
        setLoading(false)
      }
    }
    
    fetchBlogs()
  }, [])

  // Filter blogs based on search and category
  useEffect(() => {
    let filtered = blogs
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory)
    }
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    setFilteredBlogs(filtered)
  }, [searchTerm, selectedCategory, blogs])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading stories...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/16-768x432.jpg"
          alt="Blog - Stories of Change and Impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Stories of Change</h1>
            <p className="text-lg md:text-xl">Insights, updates, and impact stories from our work</p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stories by title, author, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      selectedCategory === category
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-orange-500">{filteredBlogs.length}</span> stories
            </p>
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <Link to={`/blog/${blog.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(blog.publishedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime} min read</span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${blog.slug}`}>
                      <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-orange-500 transition line-clamp-2">
                        {blog.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <img
                          src={blog.authorImage}
                          alt={blog.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-800">{blog.author}</p>
                          <p className="text-xs text-gray-500">Author</p>
                        </div>
                      </div>
                      <Link 
                        to={`/blog/${blog.slug}`}
                        className="text-orange-500 hover:text-orange-600 font-medium text-sm inline-flex items-center gap-1"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No stories found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get the latest updates, impact stories, and news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-orange-500 rounded-lg font-semibold hover:shadow-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
