import { Link } from 'react-router-dom'
import { ArrowLeft, Droplets, Heart, Shield, Users, Award, Calendar, CheckCircle, TrendingUp, Syringe, Stethoscope, Activity, HandHelping } from 'lucide-react'

const HealthWashDetail = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img
          src="/images/health-and-wash.jpg"
          alt="Health and WASH Programme - Community health initiatives"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <Link to="/our-project" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Health & WASH Programme</h1>
            <p className="text-lg md:text-xl">Promoting Hygiene, Health, and Well-being for All</p>
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
                <Heart className="w-8 h-8 text-orange-500" />
                Programme Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Health & WASH (Water, Sanitation, and Hygiene) Programme addresses critical health challenges 
                faced by marginalized communities in Ghazipur and Gharoli areas. Through comprehensive health camps, 
                vaccination drives, and hygiene awareness sessions, the program has significantly improved community 
                health outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mahila Panchayat has played a crucial role in providing relief during COVID-19 and continues to 
                organize health interventions for women, children, and elderly community members.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">4,050+</div>
                <p className="text-sm text-gray-600">Health Camp Beneficiaries</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">300+</div>
                <p className="text-sm text-gray-600">Abha Health Cards Made</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">90%</div>
                <p className="text-sm text-gray-600">Adult Vaccination Rate</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">2</div>
                <p className="text-sm text-gray-600">Vaccination Camps</p>
              </div>
            </div>

            {/* Health Camps */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Stethoscope className="w-8 h-8 text-orange-500" />
                Health Camps & Medical Support
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Multiple health camps have been organized by Mahila Panchayat, benefiting women and children from 
                Ghazipur slum and Sapera colony. These camps provide essential medical services, medicines, and 
                health guidance to those who cannot afford regular healthcare.
              </p>
              <div className="bg-green-50 p-5 rounded-lg mt-4">
                <h3 className="font-bold text-gray-800 text-lg mb-2">COVID-19 Response Highlights</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">✓ <span>Distribution of thermal scanners, oximeters, masks, sanitizers</span></li>
                  <li className="flex items-start gap-2">✓ <span>Support provided to Anganwadi Workers, ASHA workers, and medical officers</span></li>
                  <li className="flex items-start gap-2">✓ <span>PPE kits, masks, gloves, and sanitizers provided to Lal Bhadur Shastry Hospital</span></li>
                  <li className="flex items-start gap-2">✓ <span>2 vaccination camps organized in Gharoli area with CRY support</span></li>
                </ul>
              </div>
            </div>

            {/* Vaccination Campaigns */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Syringe className="w-8 h-8 text-orange-500" />
                Vaccination Awareness Campaigns
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A comprehensive vaccination awareness campaign was carried out through:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>✓ Household contacts</li>
                <li>✓ Nukkad meetings and community meetings</li>
                <li>✓ Nukkad plays and puppet shows</li>
                <li>✓ Posters and pamphlets distribution</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Total reach: 10,000+ population</strong>. As a result, 90% of the adult population in target areas 
                was successfully vaccinated. Children vaccination awareness was created through one-to-one contacts 
                and nukkad plays with the Mahak team.
              </p>
            </div>

            {/* Aadhaar & PAN Card Camps */}
            <div className="mb-12 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-500" />
                Document Support Camps
              </h3>
              <p className="text-gray-700 mb-3">
                Recognizing that many women lacked essential identification documents, ASoJ organized special camps:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-orange-600">Aadhaar & PAN Card Camp</p>
                  <p className="text-gray-600 text-sm">270 people got their Aadhaar and PAN cards made</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-orange-600">Health Card Camp</p>
                  <p className="text-gray-600 text-sm">40 people benefited from health card facility</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-orange-600">Abha Health Cards</p>
                  <p className="text-gray-600 text-sm">300 families received Abha health cards</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-orange-600">Bank Account Camp</p>
                  <p className="text-gray-600 text-sm">45 women opened accounts in Bank of Baroda</p>
                </div>
              </div>
            </div>

            {/* Menstrual Hygiene */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Menstrual Health & Hygiene</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Regular sessions on menstrual health and hygiene are conducted to address stigma and promote safe practices. 
                Most girls and adolescents were initially hesitant to discuss menstruation, but through repeated sessions, 
                they have learned to speak openly about this matter.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Menstruation Day Celebration</h3>
                  <p className="text-gray-600 text-sm mt-1">70 women and 40 adolescent girls participated in awareness activities and received sanitary pads</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Monthly Pad Distribution</h3>
                  <p className="text-gray-600 text-sm mt-1">Sanitary pads distributed monthly by PINKISHE Foundation to adolescent girls and women</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Cervical Cancer Awareness</h3>
                  <p className="text-gray-600 text-sm mt-1">Sessions conducted on the origin of menstruation cycle and cervical cancer prevention</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">22 Meetings Held</h3>
                  <p className="text-gray-600 text-sm mt-1">125 children (32 boys, 93 girls) participated in menstrual hygiene sessions</p>
                </div>
              </div>
            </div>

            {/* WASH Protocol */}
            <div className="mb-12 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Activity className="w-6 h-6 text-orange-500" />
                WASH Protocol Awareness
              </h3>
              <p className="text-gray-700 mb-3">
                Capacity building sessions on WASH protocol were conducted with:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Anganwadi Workers and ASHA Workers</li>
                <li>✓ SMC (School Management Committee) members</li>
                <li>✓ Nigrani Samooh (Community Vigilance Group) ladies</li>
              </ul>
              <p className="text-gray-700 mt-3">
                3 community meetings were also organized in both areas on WASH protocol to ensure community-wide 
                adoption of hygiene practices.
              </p>
            </div>

            {/* Health Impact Stories */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Award className="w-8 h-8 text-orange-500" />
                Health Impact Highlights
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800">Anganwadi Nutrition Support</h3>
                  <p className="text-gray-600 mt-1">
                    Children receive nutritious food for growth and health. Growth monitoring of children is done every month. 
                    Pregnant and lactating mothers receive essential nutrition and health checkups.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800">Immunization Support</h3>
                  <p className="text-gray-600 mt-1">
                    Regular counseling of mothers to take small children to dispensary for vaccinations. Database of 
                    immunization prepared for further advocacy. Regular follow-ups done with ASHA workers.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800">Mental Health Activities</h3>
                  <p className="text-gray-600 mt-1">
                    18 sessions on mental health conducted with 185 children (86 boys, 99 girls). Topics included:
                    recognizing signs of anger, understanding emotions, and anger management techniques.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Partners */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Key Partners & Supporters</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <p className="text-sm">✓ Delhi Government Dispensary</p>
                <p className="text-sm">✓ CRY (Child Rights and You)</p>
                <p className="text-sm">✓ PINKISHE Foundation</p>
                <p className="text-sm">✓ Anganwadi Centres</p>
                <p className="text-sm">✓ ASHA Workers Network</p>
                <p className="text-sm">✓ Local Health Departments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HealthWashDetail
