import { MapPin, Users, Home, School, Heart, Droplets, TrendingUp } from 'lucide-react'

const ProposedInterventionArea = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/6.jpg"
          alt="Intervention Area"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Proposed Intervention Area</h1>
            <p className="text-lg md:text-xl">Gharoli Area, Delhi</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 p-8 rounded-xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-10 h-10 text-orange-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Gharoli Area</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The proposed intervention area is located in Gharoli, Delhi. This area has been identified as 
                a priority location based on our preliminary assessments and community needs analysis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="w-10 h-10 text-orange-500 mb-3" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Demographic Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mixed population with diverse socio-economic backgrounds</li>
                  <li>• Significant population of migrant families</li>
                  <li>• High concentration of women and children</li>
                  <li>• Need for community development interventions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Home className="w-10 h-10 text-orange-500 mb-3" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Settlement Characteristics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mixed housing patterns</li>
                  <li>• Limited access to basic services</li>
                  <li>• Need for improved infrastructure</li>
                  <li>• Community-driven development potential</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-800">Occupation Structure</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The community consists primarily of individuals engaged in informal sector occupations including 
                daily wage labor, small-scale trade, and domestic work. Many women are engaged in home-based 
                work while managing household responsibilities.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-8 rounded-xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-800">Impact of Pandemic</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The COVID-19 pandemic had a significant impact on the community, affecting livelihoods, 
                education, and access to healthcare. Many families faced economic hardships, and children 
                experienced learning disruptions. Our intervention aims to address these challenges and 
                support community recovery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <School className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-800">Proposed Interventions</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Droplets className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-600">Health awareness programs</span>
                </div>
                <div className="flex items-start gap-2">
                  <School className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-600">Educational support for children</span>
                </div>
                <div className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-600">Women empowerment initiatives</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-600">Skill development programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProposedInterventionArea