import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import ProductDetails from './Components/ProductDetails';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import "./App.css"
import About from './Components/About';
import Contact from './Components/Contact';
import BreadCrumbComponent from './Components/BreadCrumbComponent';
const App = () => {
  return (
<>

<Router>
      <Header/>
      <BreadCrumbComponent/>
      <Routes>
      <Route path="/" exact element={<Home/>}></Route>

        <Route path="/home"  element={<Home/>}></Route>

        <Route path="/login"  element={<Login/>}></Route>
        <Route path="/cart"  element={<Cart/>}></Route>
        <Route path="/about"  element={<About/>}></Route>
        <Route path="/contact"  element={<Contact/>}></Route>

       <Route path="/product" element={<ProductList/>}></Route>

        <Route path="/product/:productId" element={<ProductDetails/>}></Route>

      </Routes>
    </Router>

</>

    )
}

export default App