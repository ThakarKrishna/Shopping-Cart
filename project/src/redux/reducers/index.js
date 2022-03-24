import { combineReducers } from "redux";
import { productsReducer,selectedProductsReducer } from "./ProductReducer";
import { handleCart } from "./ProductReducer";

const reducers = combineReducers({
    allproducts:productsReducer,
    product: selectedProductsReducer,
    handleCart,
})


export default reducers;