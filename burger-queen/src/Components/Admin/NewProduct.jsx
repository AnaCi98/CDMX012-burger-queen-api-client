/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import { createProduct } from '../data';
import './NewWorker.css';

export default function NewProduct({
  modalNewProduct,
  closeModal, edit, infoPerProduct, closeEditModal, editProductAdmin,
}) {
  // valores iniciales del formulario
  const initialValues = {
    name: '',
    price: '',
    image: 'URL',
    type: '',
    dateEntry: '',
  };
  // infoWorker se inicializa con valores iniciales del formulario
  const [infoProduct, setInfoProduct] = useState(initialValues);

  const changeInfo = (e) => {
    e.persist();
    const { name } = e.target;
    const val = e.target.value;
    setInfoProduct({ ...infoProduct, [name]: val });
  };

  const newProduct = async (e) => {
    e.preventDefault();
    await createProduct(
      infoProduct.name,
      infoProduct.price,
      'url',
      infoProduct.type,
    );
  };

  useEffect(() => {
    // Se setea setInfoWorker con infoPerUser si edit es true
    // si le damos click al boton de editar se setea esta informacion
    // unicamente ocurre cuando cambia infoPerUser
    if (edit) {
      setInfoProduct(infoPerProduct);
    }
  }, [infoPerProduct]);

  if (modalNewProduct) {
    return (
      <section className="new-worker-section">
        <img
          className="Back-worker-view"
          alt="button to return admin view"
          src="../img/Back.png"
          onClick={() => { closeModal(); setInfoProduct(initialValues); closeEditModal(); }}
        />
        <div className="new-worker-form">
          {edit ? null : (
            <p>Agregar producto</p>
          )}
          {edit ? (
            <p>Editar producto</p>
          ) : null}
          <input className="admin-form-input" type="text" placeholder="Producto" defaultValue={infoProduct.name} name="name" onChange={changeInfo} />
          <input placeholder="Precio" type="text" defaultValue={infoProduct.price} name="price" onChange={changeInfo} />
          <select defaultValue="DEFAULT" name="type">
            <option value="DEFAULT" hidden>Tipo</option>
            <option value="meal">Desayuno</option>
            <option value="breakfast">Comida</option>
          </select>
          {edit ? null : (
            <button
              type="button"
              className="Add-worker"
              onClick={(e) => {
                newProduct(e);
              }}
            >
              Crear
            </button>
          ) }
          {edit ? (
            <button
              type="button"
              className="Add-worker"
              onClick={() => {
                editProductAdmin(infoProduct.id, infoProduct);
              }}
            >
              Actualizar
            </button>
          ) : null}
        </div>
      </section>
    );
  } return null;
}
