import React, { useState } from 'react';
import { Col, Row, FloatingLabel, Form, Button, } from "react-bootstrap"
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

const Contact = () => {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  const sendMessage = () => {
    let details = {
      name,
      email,
      message
    }
    if (name && email && message) {
      localStorage.setItem("Message", JSON.stringify(details));
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your Message has been sent',
        showConfirmButton: false,
        timer: 1500
      })
      setName("");
      setEmail("");
      setMessage("")

    } else {
      Swal.fire('Every Field is Required')
    }

  }


  const container = {
    marginTop: "5rem",
  }

  const p = {
    textTransform: "uppercase",
    marginBottom: "1rem",
    fontSize: "3rem",
    marginLeft:"20rem",
    marginBottom:"3rem"
  }

  const form = {
    marginTop: "3rem"
  }

  const img = {
    width: "25rem",
    height: "20rem",
    backgroundRepeat: "no-repeat",
    // position: "fixed", q
    left: "1rem"
  }

  const input = {
    margin: "1rem"
  }
  return (
    <>
      <div style={container} className="container">
            <p className='ContactHeader' style={p}>Contact Us</p>
        <Row>
          <Col>
            <img className='ContactImage' style={img} src='./Images/contact.jpg' />
          </Col>
          <Col className='contactPara'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero inventore, ab nostrum impedit voluptatibus odit quas facere, blanditiis hic accusamus eaque mollitia quia sint quaerat necessitatibus ad deleniti rerum. Delectus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quibusdam.</p>
          </Col>
        </Row>


        <Row style={{ margin: "-4rem auto 1rem 3rem" }}>
          <Col></Col>
          <Col>
            <Row  className='logoOfContact'>
              <Col>
                <a target="_blank" href='https://github.com/ThakarKrishna'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>

              </Col>
              <Col>
                <a target="_blank" href='https://contacts.google.com/'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </a>

              </Col>
              <Col>

                <a target="_blank" href='https://www.google.co.in/maps/@23.1435166,72.6845598,15z'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg></a>


              </Col>
              <Col>
                <a target="_blank" href='https://www.facebook.com/'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>

              </Col>
              <Col>
                <a target="_blank" href='https://twitter.com/'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>

              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col> </Col>
          <Col className='formOfContact'>
            <div style={{margin:"1rem"}} >
              <FloatingLabel style={input} controlId="floatingPassword" label="Name">
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              </FloatingLabel>
              <FloatingLabel style={input}
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel style={input} controlId="floatingTextarea2" label="Message">
                <Form.Control
                  as="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              <Button type='submit' onClick={sendMessage} style={{ margin: "1rem", width: "10rem", height: "3rem" }} variant="dark">Send Message</Button>
            </div>

          </Col>
        </Row>



      </div>
    </>
  )
}

export default Contact