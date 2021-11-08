const { Router } = require('express');
const {adToCart,order}=require('../controllers/cartController');
const router = Router();

router.post('/adToCart',adToCart);
router.post('/order',order)


module.exports = router;