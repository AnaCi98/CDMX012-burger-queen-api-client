/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */

export const listProducts = (object) => {
  const arrPerProduct = object.map((product) => [product.name, product]);
  const objectAll = [...new Map(arrPerProduct).values()];
  const counter = objectAll.map((dish) => ({
    qty: 0,
    product: dish.name,
    price: dish.price,
    id: dish.id,
  }));
  counter.map((countSpec) => {
    const specLength = object.filter((groceries) => groceries.name === countSpec.product).length;
    countSpec.qty = specLength;
  });
  return counter;
};

// Recibe un array de objetos (listOrder), lo itera, busca el nombre
// y lo compara con el nombre del producto contenido en el objeto food
// obtiene el indice donde se encuentra la primera coincidencia
// y ese lo elimina del array
export const deleteOne = (food, listOrder) => {
  let index;
  const newArray = listOrder;
  newArray.forEach((element) => {
    if (element.name === food.product) {
      index = newArray.indexOf(element);
    }
  });
  newArray.splice(index, 1);
  return newArray;
};

// Recibe un array de objetos (listOrder), lo itera, busca el nombre
// y lo compara con el nombre del producto contenido en el objeto food
// obtiene el elemento que se repite y lo almacena al final del arreglo original
export const addOne = (food, listOrder) => {
  let elementProduct;
  const newArray = listOrder;
  newArray.forEach((element) => {
    if (element.name === food.product) {
      elementProduct = element;
    }
  });
  newArray.push(elementProduct);
  return newArray;
};
