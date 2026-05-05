import { Link } from 'react-router-dom'
import { ArrowLeft, GraduationCap, Users, BookOpen, Heart, Award, Calendar, CheckCircle, TrendingUp, School, Target } from 'lucide-react'

const ChildActivityCentresDetail = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img
          src="/images/WhatsApp-Image-2024-03-19-at-13.31.34.jpg"
          alt="Child Activity Centres - Education for marginalized children"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <Link to="/our-project" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Child Activity Centres (CAC)</h1>
            <p className="text-lg md:text-xl">Remedial Education for Brighter Futures</p>
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
                <GraduationCap className="w-8 h-8 text-orange-500" />
                Programme Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Association for Social Justice and Research operates <strong>2 Child Activity Centres (CAC)</strong> 
                in Ghazipur slum and Gharoli areas of East Delhi, providing remedial education and academic support 
                to children from marginalized communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These centers serve <strong>160-185 children</strong> from 2nd to 10th standard, offering supplementary 
                education to help them succeed in formal schooling. Children receive teaching learning material (TLM) 
                support, pre-assessment at admission, and regular monitoring of their level-wise growth.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">2</div>
                <p className="text-sm text-gray-600">Centers Operating</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">160+</div>
                <p className="text-sm text-gray-600">Children Enrolled</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">2nd-10th</div>
                <p className="text-sm text-gray-600">Classes Supported</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">65</div>
                <p className="text-sm text-gray-600">OOSC Enrolled (2024-25)</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-8 h-8 text-orange-500" />
                Key Achievements
              </h2>
              <ul className="space-y-3 bg-green-50 p-6 rounded-xl">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">160 children received remedial non-formal education and achieved education excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">4 children secured first and second position in their respective classes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">School attendance increased through regular awareness and motivation of children and parents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Issue-based awareness increased among children on sensitive topics</span>
                </li>
              </ul>
            </div>

            {/* School Enrollment Campaign */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <School className="w-8 h-8 text-orange-500" />
                School Enrollment of Out-of-School Children
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Through dedicated "Back to School Campaigns" and advocacy efforts, ASoJ has successfully enrolled 
                <strong> 143 out of 155 out-of-school children</strong> into mainstream schools over multiple years.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">2024-25 Achievement</h3>
                  <p className="text-gray-600">65 out-of-school children enrolled in school</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">2025-26 Achievement</h3>
                  <p className="text-gray-600">40 children enrolled in school</p>
                </div>
              </div>
            </div>

            {/* Advocacy Work */}
            <div className="mb-12 bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Advocacy for School Admission</h3>
              <p className="text-gray-700 mb-3">
                When 32 children were denied admission in MCD schools, ASoJ:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Advocated with the Director Education Department (Headquarters)</li>
                <li>✓ Submitted a letter to DCPCR (Delhi Commission for Protection of Child Rights)</li>
                <li>✓ Result: 30 children were enrolled, including 11 without necessary documents</li>
              </ul>
            </div>

            {/* Student Success Stories */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Heart className="w-8 h-8 text-orange-500" />
                Student Success Stories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800 text-lg">Sana & Sabra - From No School to Learning</h3>
                  <p className="text-gray-600 mt-1">
                    These sisters (12 and 13 years old) never attended school due to extreme poverty after their father's 
                    death. Enrolled in CAC, within two months they learned to recognize Hindi letters, gained basic numerical 
                    knowledge, and now recite multiplication tables from 2 to 10.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800 text-lg">Tehjiba - Back to School Dream</h3>
                  <p className="text-gray-600 mt-1">
                    Dropped out after Class 4 when her family migrated to Delhi and became waste pickers. After counseling 
                    by the CAC team, her parents enrolled all three daughters at the centre. Tehjiba now dreams of rejoining 
                    school with confidence.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800 text-lg">Arun - From Rag Picker to Student</h3>
                  <p className="text-gray-600 mt-1">
                    Discontinued education after Grade 4 and started rag picking. Through counseling, his parents understood 
                    the seriousness of child labor. Arun was successfully re-enrolled in school and now attends CAC regularly.
                  </p>
                </div>
              </div>
            </div>

            {/* Activities at CAC */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Activities at CAC</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Educational Support</h3>
                  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                    <li>• Remedial classes using TLM</li>
                    <li>• Smart board teaching</li>
                    <li>• Pre and post assessments</li>
                    <li>• Level-wise growth monitoring</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Sports & Recreation</h3>
                  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                    <li>• Indoor games: Carrom, Ludo, Chess</li>
                    <li>• Outdoor games: Cricket, Badminton, Kabaddi, Volleyball</li>
                    <li>• Yoga Day celebration</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Creative Activities</h3>
                  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                    <li>• Craft from waste materials</li>
                    <li>• Poster making and drawing</li>
                    <li>• Slogan writing competitions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Life Skills</h3>
                  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                    <li>• Anger management sessions</li>
                    <li>• Mental health activities</li>
                    <li>• Self-awareness workshops</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Collaboration */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Collaborations & Support</h3>
              <p className="text-gray-700">
                CAC centres work closely with DCPU (District Child Protection Unit), Cognizant Corporate volunteers 
                for English grammar sessions, and various government departments to ensure children receive comprehensive 
                support for their education and overall development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChildActivityCentresDetail
