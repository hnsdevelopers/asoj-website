import { Award, Globe, MapPin, BookOpen, Heart, Users, Target, Shield, Calendar, TrendingUp, CheckCircle, Star, HandHelping, Droplets, GraduationCap, Briefcase, Sparkles, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/6.jpg"
          alt="Association for Social Justice and Research - NGO working for women empowerment and child rights in Delhi since 1994"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Association for Social Justice and Research</h1>
            <p className="text-xl md:text-2xl mb-6">National Level Registered Society | Established 1994</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-sm">30+ Years of Service</span>
              <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-sm">FCRA Registered</span>
              <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-sm">80G & 12A Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section - Detailed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                <strong>Association for Social Justice and Research (ASoJ)</strong> is a National level registered society, 
                formed by likeminded Activists and intellectuals dedicated to promoting social justice through research, 
                advocacy, and community engagement. Since our establishment on <strong>August 3, 1994</strong>, we have been 
                working tirelessly to address systemic inequalities and injustices in society.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                The organization operates with the active support of volunteers and governing body members who provide 
                crucial guidance during planning and implementation of organizational activities. Our comprehensive 
                approach combines rigorous research, grassroots advocacy, community mobilization, and strategic partnerships 
                to create sustainable change in the lives of marginalized communities.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Registered under the <strong>Societies Registration Act, 1860</strong> and compliant with <strong>FCRA (Foreign 
                Contribution Regulation Act), 1976</strong>, ASoJ maintains the highest standards of transparency and accountability. 
                The Society has been exempted from Income Tax under the Income Tax Act, 1961, and all donations to ASoJ are 
                eligible for 80G tax benefits.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To promote social justice through research, advocacy, and community engagement by addressing 
                  systemic inequalities and injustices in society. We strive to restore education, health, and 
                  protection rights for children while enabling women to become self-reliant and enjoy a healthy, 
                  dignified, and sustainable quality of life.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  Formation of an equitable society where children, women, and other marginalized people can live 
                  with self-esteem and dignity. Empowerment of marginalized communities through education, awareness 
                  generation, and capacity building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section - Detailed Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey of Impact</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              <p className="text-gray-600 mt-4">Three decades of dedicated service to marginalized communities</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-orange-300"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-lg ml-8 md:ml-0">
                      <div className="absolute left-0 md:left-auto md:right-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center -ml-4 md:mr-4">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-600 mb-2">1994</h3>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Foundation of ASoJ</h4>
                      <p className="text-gray-600">
                        Association for Social Justice and Research was registered under the Societies Registration Act, 
                        1860 on August 3, 1994 at New Delhi. Formed by a group of dedicated activists and intellectuals 
                        committed to social justice.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-xl shadow-lg mr-8 md:mr-0">
                      <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center -ml-4">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-600 mb-2">2013</h3>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Mahila Panchayat Programme Launched</h4>
                      <p className="text-gray-600">
                        Initiated Mahila Panchayat Programme at Ghazipur Dairy Farm area with support from Delhi Commission 
                        for Women. This innovative alternative justice delivery system brings legal aid and dispute resolution 
                        to women's doorsteps.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-lg ml-8 md:ml-0">
                      <div className="absolute left-0 md:left-auto md:right-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center -ml-4 md:mr-4">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-600 mb-2">2020-21</h3>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">CRY Partnership Begins</h4>
                      <p className="text-gray-600">
                        Collaborated with Child Rights and You (CRY) to focus on child rights, education, and protection 
                        in Ghazipur and Gharoli areas. Expanded reach to thousands of out-of-school children.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-xl shadow-lg mr-8 md:mr-0">
                      <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center -ml-4">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-600 mb-2">2022-23</h3>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Digital Learning Centre Established</h4>
                      <p className="text-gray-600">
                        Launched Digital Learning Centre affiliated with NIIT Foundation, providing CCAB certified 
                        computer education to 55 youth annually. Bridging the digital divide for marginalized communities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-lg ml-8 md:ml-0">
                      <div className="absolute left-0 md:left-auto md:right-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center -ml-4 md:mr-4">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-600 mb-2">2025-26</h3>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Azim Premji Foundation Support</h4>
                      <p className="text-gray-600">
                        Mahila Panchayat Programme receives support from Azim Premji Foundation, expanding reach to 
                        4,000+ families in Ghazipur and Gharoli areas with enhanced legal awareness and counseling services.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Comprehensive Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              <p className="text-gray-600 mt-4">Comprehensive interventions addressing critical community needs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Mahila Panchayat Programme</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Community-based alternative justice delivery system providing legal awareness, counseling, and dispute 
                  resolution for women experiencing domestic violence. Since 2013, the programme has:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Registered 250+ domestic violence cases</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Successfully resolved 102 cases through counseling</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Reached 22,891 households through door-to-door outreach</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Conducted 80+ nukad meetings with 2,040+ women participants</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Child Activity Centres (CAC)</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Remedial education centers providing quality learning support to children from marginalized communities:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>2 centers operating in Ghazipur and Gharoli</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>160+ children receiving remedial education</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>143 out-of-school children enrolled in mainstream schools</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>4 children secured top positions in their classes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Digital Learning Centre</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  NIIT Foundation affiliated computer education program bridging the digital divide:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>55 students enrolled in CCAB certified course</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>100% course completion rate</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Weekly English grammar by Cognizant volunteers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Career counseling and mentoring support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Health & WASH Programme</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Comprehensive health initiatives for community well-being:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>4,050+ beneficiaries at health camps</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>300+ Abha health cards created</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>90% adult vaccination rate achieved</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Monthly sanitary pad distribution by PINKISHE Foundation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact - Detailed Statistics */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
            <p className="text-white/90 mt-4 max-w-2xl mx-auto">Over 30 years of dedicated service, creating measurable change</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <p className="text-sm opacity-90">Years of Service</p>
              <p className="text-xs opacity-75 mt-1">Since 1994</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50,000+</div>
              <p className="text-sm opacity-90">Families Reached</p>
              <p className="text-xs opacity-75 mt-1">Across East Delhi</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <p className="text-sm opacity-90">DV Cases Handled</p>
              <p className="text-xs opacity-75 mt-1">102 Successfully Resolved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">160+</div>
              <p className="text-sm opacity-90">Children in Education</p>
              <p className="text-xs opacity-75 mt-1">2 CAC Centers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">4,050+</div>
              <p className="text-sm opacity-90">Health Camp Beneficiaries</p>
              <p className="text-xs opacity-75 mt-1">Free Medical Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">143</div>
              <p className="text-sm opacity-90">Children Enrolled in School</p>
              <p className="text-xs opacity-75 mt-1">Out-of-School Children</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">45</div>
              <p className="text-sm opacity-90">Bank Accounts Opened</p>
              <p className="text-xs opacity-75 mt-1">For Women</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2,040+</div>
              <p className="text-sm opacity-90">Women in Awareness Programs</p>
              <p className="text-xs opacity-75 mt-1">Legal Rights Education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Objectives - Detailed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Goals & Objectives</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              <p className="text-gray-600 mt-4">Strategic priorities guiding our work for social justice</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-gray-800">Child Rights & Education</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Restoration of education, health, and protection rights for children. Ensure every child has access 
                  to quality education, healthcare, and a safe environment free from exploitation and abuse.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-gray-800">Gender Equality & Women Empowerment</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Strong grassroots advocacy intervention for restoring the right to gender equality. Enable women 
                  to become self-reliant and enjoy a healthy, dignified, and sustainable quality of life.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-gray-800">Gender Perspective Building</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Gender perspective building and attitudinal change of society through constant dialogue, 
                  communication, and dissemination of information. Challenge patriarchal norms and promote equality.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-gray-800">Community Empowerment</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Empower children and women to organize themselves to articulate inequality. Build leadership 
                  and collective action capabilities within marginalized communities.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-gray-800">Educational Access</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Empowerment of marginalized communities through linking them to the education system. Remove 
                  barriers to education and ensure inclusive learning opportunities for all.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-gray-800">Systemic Change</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Effort towards making the system accessible for marginalized communities through developing 
                  leadership and creating awareness. Advocate for policy changes and institutional accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Social Justice</h3>
                <p className="text-gray-600">
                  Committed to addressing systemic inequalities and promoting fairness, equity, and dignity for all 
                  individuals regardless of gender, caste, religion, or socioeconomic background.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Research-Based Approach</h3>
                <p className="text-gray-600">
                  Using rigorous research, data collection, and evidence-based methodologies to inform our programs, 
                  measure impact, and advocate for policy changes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHelping className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community Engagement</h3>
                <p className="text-gray-600">
                  Working collaboratively with communities as equal partners, respecting their knowledge, 
                  and building sustainable solutions from within.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Transparency & Accountability</h3>
                <p className="text-gray-600">
                  Maintaining highest standards of financial transparency, regulatory compliance, and accountability 
                  to donors, partners, and the communities we serve.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Inclusivity & Diversity</h3>
                <p className="text-gray-600">
                  Embracing diversity and ensuring our programs are accessible to all, with special focus on the 
                  most marginalized and vulnerable populations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Empowerment</h3>
                <p className="text-gray-600">
                  Building capacity, confidence, and leadership skills so individuals and communities can advocate 
                  for their own rights and drive their own development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              "We believe that working on grassroots level alone will not help much to solve problems in a long-term manner. 
              Systemic change requires research, advocacy, community mobilization, and persistent engagement with government systems."
            </p>
            <p className="font-semibold">- Dr. Kamala Upadhayay</p>
            <p className="text-sm opacity-75">General Secretary, Association for Social Justice and Research</p>
          </div>
        </div>
      </section>

      {/* Legal Status & Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Legal Status & Compliance</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-orange-500" />
                  Registrations & Certifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <span className="font-semibold">Societies Registration Act, 1860</span>
                      <p className="text-gray-600 text-sm">Registered on August 3, 1994 at New Delhi</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <span className="font-semibold">FCRA Registration</span>
                      <p className="text-gray-600 text-sm">Foreign Contribution Regulation Act, 1976</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <span className="font-semibold">Income Tax Exemption</span>
                      <p className="text-gray-600 text-sm">80G & 12A under Income Tax Act, 1961</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <span className="font-semibold">NITI Aayog Registration</span>
                      <p className="text-gray-600 text-sm">Unique ID for NGO Darpan portal</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  Office Addresses
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Registered Office</h4>
                    <p className="text-gray-600">62 B Law Apartment, Karkarduma, Delhi - 110092</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Postal/Communication Address</h4>
                    <p className="text-gray-600">D 325, 1st Floor, Sapeara Basti, Gharauli, Delhi - 110096</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 p-6 rounded-xl text-center">
              <p className="text-gray-700">
                <strong>Tax Exemption Note:</strong> All donations to Association for Social Justice and Research are eligible 
                for 80G tax benefits under the Income Tax Act, 1961. Our FCRA registration enables us to receive foreign 
                contributions for our social development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Together, we can create a more just and equitable society. Support our work through donations, 
            volunteering, or partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate-now"
              className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
            >
              Donate Now <Heart className="w-4 h-4" />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
