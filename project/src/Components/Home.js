import React from 'react'
import { Card,Button} from 'react-bootstrap';
import "./Home.css";
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom';


const Home = () => {
const Navigate = useNavigate()
  const handleClick =()=>{
    Navigate("/product")
  }
  return (
  <>
  <div  className="">

    <Card  className="bg-dark text-white ">
  <Card.Img  src="./Images/img.jpeg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title  style={{fontSize:"3rem",margin:"10rem auto auto 1rem"}}> NEW SEASON ARRIVALS</Card.Title>
    <Card.Text  style={{fontSize:"1.5rem",margin:"auto auto auto 1rem"}}>
     CHECK OUT ALL THE TRENDS
    </Card.Text>
    <Button onClick={handleClick} style={{margin:"8rem auto auto  3rem", width:"15rem",height:"3.5rem"}} variant="outline-dark">Shop Now</Button>
    
  </Card.ImgOverlay>

</Card>
</div>
<div>
<ProductList/>
</div>
  </>
  )
}

export default Home