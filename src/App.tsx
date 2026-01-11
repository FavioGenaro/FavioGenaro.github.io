import Header from './components/organisms/Header'
import AboutSection from './components/sections/AboutMe'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Footer from './components/sections/Footer'
import HeroSection from './components/sections/HeroSection'
import Projects from './components/sections/Projects'
import MainGrid from './components/templates/MainGrid'

function App() {

  return (
    <>
      <Header />
      <MainGrid>
        <HeroSection id="Profile"/>
        <AboutSection id="AboutMe"/>
        <Experience id="Experience"/>
        <Education id="Education"/>
        <Projects id="Projects"/>
        <Footer id="Footer"/>
      </MainGrid>
    </>
  )
}

export default App
