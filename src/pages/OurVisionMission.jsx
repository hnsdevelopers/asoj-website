import { Target, Eye, Heart, BookOpen, Shield, Users } from 'lucide-react'

const OurVisionMission = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/women_empowerment.jpg"
          alt="Vision & Mission"
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
                  A just and equitable society where every individual has access to quality education, healthcare, 
                  and opportunities to lead a life of dignity and fulfillment, free from discrimination and violence.
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
                    <span className="text-gray-600">Conduct rigorous research on social issues</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-5 h-5 text-orange-500 mt-1" />
                    <span className="text-gray-600">Raise awareness through education and outreach</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-500 mt-1" />
                    <span className="text-gray-600">Advocate for policy changes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-orange-500 mt-1" />
                    <span className="text-gray-600">Advance equity and fairness for all</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-10 h-10 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Social Justice</h3>
                  <p className="text-gray-600">Committed to addressing systemic inequalities and promoting fairness.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Equity</h3>
                  <p className="text-gray-600">Ensuring equal opportunities for all individuals and communities.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Research-Based Approach</h3>
                  <p className="text-gray-600">Using rigorous research to inform our programs and advocacy.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Community Engagement</h3>
                  <p className="text-gray-600">Working with communities to create sustainable change.</p>
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