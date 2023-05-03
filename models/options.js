const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Option extends Model { }

Option.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        choice: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poll_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'poll',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'option'
    }
);

module.exports = Option;