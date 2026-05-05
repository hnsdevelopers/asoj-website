import { Link } from 'react-router-dom'
import { 
  Home, 
  Search, 
  ArrowLeft, 
  Heart, 
  BookOpen, 
  Users, 
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  AlertCircle
} from 'lucide-react'

const NotFound = () => {
  const popularLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: BookOpen },
    { path: '/our-project', label: 'Our Projects', icon: Users },
    { path: '/contact-us', label: 'Contact Us', icon: Mail },
    { path: '/donate-now', label: 'Donate Now', icon: Heart },
  ]

  const projectLinks = [
    { path: '/our-project/mahila-panchayat-programme', label: 'Mahila Panchayat Programme' },
    { path: '/our-project/child-activity-centres', label: 'Child Activity Centres' },
    { path: '/our-project/digital-learning-centre', label: 'Digital Learning Centre' },
    { path: '/gallery', label: 'Photo Gallery' },
    { path: '/annual-reports', label: 'Annual Reports' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/6.jpg"
          alt="Page Not Found"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <div className="mb-6">
              <AlertCircle className="w-20 h-20 mx-auto text-orange-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Can We Help You?</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              <p className="text-gray-600 mt-4">
                Here are some quick links to help you find what you're looking for
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Popular Pages */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-bold text-gray-800">Popular Pages</h3>
                </div>
                <ul className="space-y-3">
                  {popularLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 transition group"
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                            <span className="text-gray-700 group-hover:text-orange-500">
                              {link.label}
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Our Projects */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-bold text-gray-800">Our Projects</h3>
                </div>
                <ul className="space-y-3">
                  {projectLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 transition group"
                      >
                        <span className="text-gray-700 group-hover:text-orange-500">
                          {link.label}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Search Section */}
            <div className="mt-10 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Search className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-800">Can't find what you're looking for?</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Try searching our website using the search feature or contact us directly for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    // Trigger search modal - you'll need to integrate with your Header's search functionality
                    const searchButton = document.querySelector('[data-search-trigger]')
                    if (searchButton) {
                      searchButton.click()
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  <Search className="w-5 h-5" />
                  Search Website
                </button>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition"
                >
                  <Mail className="w-5 h-5" />
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
            <p className="text-gray-400 mb-6">
              Reach out to us directly and we'll help you find what you need.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <a href="tel:09969569535" className="hover:text-orange-500 transition">
                  099 695 695 35
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:info@asoj.in" className="hover:text-orange-500 transition">
                  info@asoj.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>62 B Law Apartment, Karkarduma, Delhi 110092</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound
