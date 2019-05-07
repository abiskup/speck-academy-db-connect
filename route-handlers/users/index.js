const express = require('express');
const userscontroller = require('./controller');
const router = new express.Router();

router.route('/').get(userscontroller.getUsers);
router.route('/:usersId').get(userscontroller.getSingleUsers);
router.route('/newusers').post(userscontroller.getNewUsers);
router.route('/:idUsers').put(userscontroller.updateUsers);
router.route('/:idUsers2').delete(userscontroller.deleteteUsers);

module.exports = router;