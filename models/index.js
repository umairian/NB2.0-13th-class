const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'quantum_university'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully!');
}).catch(err => {
    console.log(err);
});

sequelize.sync({ alter: true }).then(() => {
    console.log('Syncing successful');
}).catch(err => {
    console.log(err);
});

module.exports = sequelize;