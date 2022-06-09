/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Products.css';

// eslint-disable-next-line react/prop-types
function Products({
  products, typeFood, addList,
}) {
  return (
    products ? products.filter((product) => product.type === typeFood).map((product) => (
      <article className="product-article" key={product.id} onClick={() => { addList(product); }}>
        <p className="product-name">{product.name}</p>
        <p>
          $
          {' '}
          {product.price}
        </p>
      </article>
    )) : null
  );
}

export default Products;
