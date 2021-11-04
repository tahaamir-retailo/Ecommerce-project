const { Router } = require('express');
const router = Router();
const {viewCategory,viewSCategory,getProducts}=require('../controllers/productController');


router.get('/viewCategory',viewCategory);
router.get('/viewSCategory',viewSCategory);
router.get('/getProducts',getProducts);

module.exports = router;