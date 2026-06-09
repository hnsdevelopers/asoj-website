import { Users, Shield, Heart, Scale, MessageCircle, Award } from 'lucide-react'

const MahilaPanchayatProgramme = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="https://iili.io/BLaUw9n.jpg"
          alt="Mahila Panchayat Programme"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mahila Panchayat Programme</h1>
            <p className="text-lg md:text-xl">Empowering Women Through Community Justice</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 p-8 rounded-xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-10 h-10 text-orange-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">About Mahila Panchayat</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Mahila Panchayat is a community-based initiative organized by the Delhi Commission for Women, 
                aimed at providing women with a platform to address their grievances and seek justice at the 
                community level. The program focuses on empowering women through collective decision-making and 
                resolving issues related to domestic violence, family disputes, and other social concerns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Scale className="w-10 h-10 text-orange-500 mb-3" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objectives</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Provide accessible justice mechanism for women</li>
                  <li>✓ Address domestic violence and family disputes</li>
                  <li>✓ Empower women through collective decision-making</li>
                  <li>✓ Create awareness about women's rights</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Heart className="w-10 h-10 text-orange-500 mb-3" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Key Achievements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Successfully mediated numerous family disputes</li>
                  <li>✓ Created awareness about women's legal rights</li>
                  <li>✓ Built confidence in women to speak up</li>
                  <li>✓ Strengthened community support systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-800">Our Approach</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Through Mahila Panchayat, we provide a safe space for women to discuss their problems and find 
                collective solutions. The program brings together women from the community to act as mediators 
                and counselors, helping resolve issues through dialogue and mutual understanding.
              </p>
              <div className="mt-4 pt-4 border-t border-orange-200">
                <p className="text-sm text-gray-600">
                  Supported by: <span className="font-semibold">Delhi Commission for Women</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MahilaPanchayatProgramme
