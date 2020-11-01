var express = require("express");
var router = express.Router();
var indexController = require("../controller/index.controller");

router.get("/index", indexController.index);
router.get("/index/clear", indexController.clearShoppingCart);
router.post("/index/order", indexController.addProductToShoppingCart);
router.get("/index/order/delete/:id", indexController.deleteProduct);
module.exports = router;
