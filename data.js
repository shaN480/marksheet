const{ getData, welcomeMsg, addStudent, deleteStudent, updateStudent } = require('../controllers/dataController') //importing the functions from dataController.js

function dataRoutes (fastify, options, done) {

    fastify.get('/', welcomeMsg)

    //fetch all the students

    fastify.get('/report', getData)

    //add a student

    fastify.post('/add', addStudent)

    //update a student

    fastify.post('/update', updateStudent)

    //delete a student

    fastify.delete('/delete/:id', deleteStudent)

    done()
}

module.exports = dataRoutes
