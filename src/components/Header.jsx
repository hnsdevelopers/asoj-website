import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  MapPin, 
  ChevronDown,
  Home,
  Info,
  History,
  Newspaper,
  Target,
  FolderKanban,
  Users,
  Map,
  Image,
  Mail,
  Heart,
  ChevronRight,
  Globe,
  Clock,
  BookOpen,
  Award,
  Shield,
  Sparkles,
  FileChartLine,
} from 'lucide-react'
import SearchModal from './SearchModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.dropdown-container')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [openDropdown])

  const dropdowns = {
    about: {
      title: 'About',
      icon: Info,
      items: [
        { path: '/about', label: 'About Us', icon: Info, description: 'Learn about our organization' },
        { path: '/our-history', label: 'Our History', icon: History, description: 'Our journey since 1994' },
        { path: '/our-vision-mission', label: 'Vision & Mission', icon: Target, description: 'Our goals and values' },
      ]
    },
    programs: {
      title: 'Programs',
      icon: FolderKanban,
      items: [
        { path: '/our-project', label: 'Our Projects', icon: FolderKanban, description: 'All our initiatives' },
        { path: '/mahila-panchayat-programme', label: 'Mahila Panchayat', icon: Users, description: 'Women empowerment program' },
        { path: '/proposed-intervention-area', label: 'Intervention Area', icon: Map, description: 'Where we work' },
      ]
    },
    resources: {
      title: 'Resources',
      icon: BookOpen,
      items: [
        { path: '/gallery', label: 'Gallery', icon: Image, description: 'Photos & events' },
        { path: '/blog', label: 'Blog', icon: Newspaper, description: 'Read articles' },
        { path: '/annual-reports', label: 'Annual Report', icon: FileChartLine, description: 'See our activities' },
        { path: '/contact-us', label: 'Contact Us', icon: Mail, description: 'Get in touch' },
      ]
    }
  }

  const topBarLinks = [
    { icon: Phone, text: '099 695 695 35', href: 'tel:09969569535' },
    { icon: MapPin, text: '62 B Law Apartment Karkarduma Delhi 110092' },
  ]

  const toggleDropdown = (dropdownName, e) => {
    e.stopPropagation()
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm py-3 hidden md:block border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              {topBarLinks.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-orange-400" />
                    {item.href ? (
                      <a href={item.href} className="hover:text-orange-400 transition">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-400" />
                <span>India</span>
              </div>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 hover:text-orange-400 transition group"
              >
                <Search className="w-4 h-4 group-hover:scale-110 transition" />
                <span>Help You Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-white shadow-md py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-75 transition"></div>
                <img src="/images/logo-ASOJ-1.jpg" className='h-16 w-16 rounded-full' alt="" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg md:text-xl text-gray-800 leading-tight">
                  Association for Social<br />
                  <span className="text-orange-500">Justice and Research</span>
                </h1>
              </div>
              <div className="block sm:hidden">
                <h1 className="font-bold text-sm text-gray-800">ASOJ</h1>
              </div>
            </Link>

            {/* Desktop Navigation with Dropdowns */}
            <nav className="hidden lg:flex items-center space-x-2">
              {/* Home Link */}
              <NavLink
                to="/"
                className={({ isActive }) => `
                  group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${isActive 
                    ? 'text-orange-500 bg-orange-50' 
                    : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                  }
                `}
              >
                <div className="flex items-center gap-1.5">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </div>
              </NavLink>

              {/* About Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={(e) => toggleDropdown('about', e)}
                  className={`
                    group flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${location.pathname.startsWith('/about') || location.pathname.startsWith('/our-history') || location.pathname.startsWith('/our-vision-mission')
                      ? 'text-orange-500 bg-orange-50' 
                      : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                    }
                  `}
                >
                  <Info className="w-4 h-4" />
                  <span>About</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
                    <div className="p-2">
                      {dropdowns.about.items.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={index}
                            to={item.path}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition group"
                          >
                            <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition">
                              <Icon className="w-4 h-4 text-orange-500" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-800 group-hover:text-orange-500">
                                {item.label}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {item.description}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Programs Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={(e) => toggleDropdown('programs', e)}
                  className={`
                    group flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${location.pathname.startsWith('/our-project') || location.pathname.startsWith('/mahila-panchayat') || location.pathname.startsWith('/proposed-intervention')
                      ? 'text-orange-500 bg-orange-50' 
                      : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                    }
                  `}
                >
                  <FolderKanban className="w-4 h-4" />
                  <span>Programs</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === 'programs' ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === 'programs' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
                    <div className="p-2">
                      {dropdowns.programs.items.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={index}
                            to={item.path}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition group"
                          >
                            <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition">
                              <Icon className="w-4 h-4 text-orange-500" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-800 group-hover:text-orange-500">
                                {item.label}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {item.description}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={(e) => toggleDropdown('resources', e)}
                  className={`
                    group flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${location.pathname === '/gallery' || location.pathname === '/contact-us'
                      ? 'text-orange-500 bg-orange-50' 
                      : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                    }
                  `}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Resources</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
                    <div className="p-2">
                      {dropdowns.resources.items.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={index}
                            to={item.path}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition group"
                          >
                            <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition">
                              <Icon className="w-4 h-4 text-orange-500" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-800 group-hover:text-orange-500">
                                {item.label}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {item.description}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Donate Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/donate-now"
                className="relative group overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-white" />
                  Donate Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </Link>
              
              <button 
                className="lg:hidden relative w-10 h-10 rounded-lg hover:bg-gray-100 transition flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation with Accordion */}
          <div 
            className={`
              lg:hidden fixed inset-x-0 top-[72px] bg-white shadow-xl transition-all duration-300 ease-in-out z-40 overflow-y-auto max-h-[calc(100vh-72px)]
              ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}
            `}
          >
            <div className="py-4 px-4 space-y-1 border-t">
              {/* Mobile Search Bar */}
              <button
                onClick={() => {
                  setIsSearchOpen(true)
                  setIsMenuOpen(false)
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-orange-50 transition mb-3"
              >
                <Search className="w-5 h-5 text-orange-500" />
                <span className="text-gray-600">Help You Search</span>
              </button>
              
              {/* Mobile Home Link */}
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-orange-50 text-orange-500 font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </NavLink>

              {/* Mobile About Section */}
              <MobileNavSection
                title="About"
                icon={Info}
                items={dropdowns.about.items}
                onClose={() => setIsMenuOpen(false)}
              />

              {/* Mobile Programs Section */}
              <MobileNavSection
                title="Programs"
                icon={FolderKanban}
                items={dropdowns.programs.items}
                onClose={() => setIsMenuOpen(false)}
              />

              {/* Mobile Resources Section */}
              <MobileNavSection
                title="Resources"
                icon={BookOpen}
                items={dropdowns.resources.items}
                onClose={() => setIsMenuOpen(false)}
              />

              {/* Mobile Donate Link */}
              <NavLink
                to="/donate-now"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white mt-4"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span className="font-semibold">Donate Now</span>
              </NavLink>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <a href="tel:09969569535" className="hover:text-orange-500">099 695 695 35</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>62 B Law Apartment Karkarduma Delhi 110092</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Mon - Fri: 8:00 am - 6:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

// Mobile Navigation Section Component with Accordion
const MobileNavSection = ({ title, icon: Icon, items, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5" />
          <span>{title}</span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="pl-12 pr-4 pb-2 space-y-2">
          {items.map((item, index) => {
            const ItemIcon = item.icon
            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => {
                  onClose()
                  setIsOpen(false)
                }}
                className="flex items-center gap-3 py-2 text-sm text-gray-500 hover:text-orange-500 transition"
              >
                <ItemIcon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Header
