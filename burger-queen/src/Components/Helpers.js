/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
const listProducts = (object) => {
  const arrPerProduct = object.map((product) => [product.name, product]);
  const objectAll = [...new Map(arrPerProduct).values()];
  const counter = objectAll.map((dish) => ({ qty: 0, product: dish.name, price: dish.price }));
  counter.map((countSpec) => {
    const specLength = object.filter((groceries) => groceries.name === countSpec.product).length;
    countSpec.qty = specLength;
  });
  return counter;
};
export default listProducts;
