const express = require('express');
const hallscontroller = require('./controller');
const router = new express.Router();

router.route('/').get(hallscontroller.getHalls);
router.route('/:hallId').get(hallscontroller.getSingleHalls);
router.route('/newhall').post(hallscontroller.getNewleHalls);
router.route('/:idHall').put(hallscontroller.updateHall);
router.route('/:idHall2').delete(hallscontroller.deleteteHall);

module.exports = router;
