const { Router } = require('express');
const router = Router();
const {viewCategory,viewSCategory,getProducts}=require('../controllers/productController');


router.get('/Category',viewCategory); 
router.get('/SCategory/:id',viewSCategory);
router.get('/Products/:id',getProducts);

module.exports = router;