import React from 'react';
import axios from 'axios';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
    const handleDischarge = (botId) => {
        axios.delete(`http://localhost:8001/bots/${botId}`).then(() => {
          // Remove the bot from the frontend YourBotArmy component
          dischargeBot(botId);
        }).catch((error) => {
          console.error('Error discharging bot:', error);
        });
      };
      

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul className="YourBotArmy">
        {army.map((bot) => (
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
            <button className="DischargeButton" onClick={() => handleDischarge(bot.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
