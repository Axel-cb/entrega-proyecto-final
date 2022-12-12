import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import {Link as LinkRouter} from "react-router-dom"
import "./itemDetail.css"
import { useContext, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import ButtonCard from '../ButtonCard/ButtonCard';



function ItemDetail({product}) {
    const urlDetail = `/item/${product.id}`
    const [isInCart, setIsInCart] = useState (false)
    const {addToCart, cart} = useContext(cartContext);
    
    function onAddToCart(count){
      setIsInCart(count)
      addToCart(product, count)
    }

let itemAdjust = cart.find(itemInCart => itemInCart.id === product.id)
let stockUpdated = itemAdjust ? product.stock - itemAdjust.count : product.stock
 
    return (
        <div className='container itemDetailCard'>
      <Card style={{ width: '30rem' }} className= "cardAlign">
        <Card.Img variant="top" src={product.imagen} alt= "props.titulo" />
        <Card.Body className='alignCard'>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>{product.detail}</Card.Text>
          <Card.Text>
          ${product.precio}
          </Card.Text>
          {isInCart ? (
        <LinkRouter to="/cart">
          <ButtonCard>Ir al Carrito</ButtonCard>
        </LinkRouter>
      ) : (
        <ItemCount onAddToCart={onAddToCart} stock={stockUpdated} />
      )}
        </Card.Body>
      </Card>
      </div>
    );
  }



  
  export default ItemDetail;