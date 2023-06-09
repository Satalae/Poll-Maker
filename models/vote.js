const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model { }

// define vote model
Vote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        option_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'option',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
    }
);

module.exports = Vote;