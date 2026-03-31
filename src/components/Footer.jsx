import { Link } from 'react-router-dom'
import { 
  Home, 
  Info, 
  FolderKanban, 
  Image, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Heart,
  // Facebook,
  // Twitter,
  // Instagram,
  // Linkedin,
  // Youtube,
  Mail as MailIcon,
  ChevronRight,
  Globe,
  Users,
  Map,
  TrendingUp
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/our-project', label: 'Our Projects', icon: FolderKanban },
    { path: '/gallery', label: 'Our Gallery', icon: Image },
    { path: '/contact-us', label: 'Contact Us', icon: Mail },
  ]

  const projectLinks = [
    { path: '/proposed-intervention-area', label: 'Gharoli area', icon: Map },
    { path: '/mahila-panchayat-programme', label: 'Mahila Panchayat Programme', icon: Users },
    { path: '/our-project', label: 'Occupation Structure', icon: TrendingUp },
    { path: '/our-project', label: 'Impact of Pandemic', icon: Heart },
    { path: '/proposed-intervention-area', label: 'Proposed Intervention Area', icon: Map },
  ]

  // const socialLinks = [
  //   // { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
  //   // { icon: Twitter, href: '#', color: 'hover:bg-blue-400' },
  //   // { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
  //   { icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
  //   { icon: Youtube, href: '#', color: 'hover:bg-red-600' },
  // ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Stay Updated with Our Work
                </h3>
                <p className="text-white/80">
                  Subscribe to our newsletter for latest updates, stories, and impact reports.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition font-semibold flex items-center justify-center gap-2">
                  Subscribe <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Organization Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="images/logo-ASOJ-1.jpg" className='rounded-full h-14 w-14' alt="" />
              <h3 className="text-white font-bold text-lg">ASOJ</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Association for Social Justice and Research is dedicated to promoting social justice through research, 
              advocacy, and community engagement.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  62 B Law Apartment Karkarduma Delhi 110092
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <a href="tel:09969569535" className="text-gray-400 hover:text-orange-400 transition">
                  099 695 695 35
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-orange-400" />
                <a href="mailto:info@asoj.in" className="text-gray-400 hover:text-orange-400 transition">
                  info@asoj.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400">Mon - Fri: 8:00 am - 6:00 pm</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Quick Link
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 mt-2"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Our Projects */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Our Projects
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 mt-2"></div>
            </h3>
            <ul className="space-y-3">
              {projectLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Map & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Location Map
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 mt-2"></div>
            </h3>
            <div className="bg-gray-800 h-40 rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.234567890123!2d77.31234567890123!3d28.62345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b8c1234567%3A0x123456789abcdef!2sKarkarduma%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ASOJ Location Map"
              ></iframe>
            </div>
            
            {/* Social Links */}
            {/* <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                )
              })}
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Copyright by Association for Social Justice and Research. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Designed for ASOJ with <Heart className="w-3 h-3 inline text-red-500 fill-red-500" /> by Sharwan Kumar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
