import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Projects } from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {


  return (
    <div className="min-h-screen">
      <Navbar />
       <main>
        <Hero/>
        <About/>
        <Stats/>
        <Projects/>
        <Skills/>
        {/* <Skills/> */}
        <Footer/>
       </main>




    </div>
  )
}
