// Home.js
import React, { useState, useEffect } from 'react';
import BotCollection from '../Components/BotCollection';
import YourBotArmy from '../Components/YourBotArmy';

const Home = () => {
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/your-bot-army')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setArmy(data);
        } else {
          console.error('Invalid data format received:', data);
        }
      })
      .catch((error) => console.error('Error fetching army:', error));
  }, []);

  const addBotToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (botId) => {
    fetch(`https://bot-battlr-server-app.onrender.com/bots/${botId}`, { method: 'DELETE' })
      .then((response) => {
        if (response.ok) {
          setArmy(army.filter((b) => b.id !== botId));
        } else {
          console.error('Failed to discharge bot:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error discharging bot:', error);
      });
  };

  return (
    <div className="App">
      <div className="Card">
        
        <BotCollection addBotToArmy={addBotToArmy} army={army} />
      </div>
      <div className="Card">
        
        <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      </div>
    </div>
  );
};

export default Home;
