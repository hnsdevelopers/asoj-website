import { Link } from 'react-router-dom'
import { ArrowLeft, Laptop, Users, Award, Calendar, CheckCircle, TrendingUp, GraduationCap, Briefcase, Star, Target, BookOpen, Code } from 'lucide-react'

const DigitalLearningCentreDetail = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img
          src="/images/16-768x432.jpg"
          alt="Digital Learning Centre - Computer education for youth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <Link to="/our-project" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Learning Centre</h1>
            <p className="text-lg md:text-xl">Bridging the Digital Divide with NIIT Foundation</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Laptop className="w-8 h-8 text-orange-500" />
                Programme Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Digital Learning Centre (DLC) is a flagship computer education program affiliated with the 
                <strong> NIIT Foundation</strong>, providing essential digital skills and career readiness training to 
                youth from underserved communities in Ghazipur and Gharoli areas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Students enrolled in the <strong>CCAB (Certificate Course in Accounting and Banking)</strong> course receive 
                comprehensive training that prepares them for future careers in the digital economy. The program bridges 
                the critical gap between education and technology, making children and youth future-ready.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">55</div>
                <p className="text-sm text-gray-600">Students Enrolled</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">13-18</div>
                <p className="text-sm text-gray-600">Age Group</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">CCAB</div>
                <p className="text-sm text-gray-600">NIIT Certified Course</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">100%</div>
                <p className="text-sm text-gray-600">Course Completion</p>
              </div>
            </div>

            {/* Course Details */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-orange-500" />
                Course Curriculum - CCAB
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 text-lg mb-3">Core Skills Taught</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">✓ <span>Basic Computer Operations</span></li>
                    <li className="flex items-start gap-2">✓ <span>Typing Skills</span></li>
                    <li className="flex items-start gap-2">✓ <span>MS Paint, MS Word, MS Excel</span></li>
                    <li className="flex items-start gap-2">✓ <span>Internet Usage & Digital Safety</span></li>
                    <li className="flex items-start gap-2">✓ <span>Online Platform Navigation</span></li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 text-lg mb-3">Career Preparation</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">✓ <span>Career Counselling Sessions</span></li>
                    <li className="flex items-start gap-2">✓ <span>English Grammar Classes</span></li>
                    <li className="flex items-start gap-2">✓ <span>Practical Computer Training</span></li>
                    <li className="flex items-start gap-2">✓ <span>Individual Mentoring</span></li>
                    <li className="flex items-start gap-2">✓ <span>NIIT Foundation Certificate</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-8 h-8 text-orange-500" />
                Key Achievements
              </h2>
              <ul className="space-y-3 bg-green-50 p-6 rounded-xl">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">All 55 students successfully completed the CCAB course</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Students received NIIT Foundation certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Significant improvement in reading, writing, numeracy, and computer literacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Active participation of girls strengthened gender inclusion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Increased community trust and support towards education</span>
                </li>
              </ul>
            </div>

            {/* Student Success Stories */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Star className="w-8 h-8 text-orange-500" />
                Student Success Stories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800 text-lg">Shashi - From Zero to Confident</h3>
                  <p className="text-gray-600 mt-1 text-sm italic">Age: 16 yrs, Class 11th, Sapera Basti</p>
                  <p className="text-gray-600 mt-2">
                    Shashi comes from a simple family background where her father works as a pickle seller. 
                    When she first joined the computer class, she had very little knowledge about computers 
                    and lacked confidence. With regular attendance and proper guidance, she learned basic 
                    computer skills within a month. Now she works confidently on the computer, prepares 
                    documents independently, and helps her friends. Computer education has given her a 
                    strong foundation for her future in the digital world.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800 text-lg">Ashad - Overcoming Fear of Technology</h3>
                  <p className="text-gray-600 mt-1 text-sm italic">Age: 17 yrs, Class 11th, Mulla Colony</p>
                  <p className="text-gray-600 mt-2">
                    Ashad comes from a rural family with limited resources. Initially afraid to use computers, 
                    he believed computer education was beyond his capacity. With determination, regular attendance, 
                    and consistent effort, Ashad gradually learned to use a computer independently. Today, he can 
                    type, create files, and perform basic computer tasks. The computer class not only developed 
                    his technical skills but also strengthened his confidence and changed his outlook toward learning.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800 text-lg">Riya - From DLC to Advanced Course</h3>
                  <p className="text-gray-600 mt-1 text-sm italic">Age: 20 yrs, Sapera Basti, Gharoli</p>
                  <p className="text-gray-600 mt-2">
                    Riya joined the DLC Computer Class with a strong desire to learn new skills alongside her studies. 
                    For six months, she attended classes regularly, gaining basic computer operations, typing, MS Word, 
                    and essential digital skills. After successfully passing her 12th grade examination, she is now 
                    pursuing a COPA (Computer Operator and Programming Assistant) course in Noida. Riya's journey 
                    proves that with the right guidance and self-confidence, anyone can achieve their dreams.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800 text-lg">Akriti - From DLC to Web Designing</h3>
                  <p className="text-gray-600 mt-1 text-sm italic">Age: 19 yrs, Mulla Colony</p>
                  <p className="text-gray-600 mt-2">
                    Akriti enrolled in the DLC Computer Class with the aim of building a better future. 
                    She completed her computer course with full dedication, learning basic computer skills, 
                    typing, and other essential technical skills. After receiving her certificate, she is now 
                    pursuing a Web Designing course in Mayur Vihar Phase-3. The strong foundation gained at 
                    DLC prepared her well for further studies and boosted her self-confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Weekly Activities */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Weekly Activities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-orange-500" />
                    English Grammar Sessions
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Conducted every Saturday by volunteers from <strong>Cognizant Corporate</strong> for all 55 students.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-orange-500" />
                    Career Counselling
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Regular sessions organized to guide students about future career paths and opportunities.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <Code className="w-5 h-5 text-orange-500" />
                    Practical Training
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Hands-on computer training with individual mentoring and support.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    Soft Skills Development
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Communication skills, confidence building, and professional etiquette training.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-orange-500" />
                Overall Impact
              </h3>
              <p className="text-gray-700 mb-3">
                The Digital Learning Centre has successfully reduced the gap between education and technology 
                for children from marginalized communities. Key outcomes include:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Clear and sustainable improvement in children's core academic skills</li>
                <li>✓ Students confidently using online platforms and digital tools</li>
                <li>✓ Increased discipline, self-learning habits, and positive mindset among children</li>
                <li>✓ Girls actively participating, leading to enhanced gender inclusion</li>
                <li>✓ Parents now trust and support digital education for their children</li>
              </ul>
            </div>

            {/* Programme Details */}
            <div className="bg-orange-500 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Programme Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Age Group Distribution:</p>
                  <p className="text-sm opacity-90 mt-1">13-15 years: 26 students</p>
                  <p className="text-sm opacity-90">15-18 years: 29 students</p>
                </div>
                <div>
                  <p className="font-semibold">Affiliation:</p>
                  <p className="text-sm opacity-90 mt-1">NIIT Foundation</p>
                  <p className="font-semibold mt-2">Course:</p>
                  <p className="text-sm opacity-90">CCAB (Certificate Course in Accounting and Banking)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DigitalLearningCentreDetail
