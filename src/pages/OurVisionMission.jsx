import { Target, Eye, Heart, BookOpen, Shield, Users, Globe, Award, TrendingUp } from 'lucide-react'

const OurVisionMission = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/women_empowerment.jpg"
          alt="Vision and Mission of Association for Social Justice and Research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vision & Mission</h1>
            <p className="text-lg md:text-xl">Working Towards a Just and Equitable Society</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Vision */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-10 h-10 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-8 rounded-xl">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Formation of an equitable society where children, women, and other marginalized people 
                  can live with self-esteem and dignity. Empowerment of marginalized communities through 
                  education, awareness generation and capacity building.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-10 h-10 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To promote social justice through research, advocacy, and community engagement by addressing 
                  systemic inequalities and injustices in society.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-orange-500 mt-1" />
                    <span className="text-gray-600">Restoration of education, health and protection rights for children</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-500 mt-1" />
                    <span className="text-gray-600">Strong grassroots advocacy for gender equality</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-5 h-5 text-orange-500 mt-1" />
                    <span className="text-gray-600">Gender perspective building through constant dialogue</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-orange-500 mt-1" />
                    <span className="text-gray-600">Empower marginalized communities through education</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Goals & Objectives - From Annual Report */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-10 h-10 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-800">Goals & Objectives</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-500 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Restoration of education, health and protection rights for children</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-500 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Strong grassroots advocacy intervention for restoring the right to gender equality, enabling women to be self-reliant and enjoy a healthy, dignified and sustainable quality of life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-500 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Gender Perspective building and attitudinal change of society through constant dialogue, communication and dissemination of information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-500 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Empower children and women to organize themselves to articulate inequality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-500 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Empowerment of marginalized through linking them to the education system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-500 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Effort towards making the system accessible for marginalized through developing leadership and creating awareness</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-10 h-10 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <Heart className="w-10 h-10 text-orange-500 mb-3" />
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Social Justice</h3>
                  <p className="text-gray-600">Committed to addressing systemic inequalities and promoting fairness for all.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <Globe className="w-10 h-10 text-orange-500 mb-3" />
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Equity & Inclusion</h3>
                  <p className="text-gray-600">Ensuring equal opportunities for all individuals regardless of gender, caste, or background.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <Target className="w-10 h-10 text-orange-500 mb-3" />
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Research-Based Approach</h3>
                  <p className="text-gray-600">Using rigorous research and data to inform our programs and advocacy efforts.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <Users className="w-10 h-10 text-orange-500 mb-3" />
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Community Engagement</h3>
                  <p className="text-gray-600">Working collaboratively with communities to create sustainable, long-lasting change.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurVisionMission
