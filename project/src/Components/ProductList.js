import React, { useState,useEffect } from 'react'
import ProductComponent from './ProductComponent.js'
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from "../redux/actions/ProductActions";
import axios from "axios";
import { Button } from 'react-bootstrap';


const ProductList = () => {

  const[search,setSearch]=useState("");
  // console.log(search)


  const products = useSelector((state) => {
    // console.log(state)
  });
  const dispatch = useDispatch();
useEffect(() => {
  window.scrollTo(0,0)
 
}, [])


  useEffect(() => {
    getProductsByFilter();


  }, [search])
  
  const getProductsByFilter = (category = 'all') => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(setProducts(res.data,category, search ));
    }).catch((err) => {
      console.log(err)
    })
  }

  
 

  return (
    <>

      <div className="container mt-5">
        <div style={{ display: "flex", justifyContent: "center" ,marginTop:"6rem"}}>
          <h2>Latest Products</h2>
         
        </div>


        <hr/>
        <div className="container">
    
    <div className="row">
        <div className="col-md-4" style={{margin:"1rem auto"}}>
            <div className="input-group">
                <input  className="form-control border-dark py-2 "  placeholder="Search Here" type="search" name="search" value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
                <div className="input-group-append">
                    <button  className="btn btn-outline-dark" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
       
        <div className="btn d-flex justify-content-center">
          <Button onClick={() => getProductsByFilter("all")} variant="outline-dark me-2">All</Button>
          <Button onClick={() => getProductsByFilter("men's clothing")} variant="outline-dark me-2">men's clothing</Button>
          <Button onClick={() => getProductsByFilter("women's clothing")} variant="outline-dark me-2">women's clothing</Button>
          <Button onClick={() => getProductsByFilter("jewelery")} variant="outline-dark me-2">jewelery</Button>
          <Button onClick={() => getProductsByFilter("electronics")} variant="outline-dark me-2">electronics</Button>
        </div>

        <div className="row">

          <ProductComponent  search={search}/>
        </div>


      </div>
    </>
  )
}

export default ProductList