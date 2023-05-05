const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Result extends Model { }

Result.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        poll_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'poll',
                key: 'id'
            }
        },
        option_1_votes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        option_2_votes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'result'
    }
);

module.exports = Result;
