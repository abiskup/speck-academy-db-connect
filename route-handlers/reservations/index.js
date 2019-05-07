const express = require('express');
const reservationscontroller = require('./controller');
const router = new express.Router();

router.route('/').get(reservationscontroller.getReservations);
router.route('/:reservationsId').get(reservationscontroller.getSingleReservations);
router.route('/reservationshall').post(reservationscontroller.getNewleReservations);
router.route('/:idReservations').put(reservationscontroller.updateReservations);
router.route('/:idReservations2').delete(reservationscontroller.deleteteReservations);

module.exports = router;
