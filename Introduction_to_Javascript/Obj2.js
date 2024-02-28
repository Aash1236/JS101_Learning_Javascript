function ProductsCart(names, quantities, prices) {
  this.data = [];

  for (let i = 0; i < names.length; i++) {
    const product = {
      name: names[i],
      quantity: quantities[i],
      price: prices[i],
    };
    this.data.push(product);
  }

  this.total = function () {
    return this.data.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0,
    );
  };
}

const names = ["Rice", "Dal", "Salt"];
const quantities = [2, 3, 1];
const prices = [60, 50, 20];

const cart = new ProductsCart(names, quantities, prices);
const totalValue = cart.total();
console.log(totalValue);
