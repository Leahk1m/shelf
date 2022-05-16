# shelf
![shelf-preview](https://user-images.githubusercontent.com/86897050/167750993-94f82f82-e720-4bcc-9d16-c44565afa759.jpg)

[shelf](https://shelf-checkout.herokuapp.com/) is a location-based social application that was inspired by Yelp, where users can explore artisanal grocery stores located in Bay Area, CA, as well as create new businesses, and share their experiences per store.

# Technologies Used

shelf is built on a React / Redux frontend, a Javascript / Express backend, and a PostgreSQL database.

It also makes use of AWS S3 for profile and business image uploads.

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

Users can log into an existing account or sign up. All users can view all the businesses on shelf, but are required to log in to an account in order to access the CRUD features for creating, updating, and deleting the users' businesses and reviews. 

![shelf-login-gif](https://user-images.githubusercontent.com/86897050/168508087-618244aa-21ab-4e4f-83f2-12e348faf617.gif)


## Businesses/Image Sharing with AWS S3
Logged in users have access to full CRUD for features that they've created. A user can create a new business through the 'Add Business' link from the profile dropdown, which will lead them to a new business form page. shelf uses AWS S3 to allow users to upload multiple(3)images from their local computer, which can be updated/replaced with different photos when updating the business. 

### Creating New Business
![adding-biz-gif](https://user-images.githubusercontent.com/86897050/168509467-8acd2d7d-f690-4f1e-b485-86e69e192a0d.gif)

### Updating/Deleting Business
![update-delete-biz-gif](https://user-images.githubusercontent.com/86897050/168510090-1d197f83-810b-4140-8667-b5430124a369.gif)



## Search
The search bar on the splash page and navigation bar allow users to search for businesses by the business type or by its name. Businesses are accessible without inputting the full store name, as shelf filters by what the user inputs and returns the business that best matches the name. 

![shelf-search-gif](https://user-images.githubusercontent.com/86897050/168510522-964b7453-cc76-4626-8254-fc121429d1f5.gif)

## Reviews
Users have the ability to leave a rating and review for a business, which changes the average score of the store and updates the design of the stars of that business on all components. Reviews can be updated by clicking on the ellipses of the user's review and have the ability to update or delete the review. 

![shelf-reviews-gif](https://user-images.githubusercontent.com/86897050/168511495-eee5d566-9d88-44dd-92fc-85a5a5d64e85.gif)

### Conclusion
shelf is my capstone project that showcases all of the skills I have learned as a student from App Academy - some of which include:
- creating a database to seamlessly and coherently connect data
- setting up a backend server with user authentication, error handling, and API routes following RESTful conventions
- designing a frontend application with React components and connecting it to the backend
- setting up Amazon Web Services S3 to handle image uploads




