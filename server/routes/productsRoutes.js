const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  rateProduct
} = require("../controller/productControlers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.put('/rate/:id', rateProduct)

module.exports = router;