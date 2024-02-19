import logo from './logo.svg';
import React from 'react'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">

      <Intro />

      <Skills />

      <Timeline />

      <Projects />

      <Footer />


    </div>
  );
}

export default App;
