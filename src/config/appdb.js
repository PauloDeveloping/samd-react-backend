const Sequelize = require('sequelize'); //importando o ORM
const dbconfig = require('./dbconfig')

//conexao com banco de dados sql
const sequelize = new Sequelize(dbconfig);

sequelize.authenticate()
.then((success) => {

    if(success) {

        console.log('Connected successfuly.')

    }
    
}).catch((err) => {

    console.log('Error => ', err)

})

module.exports = {

    Sequelize: Sequelize,
    sequelize: sequelize

};
