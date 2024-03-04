import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import PortfolioCard from './components/PortfolioCard';

import Wrapper1 from './components/Wrapper';
import Title from './components/Title';

import portfolioData from '../data/portfolio.json';
// import friendData from '../data/friends.json'


function App() {
    
  // Initialise state of the portfolioData json array
  const [portfolio, setPortfolio] = useState(portfolioData);

  console.log("Data : ")
  console.log(portfolio)


  // Remove Portfolio item
  const removePortfolioItem = (id) => {
    // Filter Portfolio for objects with an id not equal to the id being removed
    const newPortfolio = portfolio.filter((item) => item.id !== id);
    // Set Portfolio equal to the new friends array
    setPortfolio(newPortfolio);
    console.log("remove portfolio item")
  };
  
  // Return HTML
  return (
    <>
    <Wrapper1>
      <Title>Portfolio</Title>
      {portfolio.map((item) => (
        <PortfolioCard
        removePortfolioItem={removePortfolioItem}
        id={item.id}
        key={item.id}
        name={item.name}
        image={item.image}
        occupation={item.occupation}
        location={item.location}
        />))}
    </Wrapper1> 

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


