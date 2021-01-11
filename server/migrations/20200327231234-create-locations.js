'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        public_id: {
            type: Sequelize.STRING
        },
      business_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
        address: {
            type: Sequelize.STRING
        },
        google_plus_link: {
            type: Sequelize.STRING
        },
        fb_link: {
            type: Sequelize.STRING
        },
        tripadvisor_link: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        google_id: {
            type: Sequelize.STRING
        },
        fb_email_link: {
            type: Sequelize.STRING
        },
        google_email_link: {
            type: Sequelize.STRING
        },
        yelp_link: {
            type: Sequelize.STRING
        },
        dealerrater_link: {
            type: Sequelize.STRING
        },
        funnel_link: {
            type: Sequelize.STRING
        },
        request_for_funnel: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        google_mobile_email_link: {
            type: Sequelize.STRING
        },
        funnel_shorten_link: {
          type: Sequelize.STRING
        },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('locations');
  }
};