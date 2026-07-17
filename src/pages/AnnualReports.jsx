import { Link } from 'react-router-dom'
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  TrendingUp, 
  Heart, 
  Users, 
  Award,
  ChevronRight,
  ExternalLink,
  BookOpen,
  ArrowRight
} from 'lucide-react'

const AnnualReports = () => {
  const reports = [
    {
      id: 1,
      year: "2025-26",
      title: "Annual Report 2025-26",
      description: "Comprehensive report highlighting Mahila Panchayat Programme supported by Azim Premji Foundation, Digital Learning Centre achievements, child protection initiatives, and women empowerment success stories.",
      pdfUrl: "/assets/Annual Report 2025-26.pdf",
      thumbnail: "/images/16-768x432.jpg",
      size: "2.5 MB",
      pages: 25,
      highlights: [
        "250+ domestic violence cases registered, 102 resolved",
        "22,891 households contacted through door-to-door outreach",
        "55 students completed NIIT Foundation CCAB course",
        "2,040+ women participated in nukad meetings",
        "40 out-of-school children enrolled in school"
      ],
      programs: ["Mahila Panchayat", "Digital Learning Centre", "Child Activity Centres", "Child Protection"]
    },
    {
      id: 2,
      year: "2024-25",
      title: "Annual Report 2024-25",
      description: "Annual report covering Mahila Panchayat Programme supported by Delhi Commission for Women, health camps, school enrollment drives, and community awareness initiatives.",
      pdfUrl: "/assets/Annual Report 2024-25.pdf",
      thumbnail: "/images/health-and-wash.jpg",
      size: "2.3 MB",
      pages: 20,
      highlights: [
        "48 nukad meetings with 2,430 women participants",
        "4,050 people benefited from health camps",
        "65 out-of-school children enrolled in school",
        "270 people got Aadhaar/PAN cards",
        "47 Mahila Panchayat meetings organized"
      ],
      programs: ["Health & WASH", "School Enrollment", "Mahila Panchayat", "Document Support"]
    },
    {
      id: 3,
      year: "2023-24",
      title: "Annual Report 2024-25",
      description: "Annual report covering Mahila Panchayat Programme supported by Delhi Commission for Women, health camps, school enrollment drives, and community awareness initiatives.",
      pdfUrl: "/assets/Annual Report 2023-24.pdf",
      thumbnail: "/images/health-and-wash.jpg",
      size: "2.3 MB",
      pages: 20,
      highlights: [
        "48 nukad meetings with 2,430 women participants",
        "4,050 people benefited from health camps",
        "65 out-of-school children enrolled in school",
        "270 people got Aadhaar/PAN cards",
        "47 Mahila Panchayat meetings organized"
      ],
      programs: ["Health & WASH", "School Enrollment", "Mahila Panchayat", "Document Support"]
    },
    {
      id: 4,
      year: "2022-23",
      title: "Annual Report 2022-23",
      description: "Annual report detailing Child Activity Centres operations, digital learning initiatives, COVID-19 relief work, and community mobilization efforts.",
      pdfUrl: "/assets/Annual Report 2022-23.pdf",
      thumbnail: "/images/WhatsApp-Image-2024-03-19-at-13.31.34.jpg",
      size: "2.1 MB",
      pages: 18,
      highlights: [
        "185 children received remedial education in CAC",
        "50 nukad meetings with 2,100 women",
        "143 out-of-school children enrolled in schools",
        "55 children completed CCAB course",
        "22 children enrolled in open school for classes 10,12"
      ],
      programs: ["Child Activity Centres", "Digital Learning", "School Enrollment", "Life Skills"]
    },
    {
      id: 5,
      year: "2021-22",
      title: "Annual Report 2021-22",
      description: "Annual report covering COVID-19 response, vaccination awareness campaigns, school reopening support, and community health initiatives during the pandemic.",
      pdfUrl: "/assets/Annual Report 2021-22.pdf",
      thumbnail: "/images/6.jpg",
      size: "1.9 MB",
      pages: 19,
      highlights: [
        "173 domestic violence cases reported, 127 resolved",
        "90% adult vaccination rate in target areas",
        "77 out-of-school children enrolled in school",
        "3000+ sanitary pads distributed",
        "2 vaccination camps organized"
      ],
      programs: ["COVID-19 Relief", "Vaccination Campaign", "Child Protection", "School Enrollment"]
    }
  ]

  const statsSummary = [
    { value: "30+", label: "Years of Service", icon: Calendar },
    { value: "250+", label: "DV Cases Handled", icon: Heart },
    { value: "160+", label: "Children in Education", icon: Users },
    { value: "4,000+", label: "Families Reached", icon: TrendingUp },
  ]

  const handleDownload = (pdfUrl, title) => {
    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title.replace(/\s/g, '_') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleView = (pdfUrl, title) => {
    // Open PDF in new tab
    window.open(pdfUrl, '_blank');
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/16-768x432.jpg"
          alt="Annual Reports - Association for Social Justice and Research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Annual Reports</h1>
            <p className="text-lg md:text-xl">Transparency, Accountability, and Impact Documentation</p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our annual reports provide comprehensive insights into our programs, achievements, financial 
              transparency, and the impact of our interventions. Since 1994, we have been committed to 
              accountability and documentation of our work for marginalized communities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsSummary.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</div>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Download Annual Reports</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Access our detailed annual reports documenting our work, achievements, and financial statements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reports.map((report) => (
              <div key={report.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={report.thumbnail}
                    alt={report.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">{report.year}</span>
                      <span className="text-xs opacity-75 ml-2">{report.pages} pages</span>
                      <span className="text-xs opacity-75">{report.size}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{report.title}</h3>
                    <FileText className="w-6 h-6 text-orange-500" />
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {report.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {report.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-gray-600 text-xs flex items-start gap-1">
                          <ChevronRight className="w-3 h-3 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                      {report.highlights.length > 3 && (
                        <li className="text-orange-500 text-xs font-medium mt-1">
                          + {report.highlights.length - 3} more highlights
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Programs */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {report.programs.map((program, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-orange-50 text-orange-600 text-xs rounded-full">
                        {program}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleView(report.pdfUrl, report.title)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button
                      onClick={() => handleDownload(report.pdfUrl, report.title)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition font-medium text-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Summary Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Financial Transparency</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We maintain complete financial transparency as required under Income Tax Act, 1961
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-orange-500" />
                Financial Compliance
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Income & Expenditure (2023-24)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-gray-600">Grant from DCW</span>
                      <span className="font-medium">₹14,35,711</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-gray-600">CRY Fund</span>
                      <span className="font-medium">₹24,78,400</span>
                    </div>
                    <div className="flex justify-between py-1 border-b font-semibold">
                      <span className="text-gray-800">Total Income</span>
                      <span className="text-orange-600">₹39,14,111</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Regulatory Compliance</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span className="text-gray-600">Registered under Societies Registration Act, 1860</span>
                    </li>
         
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span className="text-gray-600">80G & 12A Income Tax Exemption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span className="text-gray-600">Annual Audit by Chartered Accountant</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-gray-500 text-xs text-center">
                  All our annual reports are audited and filed with relevant government authorities as per Income Tax regulations.
                  For detailed financial statements, please refer to the complete annual reports above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            For specific queries about our annual reports or financial statements, please contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/donate-now"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition"
            >
              Support Our Work <Heart className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AnnualReports
