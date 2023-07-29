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
    if (Array.isArray(army) && !army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setArmy(army.filter((b) => b.id !== botId));
      })
      .catch((error) => {
        console.error('Error discharging bot:', error);
      });
  };

  return (
    <div>
      <BotCollection addBotToArmy={addBotToArmy} />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default Home;
