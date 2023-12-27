export const cigarDB = async () => {
  const Sequelize = require('sequelize');
  const user = `DB_USERNAME`;
  const pass = `DB_PASS`;
  const host = `mycigarbutler.com`;
  const port = 3306;
  const database = `DB_SERVER`;
  //Return
    return new Sequelize(`mysql://${user}:${pass}@${host}:${port}/${database}`);
 hooks: {
    beforeDefine: () => {
    console.log('db link established');
    }
};}
