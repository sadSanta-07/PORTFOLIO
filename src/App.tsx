import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Projects } from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Achievements from './components/Achievements'
import { SectionDivider } from './components/ui/SectionDivider'

export default function App() {


  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <Stats />
        <Projects />
        <SectionDivider />
        <Skills />
        <Achievements />
        <Footer />
      </main>




    </div>
  )
}
