export const dataProducts = async (route) => {
  const allProducts = await fetch(`https://629d281fc6ef9335c0998121.mockapi.io/${route}`).then((response) => response.json()).then((products) => products);
  return allProducts;
};

export const changeState = async (id) => {
  const putMethod = {
    method: 'PUT', // Method itself
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify({
      status: 'delivered',
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

export const editProduct = async (id, product) => {
  const date = new Date();
  const [day, month, year] = [date.getDay(), date.getMonth(), date.getFullYear()];

  const putMethod = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type,
      dateEntry: [day, month, year],
    }),
  };
  const response = await fetch(`https://629d281fc6ef9335c0998121.mockapi.io/products/${id}`, putMethod);
  return response.json();
};

// eslint-disable-next-line max-len
export const createProduct = async (productName, productPrice, productImage, productType) => {
  const date = new Date();
  const [day, month, year] = [date.getDay(), date.getMonth(), date.getFullYear()];

  const putMethod = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify({
      name: productName,
      price: productPrice,
      image: productImage,
      type: productType,
      dateEntry: [day, month, year],
    }),
  };
  const response = await fetch('https://629d281fc6ef9335c0998121.mockapi.io/products', putMethod);
  return response.json();
};

export const deleteProduct = async (id) => {
  const deleteMethod = { method: 'DELETE' };
  const response = await fetch(`https://629d281fc6ef9335c0998121.mockapi.io/products/${id}`, deleteMethod);
  return response.json();
};
