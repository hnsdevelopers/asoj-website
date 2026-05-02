import { 
  Heart, 
  BookOpen, 
  Users,
  Shield, 
  GraduationCap, 
  Star,
  TrendingUp,
  Award,
  Globe,
  MapPin,
  Phone,
  ChevronRight,
  Leaf,
  HandHelping,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


  const projects = [
    { 
      name: "Health & Wash", 
      image: "/images/healthandwash.jpg",
      color: "from-blue-500 to-blue-600",
      description: "Promoting hygiene and healthcare access through community awareness programs, health camps, and sanitation initiatives."
    },
    { 
      name: "Livelihood & Skill Development", 
      image: "/images/16-768x432.jpg",
      color: "from-green-500 to-green-600",
      description: "Empowering communities through vocational training, skill development workshops, and sustainable livelihood programs."
    },
    { 
      name: "Education", 
      image: "/images/WhatsApp-Image-2024-03-19-at-13.31.34.jpg",
      color: "from-purple-500 to-purple-600",
      description: "Quality education for all children through remedial classes, learning centers, and educational support programs."
    },
    { 
      name: "Child Rights", 
      image: "/images/422564913_915544820062162_6992698709254487044_n.jpg",
      color: "from-red-500 to-red-600",
      description: "Protecting and nurturing young lives through child rights awareness, protection programs, and advocacy."
    },
    { 
      name: "Women Empowerment", 
      image: "/images/women_empowerment.jpg",
      color: "from-pink-500 to-pink-600",
      description: "Building confidence and independence through self-help groups, leadership training, and economic empowerment."
    },
    { 
      name: "Disaster Response", 
      image: "/images/disaster_management.jpg",
      color: "from-orange-500 to-orange-600",
      description: "Rapid relief and rehabilitation support during emergencies, including counseling and material assistance."
    }
  ]

return (

      {/* Our Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Programmes</h2>
            {/* <p className="text-gray-600 text-lg">We Popular To Provide Best Projects.</p> */}
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-xl">{project.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <button className="mt-4 text-orange-500 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default Home
