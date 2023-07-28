import React, {useState} from 'react';
import axios from 'axios';
import BotCollection from '../Components/BotCollection'; // Update the import path
import YourBotArmy from '../Components/YourBotArmy'; // Update the import path

const Home = () => {
  const [army, setArmy] = useState([]);

  const addBotToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (botId) => {
    axios.delete(`http://localhost:8001/bots/${botId}`).then(() => {
      setArmy(army.filter((b) => b.id !== botId));
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
