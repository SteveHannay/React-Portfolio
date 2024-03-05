import { useState } from 'react'
import reactLogo from '../assets/images/react.svg'
import viteLogo from '../assets/images/vite.svg'
import './App.css'

import PageHeader from './components/PageHeader';
import PageNavbar from './components/PageNavbar';
import PageBanner from './components/PageBanner';
import PageFooter from './components/PageFooter';

import Wrapper from './components/Wrapper';
import Title from './components/Title';

import ProjectCard from './components/ProjectCard';

import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

import projectData from '../data/project.json';


function App() {
    
  // Initialise state of the projectData json array
  const [projects, setProjects] = useState(projectData);

  // Remove item from Projects array
  const removeProject = (id) => {
    // Filter Projects array (remove item which matches the id)
    const newProjects = projects.filter((item) => item.id !== id);
    // Set new Projects array
    setProjects(newProjects);
  };

  console.log(projectData)
  
  
  // Return HTML
  return (
    <>
    <PageHeader></PageHeader>


    <Wrapper>
    <PageNavbar></PageNavbar>
    </Wrapper>

    <Wrapper>
      <PageBanner></PageBanner>
    </Wrapper>
   
    <Wrapper id ="projects">
      <Title>Projects</Title>
      {projects.map((item) => (
        <ProjectCard
        removeProject={removeProject}
        id={item.id}
        key={item.id}
        name={item.name}
        image={item.image}
        description={item.description}
        website={item.website}
        github={item.github}
        />))}
    </Wrapper> 

    <Wrapper>
      <Title>Skills</Title>
      <Skills></Skills>
    </Wrapper>

    <Wrapper>
      <Title>About Me</Title>
      <AboutMe></AboutMe>
    </Wrapper>

    <Wrapper>
      <Title>Contact Me</Title>
      <ContactMe></ContactMe>
    </Wrapper>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

    <PageFooter></PageFooter>

    </>
  )
}

export default App


