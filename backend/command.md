
Business Model and Seed-------------------

npx sequelize model:generate --name Business --attributes ownerId:integer,title:string,description:text,address:string,city:string,state:string,zipCode:integer,lat:decimal,lng:decimal,category:string,imageUrl:text,imageUrlTwo:text,imageUrlThree:text

npx sequelize seed:generate --name BusinessSeeds


Reviews Model and Seed---------------------

npx sequelize model:generate --name Review --attributes userId:integer,businessId:integer,rating:integer,post:text

npx sequelize seed:generate --name ReviewSeeds



DB migrate/undo migrate -----------
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all


Seed/Unseed---------------------
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all


To drop and create db -----------
npx dotenv sequelize db:drop
npx dotenv sequelize db:create
