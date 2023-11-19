const { PORT, HOST } = require("./configs");
const { healthCheck } = require("./controllers/healthCheck");
const app = require("./loaders/fastify");

app.get("/health-check", healthCheck)

app.get("/", (req, reply) => {
    reply.view("index.ejs");
});

app.listen({
    port: PORT,
    host: HOST
}, () => {
    console.log("App running on port: " + PORT)
})