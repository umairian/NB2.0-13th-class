const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('./index');

const Teacher = sequelize.define("teachers", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('Male', 'Female'),
        allowNull: false,
    },
    designation: {
        type: DataTypes.ENUM("Professor", "Associate Professor", "Assistant Professor"),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

module.exports = Teacher;