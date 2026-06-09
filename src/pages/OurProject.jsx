import { Droplets, Briefcase, GraduationCap, Shield, Heart, HandHelping, ArrowRight, Users, Calendar, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const OurProject = () => {
  const projects = [
    { 
      id: "mahila-panchayat",
      name: "Mahila Panchayat Programme", 
      slug: "mahila-panchayat-programme",
      image: "https://iili.io/BLaUw9n.jpg",
      description: "Community-based alternative justice delivery system for women, providing legal awareness, counseling, and dispute resolution at the grassroots level.",
      shortDesc: "Empowering women through collective justice",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      stats: [
        { value: "250+", label: "Cases Registered" },
        { value: "102", label: "Cases Resolved" },
        { value: "22,891", label: "Households Contacted" },
        { value: "2013", label: "Year Established" }
      ]
    },
    { 
      id: "education",
      name: "Child Activity Centres (CAC)", 
      slug: "child-activity-centres",
      image: "https://iili.io/BLaU0Zv.jpg",
      description: "Remedial education centers providing quality learning support to children from marginalized communities, helping them succeed in formal schooling.",
      shortDesc: "Quality education for every child",
      icon: GraduationCap,
      color: "from-purple-500 to-indigo-500",
      stats: [
        { value: "160+", label: "Children Enrolled" },
        { value: "2", label: "Centers Operating" },
        { value: "143", label: "Out-of-School Children Enrolled" },
        { value: "2nd-10th", label: "Classes Supported" }
      ]
    },
    { 
      id: "digital-learning",
      name: "Digital Learning Centre", 
      slug: "digital-learning-centre",
      image: "https://iili.io/BLaUlwJ.jpg",
      description: "Computer education program affiliated with NIIT Foundation, providing digital literacy and career readiness skills to youth from underserved communities.",
      shortDesc: "Bridging the digital divide",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      stats: [
        { value: "55", label: "Students Enrolled" },
        { value: "13-18", label: "Age Group" },
        { value: "NIIT", label: "Certified Course" },
        { value: "CCAB", label: "Course Completed" }
      ]
    },
    { 
      id: "health-wash",
      name: "Health & WASH", 
      slug: "health-wash",
      image: "/images/health-and-wash.jpg",
      description: "Comprehensive health initiatives including health camps, vaccination drives, and WASH awareness programs for community well-being.",
      shortDesc: "Health and hygiene for all",
      icon: Droplets,
      color: "from-green-500 to-teal-500",
      stats: [
        { value: "4,050+", label: "Health Camp Beneficiaries" },
        { value: "300+", label: "Health Cards Made" },
        { value: "90%", label: "Vaccination Rate" },
        { value: "2", label: "Vaccination Camps" }
      ]
    },
    { 
      id: "child-protection",
      name: "Child Protection", 
      slug: "child-protection",
      image: "/images/422564913_915544820062162_6992698709254487044_n.jpg",
      description: "Protecting children from abuse, child labor, and child marriage through awareness, advocacy, and legal support.",
      shortDesc: "Safe childhood for every child",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      stats: [
        { value: "15", label: "Good-Bad Touch Sessions" },
        { value: "172", label: "Children Trained" },
        { value: "5", label: "POSCO Sessions" },
        { value: "2", label: "Girls Got Compensation" }
      ]
    },
    { 
      id: "women-empowerment",
      name: "Women Empowerment", 
      slug: "women-empowerment",
      image: "https://iili.io/BLaUw9n.jpg",
      description: "Holistic women empowerment through life skills training, gender sensitization, social security linkage, and economic independence programs.",
      shortDesc: "Building self-reliant women",
      icon: Heart,
      color: "from-pink-500 to-purple-500",
      stats: [
        { value: "40", label: "Girls in Sukanya Yojana" },
        { value: "45", label: "Bank Accounts Opened" },
        { value: "30", label: "Ujjwala Beneficiaries" },
        { value: "10", label: "Widow Pensions" }
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/16-768x432.jpg"
          alt="Our Projects - Association for Social Justice and Research initiatives for community development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects & Initiatives</h1>
            <p className="text-lg md:text-xl">Creating Lasting Change Through Targeted Interventions</p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Association for Social Justice and Research implements comprehensive, community-driven programs 
              addressing critical issues facing marginalized communities. Since 1994, our initiatives have reached 
              thousands of families, empowered women, educated children, and created pathways to justice and dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Flagship Programs</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Each program is designed to address specific community needs with measurable impact
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
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-6 h-6 text-orange-500" />
                      <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3">{project.shortDesc}</p>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    {/* Stats Preview */}
                    <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-gray-100">
                      {project.stats.slice(0, 2).map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-orange-500 font-bold text-lg">{stat.value}</div>
                          <div className="text-gray-500 text-xs">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/our-project/${project.slug}`}
                      className="mt-2 text-orange-500 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Overall Impact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collective Impact</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold">30+</div>
              <p className="text-sm opacity-90 mt-1">Years of Service</p>
            </div>
            <div>
              <div className="text-4xl font-bold">50,000+</div>
              <p className="text-sm opacity-90 mt-1">Families Reached</p>
            </div>
            <div>
              <div className="text-4xl font-bold">250+</div>
              <p className="text-sm opacity-90 mt-1">DV Cases Handled</p>
            </div>
            <div>
              <div className="text-4xl font-bold">160+</div>
              <p className="text-sm opacity-90 mt-1">Children in Education</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurProject
