import React, { useState, useEffect } from 'react'
import ProductComponent from './ProductComponent.js'
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from "../redux/actions/ProductActions";
import axios from "axios";
import { Button } from 'react-bootstrap';


const ProductList = () => {

  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([])
  // console.log(search)


  let products = useSelector((state) =>
    state.allproducts.products
  );

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])

  const onChangeHandler = (search) => {

    console.log(search)
    console.log(products)
    let matches = [];

    if (search.length > 0) {

      matches = products.filter((product) => {
        // console.log("title", product.title)

        const regex = new RegExp(`${search}`, "gi");
        return product.title.match(regex);
      })
    }
    console.log("matches", matches)

    setSuggestion(matches)
    console.log("suggestion", suggestion)
    setSearch(search)

  }

  const onSuggestionHandler =(search)=>{
    setSearch(search)
    setSuggestion([])

  }


  useEffect(() => {
    getProductsByFilter();

    


  }, [search])

  const getProductsByFilter = (category = 'all') => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(setProducts(res.data, category, search));
    }).catch((err) => {
      console.log(err)
    })
  }




  return (
    <>

      <div className="container mt-5">
        <div style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}>
          <h2>Latest Products</h2>

        </div>


        <hr />
        <div className="container">

          <div className="row">
            <div className="col-md-5" style={{ margin: "1rem auto" }}>
              <div className="input-group">
                <input className="form-control border-dark py-2 " placeholder="Search Here"  autoComplete='off' ype="search" name="search" value={search} onChange={(e) => onChangeHandler(e.target.value.toLowerCase())} />

                <div className="input-group-append">
                    <button  className="btn btn-outline-dark" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>

              </div>
            </div>
          </div>

<div className="row">
  <div className="col-md-5" style={{ margin: " -1rem auto 1rem auto" }}>
    
   {suggestion ?

suggestion.map((suggestion,i)=>{
          // console.log(suggestion.title.slice(0,15));
 return <div  key={i}> <div  className='suggestion' onClick={()=>onSuggestionHandler(suggestion.title)}>
   <img  style={{height:"2.5rem",width:"2.5rem",marginRight:"1rem"}}  src={suggestion.image}/>
   {suggestion.title.slice(0,30)}...</div> </div>
}):<h2>jhj</h2>


}
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

          <ProductComponent search={search} />
        </div>


      </div>
    </>
  )
}

export default ProductList