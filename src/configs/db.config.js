import { Sequelize } from "sequelize";

const db = new Sequelize('be-sd-ciwaregu', 'postgres', 'arz140701', {
  host: 'localhost',
  dialect: 'postgres'
});

// Sinkron table pada db dari model
/* db.sync({alter: true})
  .then(() => {
    console.log('Tabel berhasil di sinkronisasi');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  }); */

export default db;
