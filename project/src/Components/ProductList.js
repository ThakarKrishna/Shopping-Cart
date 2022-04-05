import React, { useState, useEffect,useRef } from 'react'
import ProductComponent from './ProductComponent.js'
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from "../redux/actions/ProductActions";
import axios from "axios";
import { Button } from 'react-bootstrap';


const ProductList = () => {

  const dispatch = useDispatch();
  const ref = useRef();
  const [search, setSearch] = useState("");
  const [isInput, setIsInput] = useState(false)
  const [suggestion, setSuggestion] = useState([])

  let products = useSelector((state) => state.allproducts.products);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onChangeHandler = (search) => {
    console.log(search.length)
    if (search.length > 0) {
      setIsInput(true)
    } else {
      setIsInput(false)
    }


    let matches = [];
    if (search.length > 0) {
      matches = products.filter((product) => {
        const regex = new RegExp(`${search}`, "gi");
        return product.title.match(regex);
      })
    }
    setSuggestion(matches)
    setSearch(search)
  }

  const onSuggestionHandler = (search) => {
    setSearch(search)
    setIsInput(false)
    setSuggestion([])
  }


  useEffect(() => {
    getProductsByFilter();
  }, [search])

  const getProductsByFilter = (category = 'all') => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(setProducts(res.data, category, search))
      })
      .catch((err) => {
        console.log(err)
      })
  }

const handleClick =()=>{
  setSearch("");
  setIsInput(false);
ref.current.focus()
  console.log("kc")
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
                <input ref={ref} className="form-control border-dark py-2 " placeholder="Search Here" autoComplete='off' type="search" name="search" value={search} onChange={(e) => onChangeHandler(e.target.value.toLowerCase())} />
                <div className="input-group-append">
                  <button className="btn btn-outline-dark" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {isInput &&
            <div className="row">
              <div className="col-md-5" style={{ margin: " -1rem auto 1rem auto" }}>
                {(suggestion.length > 0) ?
                  suggestion.map((suggestion, i) => {
                    // console.log("kk")
                    return <div key={i}>
                      <div className='suggestion' onClick={() => onSuggestionHandler(suggestion.title.toLowerCase())} >
                        <img style={{ height: "2.5rem", width: "2.5rem", marginRight: "1rem" }} src={suggestion.image} />
                        {suggestion.title.slice(0, 30)}...</div> </div>
                  })
                  :
                  <div className='suggestion' onClick={handleClick}  >
                    <svg style={{ marginRight: "0.5rem" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                    </svg>
                    Product Not Found , Try Again</div>
                }
              </div>
            </div>
          }

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