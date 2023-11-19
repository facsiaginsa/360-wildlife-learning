let fastify = require("fastify")
let app = fastify()
let path = require("path")

app.register(require("@fastify/view"), {
    engine: {
        ejs: require("ejs"),
    },
    root: path.join(__dirname, '../../public')
});

app.register(require('@fastify/static'), {
    root: path.join(__dirname, '../../public'),
    prefix: '/public/', // optional: default '/'
})

console.log(path.join(__dirname, '../../public'))

module.exports = app