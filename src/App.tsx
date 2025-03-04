import './App.css'
import Navbar from './components/partials/Navbar'
import HomeHeroSection from './components/modules/landing/HomeHeroSection'
import TestimonySection from './components/modules/pagename/TestimonySection'
import { CoverageSection } from './components/modules/pagename/CoverageSection'
import FeaturesSection from './components/modules/pagename/FeaturesSection'
import GuideSection from './components/modules/pagename/GuideSection'
import SubSection from './components/modules/pagename/SubSection'
import ProSection from './components/modules/pagename/ProSection'
import CommunitySection from './components/modules/pagename/CommunitySection'
import FAQsSection from './components/modules/pagename/FAQsSection'
import JoinSection from './components/modules/pagename/JoinSection'
import HiringSection from './components/modules/pagename/HiringSection'
import Footer from './components/partials/Footer'
function App() {
  return (
    <>
      <Navbar />
      <HomeHeroSection />
      <TestimonySection />
      <CoverageSection />
      <FeaturesSection />
      <GuideSection />
      <SubSection />
      <ProSection />
      <CommunitySection />
      <FAQsSection /> 
       <JoinSection /> 
       <HiringSection />
       <Footer />
    </>
  )
}

export default App
