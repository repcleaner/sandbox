const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    public_id: DataTypes.STRING,
      name: {
        type: DataTypes.STRING,
          allowNull: false,
          trim: true,
          validate: {
            notNull: {msg: 'Business Name is required'}
          }
      },
      phone: {
          type: DataTypes.STRING,
          trim: true
      },
      address: {
        type: DataTypes.STRING,
          trim: true
      },
      google_plus_link: DataTypes.STRING,
      fb_link: DataTypes.STRING,
      tripadvisor_link: DataTypes.STRING,
      email: {
        type: DataTypes.STRING
      },
      google_id: {
        type: DataTypes.STRING,
          allowNull: false,

          validate: {
            notNull: {msg: 'Google ID is required.'},
          }
      },
      fb_email_link: DataTypes.STRING,
      google_email_link: DataTypes.STRING,
      yelp_link: DataTypes.STRING,
      dealerrater_link: DataTypes.STRING,
      funnel_link: {
        type: DataTypes.STRING,
          allowNull: false,
      },
      request_for_funnel: {
        type: DataTypes.TINYINT,

      },
      user_id: {
        type: DataTypes.INTEGER,
          allowNull: false
      },
      google_review_link: {
          type: DataTypes.STRING
      },
      city: DataTypes.STRING,
  }, {
      tableName: 'locations',
      underscored: true
  });

  Location.generateUniqueFunnelLink = async (subdomainName) => {

    subdomainName = subdomainName.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    let generatedSubdomainName = subdomainName;
    let count = 1;
    while(true){
        const locations =  await Location.count({
            //attributes: ['id'],
            where: {
                funnel_link:{ [Op.like]: 'https://' + generatedSubdomainName + '.%'}
            }
        });

        if(locations === 0){
          return generatedSubdomainName;
        }

        generatedSubdomainName = subdomainName + '-' + (++count);
    }
  };

  Location.isExists = async (google_id) => {
      return await Location.findOne({
          attributes: ['google_id'],
          where: {google_id}
      });
  };

  Location.associate = function(models) {
    Location.belongsTo(models.User);
  };


  return Location;
};