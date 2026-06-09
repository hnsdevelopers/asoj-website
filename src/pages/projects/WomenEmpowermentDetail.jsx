import { Link } from 'react-router-dom'
import { ArrowLeft, Heart, Users, Award, Calendar, CheckCircle, TrendingUp, Briefcase, Wallet, HandHelping, Target, Sparkles } from 'lucide-react'

const WomenEmpowermentDetail = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img
          src="/images/women_empowerment.jpg"
          alt="Women Empowerment Programme - Building self-reliant women"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <Link to="/our-project" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Women Empowerment Programme</h1>
            <p className="text-lg md:text-xl">Building Self-Reliant, Confident, and Empowered Women</p>
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
                The Women Empowerment Programme focuses on creating self-reliant, confident, and economically 
                independent women through a holistic approach combining legal awareness, skill development, 
                social security linkage, and leadership training.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through the Mahila Panchayat network and targeted interventions, the programme has successfully 
                linked hundreds of women to government schemes, opened bank accounts, provided skill training, 
                and created platforms for women to voice their concerns and claim their rights.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">45</div>
                <p className="text-sm text-gray-600">Bank Accounts Opened</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">40</div>
                <p className="text-sm text-gray-600">Girls in Sukanya Yojana</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">30</div>
                <p className="text-sm text-gray-600">Ujjwala Beneficiaries</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">139</div>
                <p className="text-sm text-gray-600">Widow Pensions</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">224</div>
                <p className="text-sm text-gray-600">Old Age Pensions</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">49</div>
                <p className="text-sm text-gray-600">Disabled Pensions</p>
              </div>
            </div>

            {/* Social Security Schemes - Major Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Wallet className="w-8 h-8 text-orange-500" />
                Social Security Scheme Linkages
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ASoJ works extensively to connect women with various government welfare schemes, ensuring they 
                receive entitled benefits and financial support.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 text-lg">Sukanya Samriddhi Yojana</h3>
                  <p className="text-gray-600">40 girls linked to this savings scheme for girl child education and marriage</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 text-lg">Ladli Yojana</h3>
                  <p className="text-gray-600">16 girls associated with Delhi Government's Ladli scheme</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 text-lg">Pradhan Mantri Ujjwala Yojana</h3>
                  <p className="text-gray-600">30 women received free LPG connections</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 text-lg">Widow Pension Scheme</h3>
                  <p className="text-gray-600">139 widows now receive ₹2,500 per month pension</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 text-lg">Old Age Pension Scheme</h3>
                  <p className="text-gray-600">224 senior citizens now receive ₹2,000-₹2,500 per month pension</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 text-lg">Disabled Pension Scheme</h3>
                  <p className="text-gray-600">49 Handicapped now receive ₹2,500 per month pension</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 text-lg">E-Shram Card & Labour Card</h3>
                  <p className="text-gray-600">Awareness created and linkages facilitated for unorganized sector workers</p>
                </div>
                
              </div>
            </div>

            {/* Financial Inclusion */}
            <div className="mb-12 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-orange-500" />
                Financial Inclusion Initiatives
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Bank Account Camp</p>
                  <p className="text-gray-600 text-sm">45 women opened accounts in Bank of Baroda</p>
                </div>
                <div>
                  <p className="font-semibold">PAN Card Support</p>
                  <p className="text-gray-600 text-sm">Helped women obtain PAN cards for account operations</p>
                </div>
                <div>
                  <p className="font-semibold">Aadhaar Card Support</p>
                  <p className="text-gray-600 text-sm">270 people got Aadhaar cards made through special camps</p>
                </div>
                <div>
                  <p className="font-semibold">Abha Health Cards</p>
                  <p className="text-gray-600 text-sm">300 families received digital health ID cards</p>
                </div>
              </div>
            </div>

            {/* Life Skills & Parenting Module */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Life Skills & Parenting Module</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Life Skills Workshop in School</h3>
                  <p className="text-gray-600">
                    Conducted with <strong>170 girls of 10th class</strong> in Nithari Government School. Registered on 
                    Vidyanjali portal, ASoJ was invited to conduct Life Skills module training.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Parenting Module</h3>
                  <p className="text-gray-600">
                    2 groups formed with parents of CAC children:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                    <li>• 20 women in Gharoli CAC parent group</li>
                    <li>• 20 women in Ghazipur CAC parent group</li>
                    <li>• 8 sessions of parenting module conducted annually</li>
                    <li>• Focus on child development, communication, and support strategies</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Child & Adolescent Groups</h3>
                  <p className="text-gray-600">
                    <strong>Child Group:</strong> 124 members (58 boys, 66 girls) - 26 meetings conducted<br />
                    <strong>Adolescent Group:</strong> 125 members (32 boys, 93 girls) - 31 sessions conducted
                  </p>
                </div>
              </div>
            </div>

            {/* Gender Sensitization */}
            <div className="mb-12 bg-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Target className="w-6 h-6 text-orange-500" />
                Gender Sensitization Workshops
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>2 workshops</strong> conducted with <strong>40 women participants</strong> in each workshop:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Understanding gender discrimination and its impact on daily life</li>
                <li>✓ Discussion on social norms, cultural practices, and equality</li>
                <li>✓ Recognizing patriarchal social structures and exploitation</li>
                <li>✓ Poster making, slogan writing, and nukkad play activities</li>
              </ul>
              <p className="text-gray-700 mt-3">
                <strong>Outcome:</strong> Women reported increased confidence in raising their voices against discrimination.
              </p>
            </div>

            {/* Mega Meetings & Awareness */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Mega Awareness Meetings</h2>
              <p className="text-gray-700 mb-4">
                <strong>2 mega meetings</strong> organized with Delhi Women Commission volunteers, attended by <strong>210 women</strong>.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800">Topics Covered:</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>✓ Sexual harassment at workplace</li>
                  <li>✓ Legal rights and reporting mechanisms</li>
                  <li>✓ Video-based awareness sessions for better understanding</li>
                </ul>
              </div>
            </div>

            {/* Women Helpline & Support Services */}
            <div className="mb-12 bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <HandHelping className="w-6 h-6 text-orange-500" />
                Women Helpline & Support Services
              </h3>
              <p className="text-gray-700 mb-3">
                Door-to-door awareness conducted in Ghazipur police station area about <strong>Women's Helpline Number 181</strong>.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <p className="font-semibold">Key Messages:</p>
                  <ul className="text-sm text-gray-600 mt-1">
                    <li>• Domestic violence can be committed by any family member</li>
                    <li>• Not just husband - in-laws, relatives can also be perpetrators</li>
                    <li>• Complaints can be lodged through 181 anytime</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Crisis Support:</p>
                  <ul className="text-sm text-gray-600 mt-1">
                    <li>• One Stop Centre (Kalyanpuri) - legal assistance, counseling, shelter</li>
                    <li>• Facility to stay 5-7 days with children</li>
                    <li>• Legal aid and protection services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-orange-500" />
                Women Empowerment Success Stories
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800">Rinki - Overcoming Family Restrictions</h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    14-year-old Rinki was stopped from attending CAC due to fears of a boy stalking her. 
                    Through continuous counseling by Mahila Panchayat, her father's mindset changed. 
                    He now supports her education and even helped her prepare for a dance program. 
                    Rinki has regained her confidence and attends regularly.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800">Widow Pension Success</h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    Through door-to-door awareness, many widows learned about pension schemes. 
                    <strong>139 women</strong> now receive ₹2,500 per month pension, providing essential 
                    financial stability and improved confidence.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800">Old Age Pension Success</h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    Through door-to-door awareness, many senior citizens learned about pension schemes. 
                    <strong>224 senior citizens</strong> now receive ₹2,000 to ₹2,500 per month pension, providing essential 
                    financial stability and improved confidence.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800">Disabled Pension Success</h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    Through door-to-door awareness, many handicapped learned about pension schemes. 
                    <strong>49 handicapped persons</strong> now receive ₹2,500 per month pension, providing essential 
                    financial stability and improved confidence.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800">Self-Help Group Formation</h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    Women volunteers joined through door-to-door campaigns, now actively providing 
                    information about Delhi Women Commission and Mahila Panchayat to other women in the community.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Impact Summary */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Overall Empowerment Impact
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <p>✓ 22,891 households reached</p>
                <p>✓ 2,040+ women in awareness meetings</p>
                <p>✓ 45 bank accounts opened</p>
                <p>✓ 40 girls in Sukanya Yojana</p>
                <p>✓ 30 Ujjwala beneficiaries</p>
                <p>✓ 139 widow pensions secured</p>
                <p>✓ 224 old age pensions secured</p>
                <p>✓ 49 disabled pensions secured</p>
                <p>✓ 300 Abha health cards</p>
                <p>✓ 270 Aadhaar/PAN cards</p>
                <p>✓ 2 gender sensitization workshops</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WomenEmpowermentDetail
