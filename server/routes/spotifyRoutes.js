const express = require('express')

const router = express.Router()

const { getSpotify, spotifyLogin, authSpotify, refreshToken } = require("../controller/spotifyController")

router.get("/getSpotify", getSpotify)

router.get("/spotifyLogin", spotifyLogin)

router.get("/fetchSpotify", authSpotify)

router.get("/refreshToken", refreshToken)

module.exports = router