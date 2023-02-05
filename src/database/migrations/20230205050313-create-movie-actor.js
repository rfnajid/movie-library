'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('movieActors', {
      movieId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName: 'movies',
          },
          key: 'id'
        }
      },
      actorId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName: 'persons',
          },
          key: 'id'
        }
      }
    }).then(() => {
      queryInterface.addIndex(
        'movieActors',
        ['movieId', 'actorId'],
        {
          'name': 'movieActors_unique',
          'type': 'unique'
        }
      );
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('movieActors');
  }
};
