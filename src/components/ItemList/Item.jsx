import React from 'react'
import Card from 'react-bootstrap/Card';
import ButtonCard from "../ButtonCard/ButtonCard"
import {Link as LinkRouter} from "react-router-dom"
import "./Item.css";

function Item({imagen, nombre, precio, id, descuento, stock}) {
  const urlDetail = `/item/${id}`
  return (
    <div>
    <Card style={{ width: '100%' }} className= "cardAlign">
      <Card.Img variant="top" src={imagen} alt= "props.titulo" />
      <Card.Body className='alignCard'>
        <Card.Title>{nombre}</Card.Title>
        {descuento && <small>Descuento: {descuento}</small>}
        <Card.Text>
        ${precio}
        </Card.Text>
        {stock <= 0 && <h3>¡Sin stock!</h3>}
{stock !==0 && <LinkRouter to= {urlDetail}>
        <ButtonCard>Detalle del producto</ButtonCard>
        </LinkRouter>      }    
      </Card.Body>
    </Card>
    </div>
  );
 
}

export default Item;