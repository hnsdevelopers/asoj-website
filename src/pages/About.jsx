import { Award, Globe, MapPin, BookOpen, Heart, Users, Target, Shield } from 'lucide-react'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/6.jpg"
          alt="About ASJR"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl">Association for Social Justice and Research</p>
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
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              The Association for Social Justice and Research is a non-profit organization dedicated to 
              promoting social justice through research, advocacy, and community engagement. Our mission 
              is to address systemic inequalities and injustices in society by conducting rigorous research, 
              raising awareness, and advocating for policy changes that advance equity and fairness for all 
              individuals and communities.
            </p>

            <div className="bg-orange-50 p-8 rounded-xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-800">Education and Outreach</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We provide educational resources, training programs, and workshops to increase awareness and 
                understanding of social justice issues among the general public, policymakers, and other stakeholders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Globe className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Get to know us!</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are a Non-Profit, Non-Governmental Organization (NGO), registered under Societies Registration 
                  Act, 1860 on August 03, 1994 at New Delhi and under Foreign Contribution Regulation Act 1976 and 
                  Income Tax (IT) Exemption Act 1961. We believe that working on grassroots level alone will not 
                  help much to solve the problems in long-term manner.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Award className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Registration Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Registered under Societies Registration Act, 1860</li>
                  <li>✓ Registered on August 03, 1994 at New Delhi</li>
                  <li>✓ Registered under FCRA 1976</li>
                  <li>✓ Income Tax Exemption under IT Act 1961</li>
                </ul>
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
                  <p className="text-gray-600">62 B Law Apartment Karkarduma Delhi 110092</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Postal/Communication Address</h4>
                  <p className="text-gray-600">D 325 1st floor Sapeara Basti Gharauli Delhi 110096</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About