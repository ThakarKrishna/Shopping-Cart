import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, delCart, removeFromCart } from '../redux/actions/ProductActions';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const Cart = () => {

  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.handleCart);


  const handleclick = (data) => {
    dispatch(addCart(data))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const removeProductFromCart = (el) => {
    Swal.fire({
      title: 'Are you sure to remove this?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(el));
        Swal.fire(
          'Deleted!',
          'Your Product has been Removed from cart.',
          'success'
        )
      }
    })
  }

  const removeToCart = (data) => {
    dispatch(delCart(data))
  }

  return (
    <>
      {cartList.length === 0 ?
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <div >
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-cart-x" viewBox="0 0 16 16">
              <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </div>
          <h2 style={{ margin: "0.5rem" }}>Your cart is empty</h2>
        </div>
        :
        cartList.map((product) => {
          const { id, title, image, price } = product;
          return (
            <div className="mt-5" key={id}>
              <Container style={{ marginTop: "6rem" }}>
                <Row style={{ padding: "2rem" }}>
                  <Col>
                    <img src={image} alt={title} height="250px" width="250px" /></Col>
                  <Col>
                    <br />
                    <Card.Title style={{ fontSize: "1.5rem" }}>{title}</Card.Title>
                    <br />
                    <h5>${(product.qty * price).toFixed(2)}</h5>
                    <br />
                    <Button onClick={() => removeToCart(product, id)} variant="dark me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                    </Button>
                    <input type="text" readOnly style={{ width: "3.5rem", height: "2.5rem", textAlign: "center", margin: "auto 1rem auto 0.5rem", border: "3px solid black" }} value={product.qty} />
                    <Button onClick={() => handleclick(product, id)} variant="dark me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                    </Button>
                    <Button onClick={() => removeProductFromCart(product)} variant="dark me-2" title='Remove from Cart'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                      </svg>
                    </Button>
                    <br />
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