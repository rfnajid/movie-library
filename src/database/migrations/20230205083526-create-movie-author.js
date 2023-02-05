'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('movieAuthors', {
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
      authorId: {
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
        'movieAuthors',
        ['movieId', 'authorId'],
        {
          'name': 'movieAuthors_unique',
          'type': 'unique'
        }
      );
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('movieAuthors');
  }
};
