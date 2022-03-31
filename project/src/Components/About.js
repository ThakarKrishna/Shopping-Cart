import React from 'react'
import {Col,Row} from "react-bootstrap"

const About = () => {
  const container={
    marginTop:"4rem",
   
  }

  const img={
    width:"25rem",
    backgroundRepeat:"no-repeat",
  }

  const h2= {
textTransform:"uppercase",
marginBottom:"1rem"
  }
  return (
    <div  style={container} className="container">
      <Row>
        <Col>
        <h2 style={h2}>About Us</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero inventore, ab nostrum impedit voluptatibus odit quas facere, blanditiis hic accusamus eaque mollitia quia sint quaerat necessitatibus ad deleniti rerum. Delectus?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quibusdam.</p>
        </Col>
        <Col>
  <img style={img} src='./Images/image.jpg'/>
        
        </Col>
      </Row>
 
</div>
  )
}

export default About