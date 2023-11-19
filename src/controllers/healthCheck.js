const healthCheck = async (req, res) => {
    res.status(200).send({
        message: "Wild Life Learning Application is Healthy"
    })
}

module.exports = {
    healthCheck
}