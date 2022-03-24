import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent.js'
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from "../redux/actions/ProductActions";
import axios from "axios";
import { Button } from 'react-bootstrap';


const ProductList = () => {


  const products = useSelector((state) => {
    console.log(state)
  });
  const dispatch = useDispatch();


  useEffect(() => {
    getProductsByFilter();
  }, [])
  
  const getProductsByFilter = (category = 'all') => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(setProducts(res.data, category))
    }).catch((err) => {
      console.log(err)
    })
  }
 
  

  return (
    <>

      <div className="container mt-5">
        <div style={{ display: "flex", justifyContent: "center" ,marginTop:"7rem"}}>
          <h2>Latest Products</h2>

        </div>
        <hr />
        <div className="btn d-flex justify-content-center">
          <Button onClick={() => getProductsByFilter("all")} variant="outline-dark me-2">All</Button>
          <Button onClick={() => getProductsByFilter("men's clothing")} variant="outline-dark me-2">men's clothing</Button>
          <Button onClick={() => getProductsByFilter("women's clothing")} variant="outline-dark me-2">women's clothing</Button>
          <Button onClick={() => getProductsByFilter("jewelery")} variant="outline-dark me-2">jewelery</Button>
          <Button onClick={() => getProductsByFilter("electronics")} variant="outline-dark me-2">electronics</Button>
        </div>
        <div className="row">

          <ProductComponent />
        </div>

      </div>
    </>
  )
}

export default ProductList