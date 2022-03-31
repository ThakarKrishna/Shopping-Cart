import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/actions/ProductActions';


const Cart = () => {

  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.handleCart)


  const handleclick = (data) => {
    dispatch(addCart(data))
  }

  

  const removeToCart = (data) => {
    // console.log(data);
    dispatch(delCart(data))
  }
  return (
    <>
      {/* console.log("dfg") */}
      {cartList.length === 0 ? 
      <div    style={{textAlign:"center",marginTop:"5rem"}}>
          <div >

<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-cart-x" viewBox="0 0 16 16">
  <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
          </div>

<h2 style={{margin:"0.5rem"}}>Your cart is empty</h2>
      </div>
       : 
      cartList.map((product) => {
        const { id, title, image, price } = product;
        return (
          <div className="mt-5" key={id}>

            <Container style={{ marginTop: "6rem" }}>
              <Row style={{ padding: "2rem" }}>
                <Col><img src={image} alt={title} height="250px" width="250px" /></Col>
                <Col>
                  <br />

                  <Card.Title style={{ fontSize: "1.5rem" }}>{title}</Card.Title>
                  <br />
                  <h5>${product.qty * price}</h5>

                  {/* <h5>{cartListCount} X $ {price} = $ {cartListCount * price  }</h5> */}

                  <br />

                  <Button onClick={() => removeToCart(product, id)} variant="dark me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg></Button>
                  <input type="text" readOnly style={{ width: "3.5rem", height: "2.5rem", textAlign: "center", margin: "auto 1rem auto 0.5rem", border: "3px solid black" }} value={product.qty} />
                  <Button onClick={() => handleclick(product, id)} variant="dark me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                  </svg></Button>
                  <br/>
                 

                </Col>

              </Row>
            </Container>
          </div>
        )

      })}

    </>
  )
}

export default Cart;