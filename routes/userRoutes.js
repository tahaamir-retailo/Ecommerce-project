const { Router } = require('express');
const router = Router();
const {signIn,signUp,adProduct}=require('../controllers/userController');




router.post('/signUp',signUp);
router.post('/signIn',signIn);
router.post('/adProduct',adProduct);
module.exports = router;