const p = require("../model/product.module");
const db = require("../share/data");
const shoppingcart = new p();

module.exports.addProductToShoppingCart = (req, res) => {
  const { id, soluong } = req.body;
  console.log(id + " " + soluong);
  shoppingcart.addProductToShoppingCart(id, soluong);
  res.render("listorder", { listproduct: shoppingcart.getListOrder() });
};

module.exports.index = (req, res) => {
  res.render("index", { ls: db });
};

module.exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  shoppingcart.deleteProductInShoppingCart(id);
  res.render("listorder", { listproduct: shoppingcart.getListOrder() });
};
module.exports.clearShoppingCart = (req, res) => {
  shoppingcart.clearListOrder();
  res.redirect("/index");
};
