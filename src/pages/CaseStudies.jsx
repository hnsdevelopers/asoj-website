import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  ArrowRight,
  Heart,
  ShieldCheck,
  MapPin,
  Users,
  Sparkles
} from 'lucide-react'

const CaseStudies = () => {
  const [stories, setStories] = useState([])
  const [filteredStories, setFilteredStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [categories, setCategories] = useState(['All'])

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('/assets/case-studies.json')
        const data = await response.json()
        setStories(data.caseStudies)
        setFilteredStories(data.caseStudies)

        const uniqueCategories = ['All', ...new Set(data.caseStudies.map(s => s.category))]
        setCategories(uniqueCategories)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching case studies:', error)
        setLoading(false)
      }
    }

    fetchStories()
  }, [])

  useEffect(() => {
    let filtered = stories

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(s => s.category === selectedCategory)
    }

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredStories(filtered)
  }, [searchTerm, selectedCategory, stories])

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
          src="/images/women_empowerment.jpg"
          alt="Case Studies - Women's Success Stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-lg md:text-xl">
              Real stories of resilience, mediation, and transformation from our Mahila Panchayat Programme
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Note */}
      <section className="bg-orange-50 border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-gray-600 flex items-start gap-2 max-w-4xl">
            <ShieldCheck className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <span>
              To protect the privacy and safety of everyone involved, all names in these stories have
              been changed and locations generalized. These stories are shared with care, in the spirit
              of the positive change made possible through community-based support.
            </span>
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-10 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-orange-500">{stories.length}+</p>
              <p className="text-sm text-gray-600 mt-1">Success Stories</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-orange-500">100%</p>
              <p className="text-sm text-gray-600 mt-1">Community-Led</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-orange-500">2013</p>
              <p className="text-sm text-gray-600 mt-1">Programme Since</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, theme, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

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

          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-orange-500">{filteredStories.length}</span> stories
            </p>
          </div>

          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <article
                  key={story.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Link to={`/case-studies/${story.slug}`}>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={story.featuredImage}
                        alt={story.theme}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                          {story.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{story.name}{story.age ? `, ${story.age}` : ''}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{story.location}</span>
                      </div>
                    </div>

                    <Link to={`/case-studies/${story.slug}`}>
                      <h2 className="text-lg font-bold text-gray-800 mb-3 hover:text-orange-500 transition line-clamp-2">
                        {story.theme}
                      </h2>
                    </Link>

                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {story.challenge}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500 inline-flex items-center gap-1">
                        <Heart className="w-4 h-4 text-orange-400" /> Resolved
                      </span>
                      <Link
                        to={`/case-studies/${story.slug}`}
                        className="text-orange-500 hover:text-orange-600 font-medium text-sm inline-flex items-center gap-1"
                      >
                        Read Story <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support More Stories Like These</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Your support helps our Mahila Panchayat continue providing counseling, mediation,
            and justice for women at their doorstep.
          </p>
          <Link
            to="/donate-now"
            className="inline-block px-8 py-3 bg-white text-orange-500 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
