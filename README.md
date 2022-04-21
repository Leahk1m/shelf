# shelf_app

This is a clone of yelp, that is centered around helping people discover and explore local and/or artisanal grocery stores.

# Technology Used
Javascript, React, Redux, Postgres

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
