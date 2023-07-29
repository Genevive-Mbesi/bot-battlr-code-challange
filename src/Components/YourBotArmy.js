import React from 'react';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  if (!Array.isArray(army)) {
    return null; 
  }

  const handleDischarge = (botId) => {
    dischargeBot(botId);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
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
