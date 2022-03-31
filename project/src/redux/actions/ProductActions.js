import { actionTypes } from "../Constants/actions-type";


export const setProducts = (products, category, title) => {

    return {
        type: actionTypes.SET_PRODUCTS,
        payload: 
        category == 'all' ? 
        
        title === "" ? products : products.filter((item) => 
            item.title.toLowerCase().indexOf(title) >= 0
        )
        : 
        title === "" ? products.filter(item => item.category == category) :
        products.filter((item) =>
            item.category == category && 
            item.title.toLowerCase().indexOf(title) >= 0
        )
    }
};

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCTES,
        payload: product,
    }
};

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCTS
    }
}


export const addCart = (data) => {
    return {
        type: "ADD_ITEM",
        payload: data
    }

}

export const delCart = (data) => {
    return {
        type: "DEL_ITEM",
        payload: data
    }
}

export const removeFromCart = (data) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: data
    }
}