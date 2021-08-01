const fastify = require('fastify')({logger:true}) //import fastify, logger gives additional information about server

fastify.register(require('fastify-swagger'), {    //fastify-swagger gives API Documentation of the server which can be looked up at /docs
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {title: 'fastify-api'},
    },
})

fastify.register(require('./routes/data'))       //register the data.js file for accessing its functions

const PORT = 5000



const start = async () => {                     //a function to listen to the PORT
    try {
        await fastify.listen(PORT)
    }
    catch(error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()                                         //start the server