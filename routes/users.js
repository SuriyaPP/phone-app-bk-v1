var express = require('express');
var router = express.Router();

const userController = require('../controller/UsersController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/registration' , userController.creatUsers)


router.get('/all' , userController.allUsers)


router.get('/:id' , userController.findUser)


router.put('/update/:id' , userController.updateUser)


router.delete("/:id" , userController.deleteUser)


router.get("/search/:keywords" , userController.searchUsers)

module.exports = router;
