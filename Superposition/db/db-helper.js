require('../env.js'); // access sensitive info in process.env
const Sequelize = require('sequelize');
const database = process.env.DB_DB;
const user = process.env.DB_USER;
const pw = process.env.DB_PASSWORD;

const db = new Sequelize(database, user, pw, {
  host: '127.0.0.1',
  dialect: 'mariadb'
});

const Map = db.define('Map', {
  mapId: Sequelize.INTEGER,
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  thumbnail: Sequelize.STRING,
  votes: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
      min: 0,
      max: 4096
    }
  }
});

exports.getAllMaps = function(req, res) {
  return Map.findAll()
    .then(maps => {
      res.status(200).send(maps);
    })
    .catch(err => {
      console.error('🍊 err in findAll query', err);
    });
};

exports.saveAllVotes = function(req, res) {
  const data = req.body;
  for (const map of data) {
    Map.update(
      {votes: map.votes},
      {where: {mapId: map.mapId}}
    )
    .then(result => {
      console.log('🍊 successful update to db');
      return result;
    })
    .catch(err => {
      console.error('🍊 err in saveAllVotes query', err);
    });
  }
  // intentionally delay response to display spinner longer
  // and discourage fast clicking of the save button
  setTimeout(() => {
    res.status(201).end('here is delayed response after 2 sec');
  }, 2000);
};
