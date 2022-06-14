/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './Stocktaking.css';

function Stocktaking({ allProducts, editProduct }) {
/*   const [allProducts, setAllProducts] = useState();

  const allDataProducts = async () => {
    const products = await dataProducts('products');
    setAllProducts(products);
  };

  useEffect(() => {
    allDataProducts();
  }, []); */
  const deleteProduct = () => { console.log('holi'); };

  console.log(allProducts);

  return (
    <section className="Table-section-workers">
      <table className="Workers-table">
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Type</th>
          </tr>
          {allProducts ? allProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.type}</td>
              <td>
                <img className="Edit-workers" alt="button to edit" src="../img/Edit.png" onClick={() => editProduct(product.id, product.name, product.price, product.image, product.type)} />
                <img className="Delete-workers" alt="button to delete" src="../img/Delete.png" onClick={() => deleteProduct()} />
              </td>
            </tr>
          )) : null}
        </tbody>
      </table>
    </section>
  );
}

export default Stocktaking;
