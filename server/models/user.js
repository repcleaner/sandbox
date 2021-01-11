const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {

        business_name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        email_validated: DataTypes.BOOLEAN,
        facebook_id: DataTypes.STRING,
        role: DataTypes.INTEGER,

    }, {
        tableName: 'users',
        timestamps: false,
        //syncOnAssociation: true
        //hierarchy: true,
        underscored: true

    });

    User.associate = function (models) {
        const {VerifyToken, Location} = models;

        //User.belongsTo(verifyToken);
        User.hasOne(VerifyToken);
        User.hasMany(Location)
    };

    return User;
};
