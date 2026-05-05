import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import OurHistory from './pages/OurHistory'
import OurVisionMission from './pages/OurVisionMission'
import OurProject from './pages/OurProject'
import MahilaPanchayatProgramme from './pages/MahilaPanchayatProgramme'
import ProposedInterventionArea from './pages/ProposedInterventionArea'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'
import DonateNow from './pages/DonateNow'
import EducationGallery from './pages/EducationGallery'
import MahilaPanchayatProgrammeDetail from './pages/projects/MahilaPanchayatProgrammeDetail'
import ChildActivityCentresDetail from './pages/projects/ChildActivityCentresDetail'
import DigitalLearningCentreDetail from './pages/projects/DigitalLearningCentreDetail'
import HealthWashDetail from './pages/projects/HealthWashDetail'
import ChildProtectionDetail from './pages/projects/ChildProtectionDetail'
import WomenEmpowermentDetail from './pages/projects/WomenEmpowermentDetail'

/* 🔥 Scroll to Top Component (ONLY ADDITION) */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// SEO Component to handle dynamic meta tags
const SEO = ({ title, description, keywords, image, url }) => {
  const location = useLocation()
  const currentUrl = `https://asoj.in${location.pathname}`
  
  const defaultTitle = "ASOJ - Association for Social Justice and Research"
  const defaultDescription = "Non-profit organization dedicated to promoting social justice through research, advocacy, and community engagement. Working for women empowerment, child rights, education, and health since 1994."
  const defaultImage = "https://asoj.in/og-image.jpg"
  
  const pageTitle = title ? `${title} | ASOJ` : defaultTitle
  const pageDescription = description || defaultDescription
  const pageImage = image || defaultImage
  const pageUrl = url || currentUrl

  useEffect(() => {
    // Update document title
    document.title = pageTitle
    
    // Update meta tags
    const metaTags = {
      'title': pageTitle,
      'description': pageDescription,
      'keywords': keywords || "social justice, NGO, non-profit, women empowerment, child rights, education, health, community development, Delhi, India",
      'og:title': pageTitle,
      'og:description': pageDescription,
      'og:image': pageImage,
      'og:url': pageUrl,
      'twitter:title': pageTitle,
      'twitter:description': pageDescription,
      'twitter:image': pageImage,
      'twitter:url': pageUrl,
    }
    
    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let selector = name.startsWith('og:') ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector)
      
      if (meta) {
        meta.setAttribute('content', content)
      } else {
        meta = document.createElement('meta')
        if (name.startsWith('og:')) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    })
  }, [pageTitle, pageDescription, pageImage, pageUrl, keywords])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <SEO />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={
              <>
                <SEO 
                  title="About Us" 
                  description="Learn about Association for Social Justice and Research, our mission, vision, and the work we do to promote social justice and equality since 1994."
                  keywords="about ASOJ, NGO about, social justice organization, non-profit history"
                />
                <About />
              </>
            } />
            <Route path="/our-history" element={
              <>
                <SEO 
                  title="Our History" 
                  description="Discover the journey of Association for Social Justice and Research since 1994, our achievements, and the milestones in promoting social justice."
                  keywords="ASOJ history, NGO history, social justice journey, organization milestones"
                />
                <OurHistory />
              </>
            } />
            <Route path="/our-vision-mission" element={
              <>
                <SEO 
                  title="Our Vision & Mission" 
                  description="Our vision for a just and equitable society and mission to promote social justice through research, advocacy, and community engagement."
                  keywords="ASOJ vision, ASOJ mission, social justice goals, NGO objectives"
                />
                <OurVisionMission />
              </>
            } />
            <Route path="/our-project" element={
              <>
                <SEO 
                  title="Our Projects" 
                  description="Explore our impactful projects in health, education, women empowerment, child rights, livelihood, and disaster response."
                  keywords="ASOJ projects, NGO projects, health programs, education initiatives, women empowerment programs"
                />
                <OurProject />
              </>
            } />
            <Route path="/mahila-panchayat-programme" element={
              <>
                <SEO 
                  title="Mahila Panchayat Programme" 
                  description="Empowering women through community-based justice mechanisms. Learn about our Mahila Panchayat initiative supported by Delhi Commission for Women."
                  keywords="Mahila Panchayat, women empowerment, community justice, women's rights, Delhi Commission for Women"
                />
                <MahilaPanchayatProgramme />
              </>
            } />
            <Route path="/proposed-intervention-area" element={
              <>
                <SEO 
                  title="Proposed Intervention Area" 
                  description="Learn about our intervention area in Gharoli, Delhi, including demographic information, occupation structure, and impact of pandemic on the community."
                  keywords="intervention area, Gharoli Delhi, community development, demographic information, pandemic impact"
                />
                <ProposedInterventionArea />
              </>
            } />
            <Route path="/gallery" element={
              <>
                <SEO 
                  title="Gallery" 
                  description="View our photo gallery showcasing moments of impact, community engagement, and the work we do to promote social justice."
                  keywords="ASOJ gallery, NGO photos, community outreach images, social justice pictures"
                />
                <Gallery />
              </>
            } />
            <Route path="/contact-us" element={
              <>
                <SEO 
                  title="Contact Us" 
                  description="Get in touch with Association for Social Justice and Research. Find our office addresses, phone number, email, and send us a message."
                  keywords="contact ASOJ, NGO contact, social justice organization address"
                />
                <ContactUs />
              </>
            } />
            <Route path="/donate-now" element={
              <>
                <SEO 
                  title="Donate Now" 
                  description="Support our mission to promote social justice. Your donation helps us empower women, educate children, and build stronger communities."
                  keywords="donate to ASOJ, support NGO, social justice donation, tax exempt donation"
                />
                <DonateNow />
              </>
            } />
            <Route path="/gallery/education" element={
              <>
                <SEO 
                  title="Gallery | Eduaction" 
                  description="Support our mission to promote social justice. Your donation helps us empower women, educate children, and build stronger communities."
                  keywords="donate to ASOJ, support NGO, social justice donation, tax exempt donation"
                />
                <EducationGallery />
              </>
            } />
<Route path="/our-project/mahila-panchayat-programme" element={
    <>
        <SEO 
            title="Mahila Panchayat Programme" 
            description="Community-based alternative justice delivery system for women in Ghazipur and Gharoli areas. Since 2013, providing legal awareness, counseling, and dispute resolution for domestic violence cases."
            keywords="Mahila Panchayat, women empowerment, domestic violence help, legal aid for women, Delhi Commission for Women, Azim Premji Foundation"
        />
        <MahilaPanchayatProgrammeDetail />
    </>
} />

<Route path="/our-project/child-activity-centres" element={
    <>
        <SEO 
            title="Child Activity Centres (CAC)" 
            description="Remedial education centers for marginalized children in Ghazipur and Gharoli. Providing quality learning support to 160+ children from 2nd to 10th standard."
            keywords="child activity centre, remedial education, out of school children, back to school campaign, education for marginalized children"
        />
        <ChildActivityCentresDetail />
    </>
} />

<Route path="/our-project/digital-learning-centre" element={
    <>
        <SEO 
            title="Digital Learning Centre" 
            description="NIIT Foundation affiliated computer education program for youth. CCAB certified course providing digital literacy and career readiness to 55 students annually."
            keywords="digital learning centre, computer education, NIIT foundation, CCAB course, digital literacy for youth"
        />
        <DigitalLearningCentreDetail />
    </>
} />

<Route path="/our-project/health-wash" element={
    <>
        <SEO 
            title="Health & WASH Programme" 
            description="Comprehensive health initiatives including health camps, vaccination drives, and WASH awareness. 4,050+ beneficiaries served with health cards and medical support."
            keywords="health camp, WASH programme, vaccination drive, health awareness, community health, hygiene promotion"
        />
        <HealthWashDetail />
    </>
} />

<Route path="/our-project/child-protection" element={
    <>
        <SEO 
            title="Child Protection Programme" 
            description="Protecting children from abuse, child labor, and child marriage. POSCO awareness, good touch-bad touch sessions, and legal support for survivors."
            keywords="child protection, POSCO awareness, good touch bad touch, child sexual abuse, child labor prevention, child marriage"
        />
        <ChildProtectionDetail />
    </>
} />

<Route path="/our-project/women-empowerment" element={
    <>
        <SEO 
            title="Women Empowerment Programme" 
            description="Holistic women empowerment through life skills, gender sensitization, social security schemes, and economic independence programs. Sukanya Yojana, Ladli Yojana, and bank account support."
            keywords="women empowerment, gender sensitization, Sukanya Yojana, Ladli Yojana, Ujjwala Yojana, widow pension, self help groups"
        />
        <WomenEmpowermentDetail />
    </>
} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
