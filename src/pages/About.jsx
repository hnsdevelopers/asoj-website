import { Award, Globe, MapPin, BookOpen, Heart, Users, Target, Shield, Calendar, TrendingUp } from 'lucide-react'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/6.jpg"
          alt="Association for Social Justice and Research - NGO working for women empowerment and child rights in Delhi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl">Association for Social Justice and Research (ASoJ)</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Association for Social Justice and Research</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              <p className="text-gray-500 mt-4">National Level Registered Society | Established 1994</p>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Association for Social Justice and Research (ASoJ) is a National level registered society, formed by 
              likeminded Activists and intellectuals dedicated to promoting social justice through research, advocacy, 
              and community engagement. The organization has been operating since <strong>August 3, 1994</strong> with 
              the active support of volunteers and governing body members.
            </p>

            <div className="bg-orange-50 p-8 rounded-xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-800">Our Core Work</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                ASoJ works on grassroots advocacy and intervention for restoring the right to gender equality, 
                enabling women to be self-reliant and enjoy a healthy, dignified and sustainable quality of life. 
                The organization focuses on:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">✓ <span>Restoration of education, health and protection rights for children</span></li>
                <li className="flex items-start gap-2">✓ <span>Gender perspective building and attitudinal change through constant dialogue</span></li>
                <li className="flex items-start gap-2">✓ <span>Empowerment of marginalized communities through education and capacity building</span></li>
                <li className="flex items-start gap-2">✓ <span>Making government systems accessible for marginalized communities</span></li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Globe className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Who We Are</h3>
                <p className="text-gray-600 leading-relaxed">
                  ASoJ is a Non-Profit, Non-Governmental Organization (NGO) formed by activists and intellectuals 
                  committed to social justice. The Society has been exempted from Income Tax under the Income Tax Act, 
                  1961. We believe that working on grassroots level alone is not enough; systemic change requires 
                  research, advocacy, and community mobilization.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Award className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Legal Status</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Registered under Societies Registration Act, 1860</li>
                  <li>✓ Registered on August 03, 1994 at New Delhi</li>
                  <li>✓ Registered under FCRA (Foreign Contribution Regulation Act), 1976</li>
                  <li>✓ 80G & 12A Income Tax Exemption under IT Act, 1961</li>
                </ul>
              </div>
            </div>

            {/* Key Impact Stats */}
            <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Impact at a Glance</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">30+</div>
                  <p className="text-sm opacity-90">Years of Service</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">4,000+</div>
                  <p className="text-sm opacity-90">Families Reached</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">250+</div>
                  <p className="text-sm opacity-90">Domestic Violence Cases Handled</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">160+</div>
                  <p className="text-sm opacity-90">Children in Education Centers</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <MapPin className="w-7 h-7 text-orange-500" />
                Office Addresses
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Registered Office</h4>
                  <p className="text-gray-600">62 B Law Apartment, Karkarduma, Delhi - 110092</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Postal/Communication Address</h4>
                  <p className="text-gray-600">D 325, 1st Floor, Sapeara Basti, Gharauli, Delhi - 110096</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">Working Hours</h4>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM | Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
