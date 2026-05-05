import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowLeft,
  Heart,
  Share2,
  BookOpen,
  Facebook,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react'

const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch('/assets/blogs.json')
        const data = await response.json()
        const foundBlog = data.blogs.find(b => b.slug === slug)
        
        if (foundBlog) {
          setBlog(foundBlog)
          
          // Find related posts (same category, different slug)
          const related = data.blogs
            .filter(b => b.category === foundBlog.category && b.slug !== slug)
            .slice(0, 3)
          setRelatedPosts(related)
        } else {
          // Blog not found, redirect to blog page
          navigate('/blog')
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Error fetching blog post:', error)
        setLoading(false)
      }
    }
    
    fetchBlogPost()
    window.scrollTo(0, 0)
  }, [slug, navigate])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${blog?.title}&url=${window.location.href}`, '_blank')
  }

  const shareOnLinkedin = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${blog?.title}`, '_blank')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading story...</p>
        </div>
      </div>
    )
  }

  if (!blog) {
    return null
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <div className="mb-4">
              <span className="px-3 py-1 bg-orange-500 rounded-full text-sm">{blog.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{blog.title}</h1>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <img src={blog.authorImage} alt={blog.author} className="w-8 h-8 rounded-full object-cover" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(blog.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 mb-8 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all stories
            </Link>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </article>

            {/* Share Section */}
            <div className="border-t border-b border-gray-200 py-6 my-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 font-medium">Share this story:</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={shareOnFacebook}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={shareOnTwitter}
                    className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={shareOnLinkedin}
                    className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => window.location.href = `mailto:?subject=${blog.title}&body=${window.location.href}`}
                    className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{blog.author}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {blog.author === "Dr. Kamala Upadhayay" 
                      ? "General Secretary at Association for Social Justice and Research, with over 22 years of experience in grassroots development and women empowerment."
                      : blog.author === "Mahila Panchayat Team"
                      ? "Dedicated team of community women leaders working for justice and empowerment at the grassroots level."
                      : "Passionate team member working towards social justice and community development."}
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Stories</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((post, index) => (
                    <Link key={index} to={`/blog/${post.slug}`} className="group">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                        <div className="h-40 overflow-hidden">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-800 group-hover:text-orange-500 transition line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-2">
                            {formatDate(post.publishedAt)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center text-white">
          <Heart className="w-12 h-12 mx-auto mb-4 fill-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Work</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Your donation helps us continue creating impactful stories like these.
          </p>
          <Link
            to="/donate-now"
            className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
