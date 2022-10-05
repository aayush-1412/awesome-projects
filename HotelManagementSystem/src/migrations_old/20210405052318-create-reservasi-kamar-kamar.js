module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ReservasiKamarKamars', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      ReservasiKamarId: {
        type: Sequelize.UUID,
      },
      KamarId: {
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ReservasiKamarKamars')
  },
}