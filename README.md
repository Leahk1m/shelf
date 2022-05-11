# shelf
![shelf-preview](https://user-images.githubusercontent.com/86897050/167750993-94f82f82-e720-4bcc-9d16-c44565afa759.jpg)

[shelf](https://shelf-checkout.herokuapp.com/) is a location-based social application that was inspired by Yelp, where users can explore artisanal grocery stores located in Bay Area, CA, as well as create new businesses, and share their experiences per store.

# Technologies Used

shelf is built on a React / Redux frontend, a Javascript / Express backend, and a PostgreSQL database.

It also makes use of AWS S3 for image uploads, and Google Maps API to allow users to explore business locations on a map.

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

## Getting started finding the memes

1. Clone this repository
   ```git clone git@github.com:Leahk1m/shelf.git```

2. CD into the backend directory and install dependencies

    ```npm install```
    
3. CD into the frontend directory and install dependencies

    ```npm install```
    
4.  Create a .env file in the root directory based on the .env.example given (An AWS S3 account is required for image uploads!)
      

5.  Create a user in psql based on your .env DATABASE_URL app_name

    ```psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"```

6.  Create a databse in psql based on your.env DATABASE_URL app_db_name

7. Create the database, migrate, and seed

    ```npx dotenv sequelize db:create```

    ```npx dotenv sequelize db:migrate```

    ```npx dotenv sequelize db:seed:all```
    
 8. Open up two terminals and cd into the backend and frontend directories, respectively. Start the server in each by running:

	```npm start```
 
 
 # Features

## Splash Page & User Authentication









10. A demo user button is available to use or you may create a new user account by clicking on "Sign up".
