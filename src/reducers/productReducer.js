import types from "../types";

const initialProductState = {

    products: [
        { id: 1, title: "Product #1"},
        { id: 2, title: "Product #2"}
    ],

    cart: [
        { id: 1, title: "Product #1", quantity: 1}
    ],
    activeProduct: { id: 2, title: "Product #2" }


}

const productReducer = (state, action) => {

    switch(action.type) {

        case types.productShow: 
          return {
              ...state,
              activeProduct: action.payload
          }
          case types.productAddCar: {

            const newProduct = action.payload;
           const carContainProduct = state.cart.find(
               item => item.id === newProduct.id)

               return carContainProduct 
               ? {
                ...state,
                   cart: state.cart.map(item => 
                       item.id === newProduct.id
                       ? {...item, quantity: item.quantity+1}
                       : item
                   )
            
                } : {
                  ...state, 
                  cart: [
                      ...state.cart,
                      {...action.payload, quantity:1}
                  ]
              }

            }

            case types.productRemoveCar:
                return {
                    ...state,
                    cart: state.cart.filter( item =>  item.id !== action.payload)
                }

            case types.productRemoveOne: {
          
                const productDelete = state.cart.find( item => item.id === action.payload)

                console.log(action.payload);
                console.log(productDelete);

                return productDelete.quantity > 1 ?
                {

                    ...state,
                    cart: state.cart.map( item => 
                        item.id === action.payload ?
                        {...item, quantity: item.quantity-1} :
                        item
                    )

                } : {

                    ...state,
                    cart: state.cart.filter( (item) => item.id !== action.payload)
                    
                }

                // con este código elimina el elemento de la interfaz







             
            }

        default:
            return state;
    }
}


export { initialProductState }
export default productReducer;