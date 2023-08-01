# Bot Battlr - Bot Army Builder
 This project is a React application that allows you to view a list of available bots and assemble your unique Bot Army.

# Features
View profiles of all bots in the BotCollection.
Add individual bots to your army by clicking on them. The selected bot will appear in the YourBotArmy component. Each bot can be enlisted only once, and it won't disappear from the BotCollection.
Release a bot from your army by clicking on it. The bot will be removed from the YourBotArmy component but will still be available in the BotCollection.
Discharge a bot from service forever by clicking the red button marked "x." This action will delete the bot both from the backend and from the YourBotArmy on the frontend.

# How to Use
Clone this repository to your local machine.
Install the required dependencies by running npm install or yarn install in the project directory.
Start the development server with npm start or yarn start.
Access the application by navigating to http://localhost:3000 in your web browser.
Getting Started
The BotCollection component displays a list of available bots. The bot profiles include details like name, health, damage, armor, bot class, and catchphrase. You can see these bots when you access the homepage.

To add a bot to your Bot Army, click on the "Add to Army" button below the bot's profile. The selected bot will appear in the YourBotArmy component.

To release a bot from your army, click on the bot's profile in the YourBotArmy component. The bot will be removed from your army but will still be available in the BotCollection.

If you want to discharge a bot from service permanently, click the "x" button on the bot's profile in the YourBotArmy component. This action will delete the bot both from your army and the backend.

# Folder Structure
src/components: Contains the React components for the application, including BotCollection and YourBotArmy.
src/pages: Contains the main page components, such as Home, where the BotCollection and YourBotArmy components are rendered.
src/App.js: The main application component that sets up the routing and page structure.
src/App.css: CSS styles for the application.

# Dependencies
React
React Router DOM
Data Fetching
The application fetches data from the backend using the fetch API. The bot data is retrieved from the endpoints https://bot-battlr-server-app.onrender.com/bots and https://bot-battlr-server-app.onrender.com/your-bot-army.

# Credits
This project was created as a practice exercise for learning React, components, props, state, events, and data fetching. It is not affiliated with any existing products or companies.

Enjoy building your ultimate Bot Army with Bot Battlr!

