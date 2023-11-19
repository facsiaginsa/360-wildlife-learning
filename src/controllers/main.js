const getHomeController = async (req, res) => {
    return res.view("home.ejs", { title: "360 Wildlife Animal Encyclopedia"})
}

module.exports = {
    getHomeController
}