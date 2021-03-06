import React, { useState, useEffect, useRef } from 'react'
import ProductComponent from './ProductComponent.js'
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from "../redux/actions/ProductActions";
import axios from "axios";
import { Button } from 'react-bootstrap';
import MultiRangeSlider from "multi-range-slider-react";



const ProductList = () => {

  const [state, setState] = useState([
    {
      id: 1,
      name: "ALL",
      value: "all",
    },
    {
      id: 2,
      name: "Men's clothing",
      value: "men's clothing",
    },
    {
      id: 3,
      name: "Women's clothing",
      value: "women's clothing",
    },
    {
      id: 4,
      name: "Jewelery",
      value: "jewelery",
    },
    {
      id: 5,
      name: "Electronics",
      value: "electronics",
    }

  ]);

  const checkBox = {
    fontSize: "1.5rem",
  }



  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(1000);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const dispatch = useDispatch();
  const ref = useRef();
  const [search, setSearch] = useState("");
  const [isInput, setIsInput] = useState(false)
  const [suggestion, setSuggestion] = useState([])

  let products = useSelector((state) => state.allproducts.products);


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


  const [flag, setFlag] = useState(
    new Array(state.length).fill(false)
  )


  useEffect(() => {
    getProductsByFilter();
  }, [search, minValue, maxValue])


  const getProductsByFilter = (category = "all", position) => {


    const updatedFlag = flag.map((item, i) =>
      i === position ? !item : item
    )
    console.log(updatedFlag)
    setFlag(updatedFlag)
    console.log(category)

    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(setProducts(res.data, category, search, minValue, maxValue))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleClick = () => {
    setSearch("");
    setIsInput(false);
    ref.current.focus()
  }


  const input = {
    width: "4rem",
    margin: "1rem"
  }


  return (
    <>

      <div className="container " >
        <div style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}>
          <h2>Latest Products</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-5" style={{ margin: "0.5rem auto" }}>
              <div className="input-group">
                <input ref={ref} className="form-control border-dark py-1 " placeholder="Search Here" autoComplete='off' type="search" name="search" value={search} onChange={(e) => onChangeHandler(e.target.value.toLowerCase())} />
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



        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "2rem" }}>
          {state.map((el, i) =>
          // console.log(el.name,el.checked,el.value,el.id)

          (
            <div class="form-check form-check-inline">
              <input style={checkBox}
                class="form-check-input"
                type="checkbox"
                id={el.id}
                value={el.value}
                checked={flag[i]}
                onChange={(e) => getProductsByFilter(e.target.value, i)}
              />
              <label class="form-check-label" for="inlineCheckbox1">{el.name}</label>
            </div>
          )

          )}


        </div>




        <div className='SliderOfPrice' style={{ width: "25rem", marginLeft: "33rem", marginTop: "1rem" }}>
          <div>
            <div className='MaxMinDiv'>
              <label>Min Price:</label>
              <input style={input} type="text" value={minValue} onChange={(e) => set_minValue(e.target.value)} />
              <label>Max Price :</label>
              <input style={input} type="text" value={maxValue} onChange={(e) => set_maxValue(e.target.value)} />

            </div>
            <div className="Slider">
              <MultiRangeSlider

                min={0}
                max={1000}
                step={5}
                ruler={false}
                label={true}
                preventWheel={false}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                  handleInput(e);
                }} />
            </div>

          </div>
        </div>


        {/* <div className="btn d-flex justify-content-center categoryProducts">
          <Button className='categoryBtn' onClick={() => getProductsByFilter("all")} variant="outline-dark me-2">All</Button>
          <Button className='categoryBtn' onClick={() => getProductsByFilter("jewelery")} variant="outline-dark me-2">jewelery</Button>
          <Button className='categoryBtn' onClick={() => getProductsByFilter("electronics")} variant="outline-dark me-2">electronics</Button>
          <Button className='categoryBtn' onClick={() => getProductsByFilter("men's clothing")} variant="outline-dark me-2">men's clothing</Button>
          <Button className='categoryBtn' onClick={() => getProductsByFilter("women's clothing")} variant="outline-dark me-2">women's clothing</Button>
        </div> */}


        <div className="row">
          <ProductComponent search={search} />
        </div>
      </div>
    </>
  )
}

export default ProductList