const { selectWorldData } = require("../models/worldData")

module.exports = async () => {
    let data =  await selectWorldData()

    return [ null, data ]
}