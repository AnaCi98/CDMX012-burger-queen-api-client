export const dataProducts = async (route) => {
  const allProducts = await fetch(`http://localhost:3004/${route}`).then((response) => response.json()).then((products) => products);
  return allProducts;
};
/* const getOrder = async () => {
  const currentOrder = await ((dataProducts('/order').GET`/order.id`).then((response) =>
   response.json()).then((order) => order));
  console.log(currentOrder);
};
getOrder(); */
export const changeState = (id) => {
  const putMethod = {
    method: 'PATCH', // Method itself
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify({
      // id: lastOrder.id,
      // client: 'NUEVOCLIENTE',
      // userId: 'idWaiter',
      // products: listOrder,
      status: 'delivered',
      // dateEntry: '00/00/00',
      // dateProcessed: '00:00',
    }),
  };
  fetch(`http://localhost:3004/order/${id}`, putMethod).then((response) => response.json().products).then((product) => console.log(product));
};
