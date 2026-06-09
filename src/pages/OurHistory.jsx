import { Calendar, Award, Heart, Users, Globe, TrendingUp, Target, Shield } from 'lucide-react'

const OurHistory = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/6.jpg"
          alt="Our History - Association for Social Justice and Research since 2009"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
            <p className="text-lg md:text-xl">Over 15 Years of Service & Impact</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey of Social Justice</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-800">Foundation & Early Years</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Association for Social Justice and Research (ASoJ) was registered under the Societies Registration Act, 1860 
                on <strong>December 23, 2009</strong> at New Delhi. Formed by a group of dedicated activists and intellectuals, 
                the organization was established with a vision to create an equitable society where children, women, and 
                marginalized communities can live with self-esteem and dignity.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6 mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-32 flex-shrink-0">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">2013</span>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">Mahila Panchayat Programme Launched</h3>
                  <p className="text-gray-600 mt-1">
                    Mahila Panchayat Programme was initiated with support from Delhi Commission for Women at Ghazipur Dairy Farm area. 
                    The program provides an alternate justice delivery system for women at their doorstep.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-32 flex-shrink-0">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">2020-21</span>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">CRY Project Initiated</h3>
                  <p className="text-gray-600 mt-1">
                    Partnership with Child Rights and You (CRY) began, focusing on child rights, education, and protection 
                    in Ghazipur and Gharoli areas of East Delhi.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-32 flex-shrink-0">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">2021-22</span>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">Community Support During COVID-19</h3>
                  <p className="text-gray-600 mt-1">
                    Distributed thermal scanners, oximeters, masks, sanitizers, and organized vaccination camps. 
                    Reached over 10,000 community members with awareness campaigns.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-32 flex-shrink-0">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">2022-23</span>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">Digital Learning Centre Established</h3>
                  <p className="text-gray-600 mt-1">
                    Digital Learning Centre affiliated with NIIT Foundation was launched, providing CCAB courses to 55 
                    children and youth, preparing them for future careers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-32 flex-shrink-0">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">2025-26</span>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">Azim Premji Foundation Support</h3>
                  <p className="text-gray-600 mt-1">
                    Mahila Panchayat Programme received support from Azim Premji Foundation, expanding reach to 
                    approximately 4,000 families in Ghazipur and Gharoli areas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-8 rounded-xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-800">Major Achievements</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-700">250+ domestic violence cases registered and 102 successfully resolved</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-700">22,891 households contacted through door-to-door awareness</span>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-700">143 out of school children enrolled in mainstream schools</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-700">2 girls received compensation in child sexual abuse cases</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-800">Current Presence</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Today, ASoJ operates in Ghazipur and Gharoli areas of East Delhi, running:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                <li>✓ 2 Child Activity Centers (CAC) with 160+ children</li>
                <li>✓ Digital Learning Centre affiliated with NIIT Foundation</li>
                <li>✓ Mahila Panchayat covering Ghazipur Police Station area</li>
                <li>✓ Life Skills programs for adolescents</li>
                <li>✓ Health camps and social security linkage programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurHistory
