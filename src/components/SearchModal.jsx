import { useState, useEffect, useRef } from 'react'
import { 
  Search, 
  X, 
  Clock, 
  TrendingUp,
  FileText,
  Home,
  Info,
  History,
  Target,
  FolderKanban,
  Users,
  Map,
  Image,
  Mail,
  Heart,
  ArrowRight
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const pages = [
    { path: '/', title: 'Home', icon: Home, content: 'Association for Social Justice and Research, NGO, non-profit, social justice' },
    { path: '/about', title: 'About Us', icon: Info, content: 'About Association for Social Justice and Research, mission, vision, history' },
    { path: '/our-history', title: 'Our History', icon: History, content: 'History of ASOJ, establishment, journey, milestones' },
    { path: '/our-vision-mission', title: 'Our Vision & Mission', icon: Target, content: 'Vision, mission, goals, objectives, social justice' },
    { path: '/our-project', title: 'Our Projects', icon: FolderKanban, content: 'Projects, initiatives, health, education, livelihood, child rights, women empowerment' },
    { path: '/mahila-panchayat-programme', title: 'Mahila Panchayat Programme', icon: Users, content: 'Mahila Panchayat, women empowerment, gender justice, community justice' },
    { path: '/proposed-intervention-area', title: 'Proposed Intervention Area', icon: Map, content: 'Intervention area, Gharoli, demographic information, community outreach' },
    { path: '/gallery', title: 'Gallery', icon: Image, content: 'Photo gallery, events, activities, community programs' },
    { path: '/contact-us', title: 'Contact Us', icon: Mail, content: 'Contact, address, phone, email, location' },
    { path: '/donate-now', title: 'Donate Now', icon: Heart, content: 'Donate, support, contribution, fundraiser' },
  ]

  const recentSearches = [
    'women empowerment',
    'education programs',
    'health initiatives',
    'child rights',
    'community outreach'
  ]

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 100)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([])
      return
    }

    const results = pages.filter(page => 
      page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  const handleResultClick = (path) => {
    onClose()
    navigate(path)
  }

  const handleRecentSearch = (term) => {
    setSearchTerm(term)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl mx-4 mt-20 md:mt-32">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-orange-50 to-pink-50">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-800">Search Website</h3>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-white/50 rounded-full transition"
            >
              <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </button>
          </div>
          
          {/* Search Input */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for pages, programs, or information..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Search for programs like "education", "women empowerment", "health initiatives"
            </p>
          </div>

          {/* Content */}
          <div className="max-h-[60vh] overflow-y-auto">
            {searchTerm.trim() === '' ? (
              <div className="p-4">
                {/* Recent Searches */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <h4 className="text-sm font-medium text-gray-600">Recent Searches</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentSearch(term)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-orange-100 rounded-full text-sm text-gray-600 transition"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Pages */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <h4 className="text-sm font-medium text-gray-600">Popular Pages</h4>
                  </div>
                  <div className="space-y-2">
                    {pages.slice(0, 5).map((page, index) => {
                      const Icon = page.icon
                      return (
                        <button
                          key={index}
                          onClick={() => handleResultClick(page.path)}
                          className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition group"
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-orange-500" />
                            <span className="text-gray-700 group-hover:text-orange-500">{page.title}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-4">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchTerm}"
                </p>
                {searchResults.length > 0 ? (
                  <div className="space-y-2">
                    {searchResults.map((result, index) => {
                      const Icon = result.icon
                      return (
                        <button
                          key={index}
                          onClick={() => handleResultClick(result.path)}
                          className="w-full text-left p-4 rounded-xl hover:bg-gray-50 transition group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-orange-100 rounded-lg">
                              <Icon className="w-5 h-5 text-orange-500" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 group-hover:text-orange-500 mb-1">
                                {result.title}
                              </h4>
                              <p className="text-sm text-gray-500 line-clamp-2">
                                {result.content}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 mt-2" />
                          </div>
                        </button>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">No results found for "{searchTerm}"</p>
                    <p className="text-sm text-gray-400 mt-1">Try searching with different keywords</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t bg-gray-50 text-center">
            <p className="text-xs text-gray-400">
              Press <kbd className="px-1.5 py-0.5 bg-white border rounded text-xs">ESC</kbd> to close
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal