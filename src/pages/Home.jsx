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

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/images/16-768x432.jpg",
      title: "Empowering Youth Through Education",
      description: "Creating opportunities for young minds to learn and grow"
    },
    {
      id: 2,
      image: "/images/WhatsApp-Image-2024-03-19-at-13.31.40-1-768x432.jpg",
      title: "Children's Rights Awareness Rally",
      description: "Young voices united for a better tomorrow"
    },
    {
      id: 3,
      image: "/images/6.jpg",
      title: "Community Outreach Program",
      description: "Building stronger communities together"
    }
  ]

  const projects = [
    { 
      name: "Health & Wash", 
      image: "https://iili.io/BLaUh8X.md.jpg",
      color: "from-blue-500 to-blue-600",
      description: "Promoting hygiene and healthcare access through community awareness programs, health camps, and sanitation initiatives.",
      url: "/our-project/health-wash"
    },
    { 
      name: "Livelihood & Skill Development", 
      image: "https://iili.io/BLaUcua.md.jpg",
      color: "from-green-500 to-green-600",
      description: "Empowering communities through vocational training, skill development workshops, and sustainable livelihood programs."
    },
    { 
      name: "Education", 
      image: "https://iili.io/BLaUYyg.md.jpg",
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
      image: "https://iili.io/BLaUw9n.md.jpg",
      color: "from-pink-500 to-pink-600",
      description: "Building confidence and independence through self-help groups, leadership training, and economic empowerment.",
      url: "/our-project/women-empowerment"
    },
    { 
      name: "Disaster Response", 
      image: "/images/disaster_management.jpg",
      color: "from-orange-500 to-orange-600",
      description: "Rapid relief and rehabilitation support during emergencies, including counseling and material assistance."
    }
  ]

  const partners = [
    { name: "Child Rights and You", logo: "/images/cry_logo.png" },
    { name: "Delhi Commission for Women", logo: "/images/dcw_logo.jpg" },
    { name: "Mobile Creches Delhi", logo: "/images/mobile_creches.jpg" },
    { name: "Midwest Rotary Delhi", logo: "/images/midwest_rotary.jpg" },
    { name: "Apollo", logo: "/images/apollo_tyres.jpg" }
  ]

  const bearers = [
    { 
      name: "Dr Kamala Upadhayay", 
      position: "General Secretary", 
      image: "/images/kamla_upadhyay.png",
      qualification: "Ph.D in Geography"
    },
    { 
      name: "Mr. B.C Sati", 
      position: "President", 
      image: "/images/bc-sati.png",
      qualification: "Social Activist"
    },
    { 
      name: "Mr. S.C. Shukla", 
      position: "Vice President", 
      image: "/images/sc_shukla.png",
      qualification: "Community Leader"
    },
    { 
      name: "Mr. Ram Prakash Tiwari", 
      position: "Joint Secretary", 
      image: "/images/ram_prakash_tiwari.png",
      qualification: "Development Expert"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div>
      {/* Hero Carousel Section */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-3xl px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 animate-fade-in-delay">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ABOUT US</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-8 h-8 text-orange-500" />
                Association for Social Justice and Research
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Association for Social Justice and Research is a non-profit organization dedicated to 
                promoting social justice through research, advocacy, and community engagement. Our mission 
                is to address systemic inequalities and injustices in society by conducting rigorous research, 
                raising awareness, and advocating for policy changes that advance equity and fairness for all 
                individuals and communities.
              </p>
              <div className="bg-orange-50 p-6 rounded-lg mb-6 border-l-4 border-orange-500">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                  <h4 className="font-semibold text-lg text-orange-800">Education and Outreach</h4>
                </div>
                <p className="text-gray-700">
                  We provide educational resources, training programs, and workshops to increase awareness and 
                  understanding of social justice issues among the general public, policymakers, and other stakeholders.
                </p>
              </div>
              <Link to='about'>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold inline-flex items-center gap-2">
                
                About More <ArrowRight className="w-4 h-4" />
              </button>
                </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Globe className="w-6 h-6 text-orange-500" />
                Get to know us!
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are a Non-Profit, Non-Governmental Organization (NGO), registered under Societies Registration 
                Act, 1860 on August 03, 1994 at New Delhi and under Foreign Contribution Regulation Act 1976 and 
                Income Tax (IT) Exemption Act 1961. We believe that working on grassroots level alone will not 
                help much to solve the problems in long-term manner.
              </p>
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Registered Office address</h4>
                    <p className="text-gray-600 text-sm">62 B Law Apartment Karkarduma Delhi 110092</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Postal/Communication Address</h4>
                    <p className="text-gray-600 text-sm">D 325 1st floor Sapeara Basti Gharauli Delhi 110096</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About General Secretary Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-8 h-8 text-orange-500" />
                About General Secretary
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ph.D in Geography nearly 22 year's hands-on experience ranging from grass root to planning 
                implementation, Monitoring and coordination on social, rights and educational issues prevailing 
                with women, adolescent and children. Guided by the sense of service and commitment to society. 
                Keen to continue working on these issues. I have been affiliated with 'Association for Social 
                justice and Research' a registered society as General Secretary since 2009. Through this 
                organization working on the issue of Gender discrimination and Child rights issue. Prior to 
                that remained affiliated with various women organizations in Delhi.
              </p>
              <h4 className="text-xl font-bold text-gray-800 mt-6 mb-2">Dr Kamala Upadhayay</h4>
              <p className="text-orange-500 mb-4">(M.A.(Geography) PhD)</p>
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6 text-orange-500" />
                  <h4 className="font-semibold text-lg text-gray-800">Achievements</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I was awarded the Volunteer sector Award for 2017-18 from National Foundation of India. After 
                  getting NFI fellowship I received huge exposure through interaction meetings with all the 
                  awardees from all over India. Community level issues were shared a large platform. As a result 
                  learned more about methods of Advocacy. I started creating awareness among parents about ICDS 
                  programme and the benefits of Anganwadi centre in their community. They were mobilized and 
                  convinced that it was the right of their children to get nutrition and protection. A Delegation 
                  from community was taken to WCD department to raise this issue. Further Demand letter was sent 
                  to Delhi Commission for women. With their intervention Anganwadi cum Crèche was sanctioned for 
                  this community and Angnawadi has been established in December 2017. Now all the children of 
                  3-6 years are going to Anganwadi for preschool education and Children, pregnant and lactating 
                  mothers are getting nutrition and health checkups from this centre.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-2xl opacity-20"></div>
                <img
                  src="/images/kamla_upadhyay.png"
                  alt="Dr Kamala Upadhayay"
                  className="w-80 h-80 rounded-full object-cover border-4 border-orange-500 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Heart className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ensuring Health and Education for all</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring health and education for all is not just a goal but a fundamental human right. It necessitates 
                comprehensive strategies aimed at addressing disparities and barriers that hinder access to essential 
                services. By prioritizing equitable healthcare systems and inclusive educational opportunities, societies 
                can empower individuals to lead healthier and more fulfilling lives. Through robust public health 
                initiatives, accessible medical facilities, and preventive care programs, we can strive to eradicate 
                diseases and promote well-being across diverse communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Star className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Building better future for children</h3>
              <p className="text-gray-600 leading-relaxed">
                Building a better future for children is not just a noble aspiration; it is an essential commitment that 
                lays the foundation for a healthier, more prosperous society. By prioritizing the well-being and 
                development of our youngest members, we sow the seeds for a future filled with opportunity and promise. 
                This endeavor requires investment in quality education, accessible healthcare, and supportive environments 
                where children can thrive emotionally, socially, and intellectually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-orange-500" />
                Skilled and confident youth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Skilled and confident youth are the cornerstone of a thriving society. Empowering young people with the 
                necessary skills and confidence not only enriches their lives but also drives societal progress. Through 
                quality education, vocational training, and mentorship programs, we can nurture their talents and equip 
                them with the tools needed to succeed in a rapidly changing world. Confident youth are more resilient in 
                the face of challenges, more willing to take on leadership roles, and more likely to contribute positively 
                to their communities.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/images/16-768x432.jpg"
                alt="Youth Education"
                className="rounded-xl shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gender Justice Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/women_empowerment.jpg"
                alt="Women Empowerment"
                className="rounded-xl shadow-lg w-full h-[300px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Shield className="w-8 h-8 text-orange-500" />
                Violence free lives and gender just society
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creating a violence-free world and achieving a gender-just society for all is an imperative that 
                necessitates concerted efforts from every facet of society. It involves dismantling oppressive structures 
                and fostering environments where individuals of all genders feel safe, respected, and empowered. This 
                journey requires education and awareness campaigns to challenge harmful norms and behaviors, as well as 
                the implementation of robust legal frameworks to address and prevent violence.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                  <Link to={project.url}>
                  <button className="mt-4 text-orange-500 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Skill Now Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SKILL NOW</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
            We Are To Provide Years Of Skill Now. Through dedicated training programs and community initiatives, 
            we're building capabilities that last a lifetime.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition">
              <Leaf className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-lg mb-3">Community Outreach</div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition">
              <GraduationCap className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg mb-3">Education Success</div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '99%' }}></div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">88%</div>
              <div className="text-lg mb-3">Community Trust</div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Current Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Current Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl flex items-center justify-center h-32 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-center">
                  <img src={partner.logo} alt={partner.name} className="max-h-16 mx-auto object-contain" />
                  <p className="text-xs text-gray-500 mt-3 font-medium">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Bearers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Bearers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bearers.map((bearer, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={bearer.image}
                    alt={bearer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{bearer.name}</h3>
                  <p className="text-orange-500 font-semibold mb-2">{bearer.position}</p>
                  <p className="text-sm text-gray-500">{bearer.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
