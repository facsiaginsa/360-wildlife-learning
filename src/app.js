const { PORT, HOST } = require("./configs");
const { healthCheck } = require("./controllers/healthCheck");
const { getHomeController } = require("./controllers/main");
const { getWorldDataController } = require("./controllers/world");
const app = require("./loaders/fastify");


app.get("/health-check", healthCheck)

app.get("/", getHomeController)

app.get("/360-world", getWorldDataController);

app.listen({
    port: PORT,
    host: HOST
}, () => {
    console.log("App running on port: " + PORT)
})