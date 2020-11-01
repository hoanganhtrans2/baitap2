class Product {
  constructor(id, tensanpham, dongia, soluong) {
    this.id = id;
    this.tensanpham = tensanpham;
    this.dongia = dongia;
    this.soluong = soluong;
  }
  thanhtien() {
    return this.soluong * this.dongia;
  }
}

module.exports = class ShoppingCart {
  listProduct = require("../share/data");
  listOder = [];

  addProductToShoppingCart = (id, soluong) => {
    const p = this.listProduct.find((element) => element.id == id);
    const pOder = new Product(p.id, p.tensanphan, p.dongia, soluong);
    const index = this.listOder.findIndex((element) => element.id == id);
    if (index >= 0) {
      this.listOder[index] = pOder;
    } else this.listOder.push(pOder);
  };

  deleteProductInShoppingCart = (id) => {
    const index = this.listOder.findIndex((element) => element.id == id);
    const removed = this.listOder.splice(index, 1);
  };
  tinhThanhTien() {
    return this.listOder.reduce(
      (accumulator, currentValue) => accumulator + currentValue.thanhtien(),
      0
    );
  }
  getListOrder() {
    return this.listOder;
  }
  clearListOrder() {
    this.listOder = [];
  }
};
