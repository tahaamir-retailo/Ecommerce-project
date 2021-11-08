const { Router } = require('express');
const router = Router();
const {viewCategory,viewSCategory,getProducts}=require('../controllers/productController');


router.get('/viewCategory',viewCategory);
router.get('/viewSCategory/:id',viewSCategory);
router.get('/getProducts/:id',getProducts);

module.exports = router;