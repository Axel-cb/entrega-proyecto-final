import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {cartContext} from "../../context/cartContext"
import {Link as LinkRouter} from "react-router-dom"
import "./NavBar.css"

function CartWidget() {
  const miContext = useContext(cartContext);
  return (     
    <LinkRouter to="/cart"><div className='counterCartCSS'><FontAwesomeIcon icon= {faCartShopping} className="cartViewCss"/>{miContext.itemsInCart()}</div></LinkRouter> 
  )
}



export default CartWidget