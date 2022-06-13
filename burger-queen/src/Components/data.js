export const dataProducts = async (route) => {
  const allProducts = await fetch(`https://629d281fc6ef9335c0998121.mockapi.io/${route}`).then((response) => response.json()).then((products) => products);
  return allProducts;
};
/* const getOrder = async () => {
  const currentOrder = await ((dataProducts('/order').GET`/order.id`).then((response) =>
   response.json()).then((order) => order));
  console.log(currentOrder);
};
getOrder(); */
export const changeState = async (id) => {
  const putMethod = {
    method: 'PUT', // Method itself
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
  const response = await fetch(`https://629d281fc6ef9335c0998121.mockapi.io/order/${id}`, putMethod);
  return response.json().products;
};

export const addNewOrder = async (newClient, activeName, structureList) => {
  const date = new Date();
  const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

  const putMethod = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      client: newClient,
      userId: activeName,
      products: structureList,
      status: 'pending',
      dateEntry: [hour, minutes, seconds],
      dateProcessed: '00:00',
    }),
  };
  const response = await fetch('https://629d281fc6ef9335c0998121.mockapi.io/order', putMethod);
  return response.json();
};
