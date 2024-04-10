module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("game", {
    name: {
      type: Sequelize.STRING,
    },
    file: {
      type: Sequelize.BLOB,
    },
    // creationDate: {
    //   type: Sequelize.DATE,
    // },
    // creationDate: {
    //   type: Sequelize.TIME,
    // },
  });

  return Tutorial;
};


// After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

// create a new Tutorial: create(object)
// find a Tutorial by id: findByPk(id)
// get all Tutorials: findAll()
// update a Tutorial by id: update(data, where: { id: id })
// remove a Tutorial: destroy(where: { id: id })
// remove all Tutorials: destroy(where: {})
// find all Tutorials by title: findAll({ where: { title: ... } })