const dataProducts = async (route) => {
  const allProducts = await fetch(`http://localhost:3004/${route}`).then((response) => response.json()).then((products) => products);
  return allProducts;
};
export default dataProducts;
