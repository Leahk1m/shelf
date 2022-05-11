# shelf

![Image 4-27-22 at 11 08 AM](https://user-images.githubusercontent.com/86897050/167748903-280c8c35-733a-4185-b304-5f3708427a5d.jpg)

[shelf](https://shelf-checkout.herokuapp.com/) is a location-based social application that was inspired by Yelp, where users can explore artisanal grocery stores located in Bay Area, CA, as well as create new businesses, and share their experiences per store.

# Technologies Used

shelf is built on a React / Redux frontend, a Javascript / Express backend, and a PostgreSQL database.

It also makes use of AWS S3 for image uploads, and Google Maps API to allow users to explore business locations on a map.

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

## Getting started finding the memes

1. Clone this repo
  * git clone https://github.com/Leahk1m/shelf_app

2. Install dependencies
   npm install in both backend and frontend folders
      

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
  * CREATE USER <'shelf_dev'> WITH CREATEDB PASSWORD <'password'>

4. Create a .env file in the backend directory based on the .env.example

5. Enter your username and password information into your .env file along with your desired database name, a
   secured combination of characters for your JWT_Secret, and your PORT(generally 5000)

6. Add the following proxy to your package.json file within your frontend directory, replacing or
   keeping the 5000 port to match your PORT configuration found in your .env file.
  * "proxy": "http://localhost:5000"

7. Create database, migrate, and seed models:

  npx dotenv sequelize db:create
   
  npx dotenv sequelize db:migrate
   
  npx dotenv sequelize db:seed:all
   

8. Start backend server and then frontend server
  * npm start

9. This should open the app in your default browser, if not navigate to http://localhost:3000/
  * npm start

10. A demo user button is available to use or you may create a new user account by clicking on "Sign up".
