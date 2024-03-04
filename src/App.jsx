import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import PortfolioCard from './components/PortfolioCard';
import Wrapper1 from './components/Wrapper';
import Title from './components/Title';

import portfolioData from '../data/portfolio.json';
import friendData from '../data/friends.json'


function App() {
    
  // Setting initial state to the portfolioData json array
  

  const [portfolio, setPortfolio] = useState(portfolioData);
  const [friends, setFriends] = useState(friendData);

  // Remove friend
  const removeFriend = (id) => {
    // Filter friends for friend objects with an id not equal to the id being removed
    const newFriends = friends.filter((friend) => friend.id !== id);
    // Set friends equal to the new friends array
    setFriends(newFriends);
  };
  
  // Remove Portfolio item
  const removePortfolio = (id) => {
    // Filter Portfolio for objects with an id not equal to the id being removed
    const newPortfolio = portfolio.filter((item) => item.id !== id);
    // Set Portfolio equal to the new friends array
    setPortfolio(newPortfolio);
    console.log("remove portfolio")
  };
  



  return (
    <>
    <Wrapper1>
      <Title>Portfolio</Title>
      {friends.map((friend) => (
        <PortfolioCard
        // removeFriend={removeFriend}
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location={friend.location}
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


