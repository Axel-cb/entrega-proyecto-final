import React from 'react'
import Card from 'react-bootstrap/Card';
import ButtonCard from "../ButtonCard/ButtonCard"
import ItemCount from '../ItemCount/ItemCount';
import {Link as LinkRouter} from "react-router-dom"
import "./itemDetail.css"



function ItemDetail({product}) {
    const urlDetail = `/item/${product.id}`
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
          <ItemCount/>
  <LinkRouter to= {urlDetail}>
          <ButtonCard>Agregar al carrito</ButtonCard>
          </LinkRouter>          
        </Card.Body>
      </Card>
      </div>
    );
  }



  
  export default ItemDetail;