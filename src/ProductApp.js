import React, { useReducer } from 'react'
import productReducer, { initialProductState } from './reducers/productReducer';
import types from './types';



const ProductApp = () => {
    
    const [ productState, dispatchProduct ] = useReducer(productReducer, initialProductState);
    const { products, cart, activeProduct} = productState;
 
    return (

    <div>
        <h2>Products</h2>
        <ul>
           { products.map( product => (
                     <li key={product.id}>
                     {product.title}
                     <button onClick={() => dispatchProduct({ 
                         type: types.productShow,
                         payload: product
                      })}>
                         Show
                     </button>
                     <button onClick={ () => dispatchProduct({
                         type: types.productAddCar,
                         payload: product
                     })}>
                         AddtoCar
                     </button>
                 </li>
            ))}
        </ul>
        <h2>car</h2>
        <ul>
            {cart.map( product => (
                <li key={product.id}>
                {product.title} - cantidad: {product.quantity}
                <button onClick={ () => dispatchProduct({
                    type: types.productRemoveCar,
                    payload: product.id

                })}>
                    RemoveAll
                </button>
                <button onClick={ () => dispatchProduct({
                    type: types.productRemoveOne,
                    payload: product.id
                })}>
                    reducirOne
                </button>

            </li>
            ))}
        </ul>
        <h2>Preview</h2>
        <p>{activeProduct.title}</p>

    </div>
  )
}


export default ProductApp;
