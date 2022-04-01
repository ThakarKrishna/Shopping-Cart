import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectedProduct, removeSelectedProduct,addCart ,removeFromCart} from "../redux/actions/ProductActions";
import Swal from 'sweetalert2';




const ProductDetails = () => {

  // console.log(removeSelectedProduct())
  // console.log(removeFromCart())


  const [show, setShow] = useState(false);
  const [temp, setTemp] = useState({})

  let cartList = useSelector((state) => state.handleCart)
// console.log(cartList)




  const Navigate = useNavigate();

  const { productId } = useParams();
  let product = useSelector((state) => state.product);

  const { image, rating, title, price, category, description } = product;
  const dispatch = useDispatch();
  const addToCart = (data) => {


    const token = localStorage.getItem("Token");
    if (!token) {
      Swal.fire({


        text: 'Please Login First',
      })
      Navigate("/login");
    }
    else {
      dispatch(addCart(data));


      setShow(true)
    }
  }

const removeToCart=(el)=>{
  dispatch(removeFromCart(el))
  console.log(dispatch(removeFromCart(el)))

  console.log(el)
  setShow(false)
  // cartList.map((e)=>console.log(e))
}

  const goToCart = () => {
    Navigate("/cart")
  }

  const fetchProductDetail = (id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setTemp(res.data)
        dispatch(selectedProduct(res.data))
      }).catch((err) => {
        console.log(err);
      });

  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);


    cartList.map((el)=>{
      console.log(el)
      // console.log(productId)

      if(el.id == productId){
        setShow(true)
        
      }else{
        setShow(false)
      }

    })
    return () => {
      dispatch(removeSelectedProduct());
    };


    
  }, [productId]);


  



  return (

    <>
      <div className="container mt-5 mb-2"  >
        {Object.keys(product).length === 0 ? (<h2 style={{ margin: "11rem auto auto 24rem" }}>Loading...</h2>) :
          (
            <Container style={{ marginTop: "4rem" }}>
              <Row>
                <Col><img src={image} alt={title} height="400px" width="400px" /></Col>
                <Col>
                  <br />
                  <h4 style={{ textTransform: "uppercase", color: 'black' }}>{category}</h4>
                  <br />
                  <Card.Title style={{ fontSize: "2rem" }}>{title}</Card.Title>
                  <br />
                  <h6><b>Rating {rating.rate}
                    <svg style={{ marginBottom: "0.5rem" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </b></h6>
                  <h2>${price}</h2>
                  <br />
                  <Card.Text>
                    {description}
                  </Card.Text>
                  <br />

                  <div style={{ marginBottom: "0.6rem" }}>
                    {!show ? <Button onClick={() => {
                      addToCart(product)
                    }} variant="outline-dark">Add To Cart</Button>
                      : <><Button variant="success">Added To Cart</Button><Button style={{marginLeft:"0.8rem"}} onClick={() => {
                        removeToCart(product)
                      }} variant="outline-dark">Remove from Cart</Button>{' '}
                      </>}{''}
                  </div>



                  
                  <Button onClick={goToCart
                  } variant="dark">Go To Cart</Button>{' '}
                </Col>

              </Row>
            </Container>

          )
        }
      </div>



    </>


  )
}

export default ProductDetails