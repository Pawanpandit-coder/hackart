const express = require('express')
const { allUsers, addNewUser, userLogin } = require('../controllers/userController')
const { verifyToken } = require('../middlewares/authMiddleware')
const router = express.Router()

router.get('/users',verifyToken ,allUsers)
router.post('/newuser',addNewUser)
router.post('/loginuser',userLogin)


module.exports = router;