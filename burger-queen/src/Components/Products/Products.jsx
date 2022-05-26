/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Products.css';

// eslint-disable-next-line react/prop-types
function Products({ products, typeFood }) {
  const productFilter = products.filter((product) => product.type === typeFood);
  return (
    products ? productFilter.map((product) => (
      <article>

        <p>{product.name}</p>
        <p>{product.price}</p>
      </article>
    )) : null
  );
}

export default Products;
