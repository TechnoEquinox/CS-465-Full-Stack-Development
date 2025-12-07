const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// define routes for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET Method routes trip list
    .post(tripsController.tripsAddTrip); // POST Method adds a trip

router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;