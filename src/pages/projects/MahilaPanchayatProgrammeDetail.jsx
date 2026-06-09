import { Calendar, MapPin, Users, Heart, Scale, Award, Target, Phone, Mail, ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const MahilaPanchayatProgrammeDetail = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img
          src="https://iili.io/BLaUw9n.jpg"
          alt="Mahila Panchayat Programme - Women empowerment through community justice"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <Link to="/our-project" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mahila Panchayat Programme</h1>
            <p className="text-lg md:text-xl">Alternative Justice Delivery System for Women</p>
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
                <Scale className="w-8 h-8 text-orange-500" />
                Programme Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Mahila Panchayat Programme is a community-based alternative justice delivery system for women, 
                initiated in August 2013 at Ghazipur Dairy Farm area. Currently supported by the <strong>Azim Premji Foundation</strong> 
                (since 2025-26) and previously by the Delhi Commission for Women, this innovative program provides 
                cost-effective, hassle-free, and speedy delivery of justice at the doorstep of women in distress.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mahila Panchayat is a collective strength of selected community women in leading roles, working to 
                resolve domestic violence cases and local disputes through hearings and counseling. The program 
                currently reaches approximately <strong>4,000 families</strong> in the Ghazipur Police Station area of East Delhi.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">250+</div>
                <p className="text-sm text-gray-600">Cases Registered</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">102</div>
                <p className="text-sm text-gray-600">Cases Resolved</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">22,891</div>
                <p className="text-sm text-gray-600">Households Contacted</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">2,040+</div>
                <p className="text-sm text-gray-600">Women in Nukad Meetings</p>
              </div>
            </div>

            {/* Objectives */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-8 h-8 text-orange-500" />
                Programme Objectives
              </h2>
              <ul className="space-y-3 bg-gray-50 p-6 rounded-xl">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">To stop gender-based violence through awareness and action by changing values and attitudes in society</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Capacity building of grassroots women through creating legal awareness and gender sensitization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Provide a forum for conflict resolution and resolve family disputes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Help women get legal aid when necessary</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Create awareness and implementation of social security schemes like PDS, Widow and old age pension</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Follow up and process documentation of all cases</span>
                </li>
              </ul>
            </div>

            {/* Key Activities */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Heart className="w-8 h-8 text-orange-500" />
                Key Activities & Achievements (2024-26)
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-800">Nukad Meetings (Street-level Awareness)</h3>
                  <p className="text-gray-600 mt-2">
                    <strong>48-80 meetings annually</strong> reaching <strong>2,040-2,430 women</strong>. These sessions focus on 
                    domestic violence laws, women's rights, police procedures, child protection laws, and gender equality.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-800">Mahila Panchayat Weekly Meetings</h3>
                  <p className="text-gray-600 mt-2">
                    <strong>47 meetings annually</strong> with approximately 30 active members. These meetings create a platform 
                    for discussing community issues, strengthening leadership among women, and reviewing registered cases.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-800">Door-to-Door Outreach</h3>
                  <p className="text-gray-600 mt-2">
                    <strong>22,891 households contacted</strong> to share information about Women's Panchayat, legal rights, 
                    and emergency helpline services. This outreach helps identify vulnerable cases and encourages new volunteers.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-800">Case Hearing & Counseling</h3>
                  <p className="text-gray-600 mt-2">
                    <strong>250 domestic violence cases registered</strong>, including maintenance cases. <strong>102 cases resolved</strong> 
                    through counseling and mediation. Hearings held weekly, focusing on mutual respect, safety, and long-term conflict resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* Awarness Campaigns */}
            <div className="mb-12 bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Chuppi Todo Campaign (Break the Silence)</h3>
              <p className="text-gray-700 mb-3">
                A four-day "Break the Silence Against Domestic Violence" campaign was conducted including:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ 3 campaigns organized (2 rallies, 1 stakeholders meeting)</li>
                <li>✓ 2,660 community members reached</li>
                <li>✓ Street plays, slogan writing, and self-identity exercises</li>
                <li>✓ 53 women participated in awareness rally in Ghadoli Area</li>
              </ul>
            </div>

            {/* Gender Sensitization */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Gender Sensitization Workshops</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Two gender sensitization workshops were conducted with <strong>40 women participants</strong> in each workshop. 
                Discussions focused on social norms, cultural practices, and the importance of equality within families and communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Participants discussed how patriarchal social structure influences gender discrimination and contributes 
                to the exploitation of girls and women. Poster making, slogan writing, and nukkad play activities were 
                organized during this campaign.
              </p>
            </div>

            {/* Capacity Building */}
            <div className="mb-12 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Capacity Building Training for Panchayat Members</h3>
              <p className="text-gray-700">
                A capacity-building training program was organized to strengthen skills of Mahila Panchayat members 
                in dispute resolution and counseling. The training included case-handling processes, role-play exercises, 
                and interactive activities to illustrate court procedures and the structure of women's Panchayat.
              </p>
            </div>

            {/* Success Stories */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Award className="w-8 h-8 text-orange-500" />
                Success Stories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800 text-lg">Kajal's Story</h3>
                  <p className="text-gray-600 mt-1">
                    Married for two years, Kajal faced physical abuse, dowry demands, and neglect. The Mahila Panchayat 
                    intervened, recovered her child from unlawful custody, and facilitated a mutual settlement. Her husband 
                    now works regularly, provides financial support, and her in-laws live separately.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800 text-lg">Babita Ji's Story</h3>
                  <p className="text-gray-600 mt-1">
                    Her husband's alcohol addiction caused frequent fights and financial neglect. The Panchayat facilitated 
                    his admission to a de-addiction center, negotiating fees from ₹6,000 to ₹3,000 considering their 
                    financial condition. The family now lives peacefully.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-800 text-lg">Sonia's Story</h3>
                  <p className="text-gray-600 mt-1">
                    Facing domestic violence from her alcoholic husband, Sonia received support from Mahila Panchayat 
                    to file a police complaint and admit her husband to a de-addiction center. She found a new job and 
                    now manages her household independently.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-orange-500 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Get Involved or Seek Help</h3>
              <p className="mb-4 opacity-90">
                If you or someone you know is experiencing domestic violence or needs legal assistance, 
                contact our Mahila Panchayat helpline:
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>099 695 695 35</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>info@asoj.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>D 325, Sapeara Basti, Gharauli, Delhi 110096</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MahilaPanchayatProgrammeDetail
