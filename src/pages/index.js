// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Intro from '../components/Intro'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'

// const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <div>

      <div id='mainTitle'>PERSONAL PORTFOLIO</div>
      
    <Intro />

    <Experience />

    <Skills />

    <Education />

    </div>

  )
}
