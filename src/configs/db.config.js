import { Sequelize } from "sequelize";

const db = new Sequelize('be-sd-ciwaregu', 'postgres', 'arz140701', {
  host: 'localhost',
  dialect: 'postgres'
});

export default db;
