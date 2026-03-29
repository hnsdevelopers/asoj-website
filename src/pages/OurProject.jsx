import { Droplets, Briefcase, GraduationCap, Shield, Heart, HandHelping, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const OurProject = () => {
  const projects = [
    { 
      name: "Health & Wash", 
      image: "/images/health-and-wash.jpg",
      description: "Promoting hygiene and healthcare access through community awareness programs, health camps, and sanitation initiatives.",
      icon: Droplets
    },
    { 
      name: "Livelihood & Skill Development", 
      image: "/images/16-768x432.jpg",
      description: "Empowering communities through vocational training, skill development workshops, and sustainable livelihood programs.",
      icon: Briefcase
    },
    { 
      name: "Education", 
      image: "/images/WhatsApp-Image-2024-03-19-at-13.31.34.jpg",
      description: "Quality education for all children through remedial classes, learning centers, and educational support programs.",
      icon: GraduationCap
    },
    { 
      name: "Child Rights", 
      image: "/images/422564913_915544820062162_6992698709254487044_n.jpg",
      description: "Protecting and nurturing young lives through child rights awareness, protection programs, and advocacy.",
      icon: Shield
    },
    { 
      name: "Women Empowerment", 
      image: "/images/women_empowerment.jpg",
      description: "Building confidence and independence through self-help groups, leadership training, and economic empowerment.",
      icon: Heart
    },
    { 
      name: "Disaster Response", 
      image: "/images/disaster_management.jpg",
      description: "Rapid relief and rehabilitation support during emergencies, including counseling and material assistance.",
      icon: HandHelping
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/16-768x432.jpg"
          alt="Our Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-lg md:text-xl">We Popular To Provide Best Projects</p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Initiatives</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Through these programs, we work towards creating sustainable change in communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-6 h-6 text-orange-500" />
                      <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    <button className="mt-4 text-orange-500 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurProject