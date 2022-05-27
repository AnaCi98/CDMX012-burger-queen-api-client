const dataProducts = async (route) => {
  const allProducts = await fetch(`http://localhost:3004/${route}`).then((response) => response.json()).then((products) => products);
  return allProducts;
};
/* const getOrder = async () => {
  const currentOrder = await ((dataProducts('/order').GET`/order.id`).then((response) =>
   response.json()).then((order) => order));
  console.log(currentOrder);
};
getOrder(); */
export default dataProducts;
