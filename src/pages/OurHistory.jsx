import { Calendar, Award, Heart, Users, Globe, TrendingUp } from 'lucide-react'

const OurHistory = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/6.jpg"
          alt="Our History"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
            <p className="text-lg md:text-xl">Journey of Service Since 1994</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-800">Foundation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Association for Social Justice and Research was registered under Societies Registration Act, 1860 
                on <strong>August 03, 1994</strong> at New Delhi. Since its inception, the organization has been 
                dedicated to promoting social justice through research, advocacy, and community engagement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-800">Leadership Journey</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kamala Upadhayay has been affiliated with Association for Social Justice and Research as 
                General Secretary since 2009. With a Ph.D in Geography and nearly 22 years of hands-on experience 
                ranging from grassroots to planning implementation, she has been instrumental in guiding the 
                organization's work on gender discrimination and child rights issues.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Prior to joining ASJR, Dr. Upadhayay remained affiliated with various women organizations in Delhi, 
                bringing valuable experience and insights to the organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl">
                <Award className="w-10 h-10 text-orange-500 mb-3" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">2017-18 Achievement</h3>
                <p className="text-gray-600 text-sm">
                  Dr. Kamala Upadhayay was awarded the Volunteer Sector Award for 2017-18 from National Foundation of India.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl">
                <Heart className="w-10 h-10 text-orange-500 mb-3" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Anganwadi Success</h3>
                <p className="text-gray-600 text-sm">
                  In December 2017, an Anganwadi cum Crèche was established in the community through advocacy efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurHistory