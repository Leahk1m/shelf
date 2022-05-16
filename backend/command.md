
DB migrate/undo migrate -----------
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all


Seed/Unseed---------------------
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all


To drop and create db -----------
npx dotenv sequelize db:drop
npx dotenv sequelize db:create
