import React from 'react'
import { Card, Button } from 'react-bootstrap';
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const Navigate = useNavigate()
  const handleClick = () => {
    Navigate("/product")
  }
  return (

    <>

      <Card className="bg-dark text-white ">
        <Card.Img src="./Images/img.jpeg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ fontSize: "3rem", margin: "10rem auto auto 1rem" }}> NEW SEASON ARRIVALS</Card.Title>
          <Card.Text style={{ fontSize: "1.5rem", margin: "auto auto auto 1rem" }}>
            CHECK OUT ALL THE TRENDS
          </Card.Text>
          <Button onClick={handleClick} style={{ margin: "8rem auto auto  3rem", width: "15rem", height: "3.5rem", fontSize: "1.3rem" }} variant="outline-dark">Shop Now
            <svg style={{ marginLeft: "0.5rem" }} xmlns="http://www.w3.org/2000/svg" width="34" height="26" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
          </Button>

        </Card.ImgOverlay>

      </Card>

      <div>
        <ProductList />
      </div>
    </>
  )
}

export default Home