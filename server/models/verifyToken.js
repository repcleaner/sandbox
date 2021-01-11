const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const VerifyToken = sequelize.define('VerifyToken', {

        id:{
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },

        user_id: DataTypes.INTEGER,
        token: DataTypes.STRING,
        is_expired: {
            type: DataTypes.VIRTUAL,
            get() {
                if (this.getDataValue('created_at')) {
                    return moment(moment().add(-24, 'hours')).isAfter(this.getDataValue('created_at'))
                }
                return false;
            }
        }

    }, {

        tableName: 'verify_tokens',
        //syncOnAssociation: true,
        //hierarchy: true,
        underscored: true,
    });


    VerifyToken.associate = function (models) {
        const {User} = models;

        VerifyToken.belongsTo(User, {onDelete: 'CASCADE'});
        //VerifyToken.hasOne(User, {onDelete: 'CASCADE'});
    };

    return VerifyToken;
};