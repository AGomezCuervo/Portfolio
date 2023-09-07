import './App.css';
import { useRef } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import NavBar from "./components/NavBar/NavBar"
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';

function App() {
  const profileRef = useRef<HTMLElement>(null)
  const aboutMeRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  return (
    <>
      <NavBar aboutMeRef={aboutMeRef} projectsRef={projectsRef}/>
      <section ref={profileRef} className="ProfileContainer">
        <Profile/>
      </section>
      <hr/>

      <section ref={aboutMeRef}>
        <AboutMe/>
      </section>
      <hr/>

      <section ref={projectsRef}>
        <Projects/> 
      </section>
      <Footer aboutMeRef={aboutMeRef} projectsRef={projectsRef}/>
    </>
  )
}

export default App;
