import React, { useState, useEffect } from 'react';

const BotCollection = ({ addBotToArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('https://bot-battlr-server-app.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  const handleAddBotToArmy = (bot) => {
    addBotToArmy(bot);
  };

  return (
    <div>
      <h2>Available Bots</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={`Avatar - ${bot.name}`} />
            <div>
              <p>Name: {bot.name}</p>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Bot Class: {bot.bot_class}</p>
              <p>Catchphrase: {bot.catchphrase}</p>
            </div>
            <button onClick={() => handleAddBotToArmy(bot)}>Add to Army</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;
