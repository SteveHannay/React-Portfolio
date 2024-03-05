import { useState } from 'react'
import reactLogo from '../assets/images/react.svg'
import viteLogo from '../assets/images/vite.svg'
import './App.css'

import PageHeader from './components/PageHeader';
import PageNavbar from './components/PageNavbar';
import PageBanner from './components/PageBanner';

import Wrapper from './components/Wrapper';
import Title from './components/Title';

import ProjectCard from './components/ProjectCard';

import Skills from './components/Skills';

import projectData from '../data/project.json';


function App() {
    
  // Initialise state of the projectData json array
  const [projects, setProjects] = useState(projectData);

  console.log("Data : ")
  console.log(projects)


  // Remove item from Projects array
  const removeProject = (id) => {
    // Filter Projects array (remove item which matches the id)
    const newProjects = projects.filter((item) => item.id !== id);
    // Set new Projects array
    setProjects(newProjects);
  };
  
  // Return HTML
  return (
    <>
    <PageHeader></PageHeader>

    <PageNavbar></PageNavbar>

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
        occupation={item.occupation}
        location={item.location}
        />))}
    </Wrapper> 

    <Wrapper>
      <Title>Skills</Title>
      <Skills></Skills>
    </Wrapper>

    <Wrapper>
      <Title>About Me</Title>
      
    </Wrapper>

    <Wrapper>
      <Title>Contact Me</Title>
      
    </Wrapper>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

    </>
  )
}

export default App


