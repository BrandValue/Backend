const express = require('express');
const {getLocation, getLocationById} = require("./getLocation");
const router = express.Router();

router.get('/getLocations', getLocation)
router.get('/getLocations/:id', getLocationById)
router.post('/addLocations')
router.patch('/updateLocations/:id')
router.delete('/deleteLocations/:id')

module.exports = router;
