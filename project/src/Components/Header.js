import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { NavDropdown } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const [flag, setFlag] = useState(false)
  const Navigate = useNavigate();

  const cartListCount = useSelector((state) => {
    let totalQty = 0;
    if (state.handleCart && state.handleCart.length) {
      state.handleCart.forEach((item) => {
        totalQty += item.qty;
      });
    }
    return totalQty;
  });


  const goToCart = () => {
    Navigate("/cart")
  }

  const login = () => {
    Navigate("/login")
  }

  const logOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log out'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("Token");
        Navigate("/login")
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Logout',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }


  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      setFlag(true);
    } else {
      setFlag(false)
    }
  }, [login, logOut])


  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
        <div className="container">
          <Link to="/home" className="navbar-brand">
            <svg style={{ margin: "0.5rem 1rem 0.8rem auto" }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
            </svg>
            SHOPPING CART
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link active">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <NavDropdown style={{ color: "white" }}
                  active
                  id="nav-dropdown-dark-example"
                  title="User"
                  menuVariant="dark"
                >
                  {flag ? <NavDropdown.Item onClick={login} to="/login"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                  </svg>  Login</NavDropdown.Item> : <><NavDropdown.Item onClick={logOut} to=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                  </svg> LogOut</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={goToCart} to="/cart"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg> Cart({cartListCount})</NavDropdown.Item>
                  </>
                  }
                </NavDropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>



  )
}
export default Header;