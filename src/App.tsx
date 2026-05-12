import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/stats'

export default function App() {


  return (
    <div className="min-h-screen">
      <Navbar />
       <main>
        <Hero/>
        <About/>
        <Stats/>
       </main>




    </div>
  )
}
