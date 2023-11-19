require("dotenv").config()

module.exports = {
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || "0.0.0.0",
    ASSET_URL: process.env.ASSET_URL || "https://wildlife-asset.facsiaginsa.com"
}