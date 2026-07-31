import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  MapPin,
  Users,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Handshake,
  CheckCircle2,
  Heart
} from 'lucide-react'

const CaseStudyDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [story, setStory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedStories, setRelatedStories] = useState([])

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch('/assets/case-studies.json')
        const data = await response.json()
        const found = data.caseStudies.find(s => s.slug === slug)

        if (found) {
          setStory(found)

          const related = data.caseStudies
            .filter(s => s.category === found.category && s.slug !== slug)
            .slice(0, 3)
          setRelatedStories(related)
        } else {
          navigate('/case-studies')
        }

        setLoading(false)
      } catch (error) {
        console.error('Error fetching case study:', error)
        setLoading(false)
      }
    }

    fetchStory()
    window.scrollTo(0, 0)
  }, [slug, navigate])

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

  if (!story) {
    return null
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[280px] md:h-[360px] overflow-hidden">
        <img
          src={story.featuredImage}
          alt={story.theme}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10 text-white">
            <span className="inline-block px-3 py-1 bg-orange-500 rounded-full text-sm font-medium mb-4">
              {story.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">{story.theme}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600 border-b pb-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-500" />
              <span>{story.name}{story.age ? `, ${story.age} years` : ''}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>{story.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-orange-500" />
              <Link to={story.programmeSlug} className="hover:text-orange-500 transition">
                {story.programme}
              </Link>
            </div>
          </div>

          {/* Privacy note */}
          <div className="flex items-start gap-2 bg-orange-50 rounded-lg p-4 mb-10 text-sm text-gray-600">
            <ShieldCheck className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <span>All names changed and location generalized to protect privacy and safety.</span>
          </div>

          {/* Story sections */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-400">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-3">
                <Zap className="w-5 h-5 text-red-500" /> The Challenge
              </h2>
              <p className="text-gray-700 leading-relaxed">{story.challenge}</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-400">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-3">
                <Handshake className="w-5 h-5 text-blue-500" /> Action Taken
              </h2>
              <p className="text-gray-700 leading-relaxed">{story.action}</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-400">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Outcome
              </h2>
              <p className="text-gray-700 leading-relaxed">{story.outcome}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Help Us Support More Women Like {story.name}</h3>
            <p className="mb-6 opacity-90">
              Every case resolved through the Mahila Panchayat starts with community support and funding.
            </p>
            <Link
              to="/donate-now"
              className="inline-block px-6 py-3 bg-white text-orange-500 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">More {story.category} Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStories.map((related) => (
                <Link
                  key={related.id}
                  to={`/case-studies/${related.slug}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={related.featuredImage}
                      alt={related.theme}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition line-clamp-2">
                      {related.theme}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{related.name} • {related.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CaseStudyDetail
