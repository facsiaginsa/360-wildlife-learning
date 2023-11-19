const getWorldData = require("../services/getWorldData")

const getWorldDataController = async (req, res) => {
    let [ err, data ] = await getWorldData()

    if (err) return res.status(err.code).send({
        message: err.message
    })

    // return res.status(200).send({
    //     data
    // })
    console.log( JSON.stringify(data))

    return res.view("index.ejs", { data: JSON.stringify(data), title: data.name });
}

module.exports = {
    getWorldDataController
}