import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Heart, Users, Award, Calendar, CheckCircle, TrendingUp, AlertTriangle, Phone, BookOpen, HandHelping } from 'lucide-react'

const ChildProtectionDetail = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img
          src="/images/422564913_915544820062162_6992698709254487044_n.jpg"
          alt="Child Protection Programme - Safe childhood for every child"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <Link to="/our-project" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Child Protection Programme</h1>
            <p className="text-lg md:text-xl">Every Child Deserves a Safe and Secure Childhood</p>
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
                <Shield className="w-8 h-8 text-orange-500" />
                Programme Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Child Protection Programme focuses on creating awareness, preventing abuse, and providing support 
                to children facing exploitation, child labor, child marriage, and sexual abuse. Working in collaboration 
                with DCPU (District Child Protection Unit) and DCPCR (Delhi Commission for Protection of Child Rights), 
                the programme ensures children's rights are protected and violations are addressed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through regular awareness sessions, community mobilization, and referral support, the programme has 
                successfully helped survivors receive compensation and legal justice.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">15</div>
                <p className="text-sm text-gray-600">Good-Bad Touch Sessions</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">172</div>
                <p className="text-sm text-gray-600">Children Trained</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">5</div>
                <p className="text-sm text-gray-600">POSCO Sessions</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">2</div>
                <p className="text-sm text-gray-600">Girls Got Compensation</p>
              </div>
            </div>

            {/* Child Sexual Abuse Awareness */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-8 h-8 text-orange-500" />
                Child Sexual Abuse Awareness
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mahila Panchayat creates widespread awareness in the community on child sexual abuse, resulting in 
                increased reporting of cases. After taking action, efforts are made to provide compensation to survivors.
              </p>
              <div className="bg-red-50 p-5 rounded-lg mb-4">
                <h3 className="font-bold text-gray-800 text-lg mb-2">Key Achievement</h3>
                <p className="text-gray-700">
                  <strong>2 girls</strong> have received compensation in cases of sexual exploitation in the last year.
                </p>
              </div>
            </div>

            {/* POSCO Act Awareness */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-orange-500" />
                POSCO Act Awareness
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Children are informed about the provisions of the Protection of Children from Sexual Offences (POSCO) Act, 
                which provides legal protection and punishment for crimes committed against minors under 18 years of age.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">5 Meetings Conducted</p>
                  <p className="text-gray-600 text-sm">93 children (45 boys, 48 girls) participated</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">Topics Covered</p>
                  <p className="text-gray-600 text-sm">Types of offenses, legal protections, reporting procedures</p>
                </div>
              </div>
            </div>

            {/* Good Touch - Bad Touch */}
            <div className="mb-12 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <HandHelping className="w-6 h-6 text-orange-500" />
                Good Touch - Bad Touch Sessions
              </h3>
              <p className="text-gray-700 mb-3">
                In response to increasing cases of sexual abuse, specialized sessions on Good Touch and Bad Touch 
                were conducted for children aged 7 to 18 years.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">15 Meetings</p>
                  <p className="text-gray-600 text-sm">172 children participated</p>
                </div>
                <div>
                  <p className="font-semibold">Key Learning</p>
                  <p className="text-gray-600 text-sm">Identifying safe and unsafe touch, speaking up, seeking help</p>
                </div>
              </div>
            </div>

            {/* Anti-Child Labour Campaign */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Anti-Child Labour Campaign</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ASoJ works continuously to prevent child labour through awareness, advocacy, and educational support.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">DCPU Collaboration</h3>
                  <p className="text-gray-600 mt-1">
                    Mrs. Zareen Khan, Social Activist from DCPU, conducted <strong>6 meetings</strong> with 110 children (25 boys, 85 girls) 
                    and <strong>10 meetings</strong> with 95 women on:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                    <li>• Child labor causes and consequences</li>
                    <li>• Child Help Line services</li>
                    <li>• Child marriage and its impact on girls</li>
                    <li>• Child migration and trafficking</li>
                    <li>• Health Safety/Laadli Scheme</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Community Engagement</h3>
                  <p className="text-gray-600 mt-1">
                    8 meetings held with 169 participants (87 boys, 82 girls) through role-play activities, 
                    poster-making, and awareness sessions on child labor.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">Success Story - Sabir Ali</h3>
                  <p className="text-gray-600 mt-1">
                    12-year-old Sabir discontinued education after Class 4 and started working at a local fish market. 
                    After counseling by the CAC team, his parents understood the legal consequences of child labor. 
                    Sabir has now been successfully re-enrolled in school and attends the CAC center regularly.
                  </p>
                </div>
              </div>
            </div>

            {/* Anti-Child Marriage Campaign */}
            <div className="mb-12 bg-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Anti-Child Marriage Campaign</h3>
              <p className="text-gray-700 mb-3">
                Nukkad plays and community meetings are conducted regularly to prevent child marriage. 
                Parents are counseled about the legal consequences (marriage before 18 is illegal) and 
                the importance of girls' education.
              </p>
              <div className="mt-3">
                <p className="font-semibold">Success Story - Jahanur</p>
                <p className="text-gray-600 text-sm mt-1">
                  16-year-old Jahanur dropped out after Class 7 due to household responsibilities. When she expressed 
                  desire to continue studies through open schooling, her parents initially refused and talked about marriage. 
                  After counseling, they agreed. Her Class 10 open school form has been filled, and she now attends CAC 
                  daily with confidence.
                </p>
              </div>
            </div>

            {/* Cyber Security */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Cyber Security Awareness</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>18 meetings</strong> were held on cyber security with <strong>105 children</strong> (39 boys, 66 girls).
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold">Topics Covered:</p>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    <li>• Inappropriate content (revenge porn and sextortion)</li>
                    <li>• Age of smartphones and online safety</li>
                    <li>• Online games and goods security</li>
                    <li>• Types of cyber crimes</li>
                    <li>• Digital safety practices</li>
                    <li>• Fake calls and fake messages</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold">2 Workshops Conducted (2025-26):</p>
                  <p className="text-gray-600 mt-1">85 children participated in advanced cyber security awareness workshops</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                After creating awareness, children and youth in the community became conscious and alert, 
                ensuring nobody can cheat them online.
              </p>
            </div>

            {/* Child Helpline & Support */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Phone className="w-6 h-6" />
                Need Help? Reach Out
              </h3>
              <p className="mb-3 opacity-90">If you or a child you know needs protection or support:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <p className="font-semibold">Child Helpline</p>
                  <p className="text-sm">1098</p>
                </div>
                <div>
                  <p className="font-semibold">Women Helpline</p>
                  <p className="text-sm">181</p>
                </div>
                <div>
                  <p className="font-semibold">ASoJ Support</p>
                  <p className="text-sm">099 695 695 35</p>
                </div>
                <div>
                  <p className="font-semibold">DCPCR</p>
                  <p className="text-sm">Delhi Commission for Protection of Child Rights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChildProtectionDetail
