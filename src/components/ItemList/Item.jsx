import React from 'react'
import Card from 'react-bootstrap/Card';
import ButtonCard from "../ButtonCard/ButtonCard"
import ItemCount from '../ItemCount/ItemCount';
import {Link as LinkRouter} from "react-router-dom"
import "./Item.css";

function Item({imagen, nombre, precio, id}) {
  const urlDetail = `/item/${id}`
  return (
    <Card style={{ width: '100%' }} className= "cardAlign">
      <Card.Img variant="top" src={imagen} alt= "props.titulo" />
      <Card.Body className='alignCard'>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
        ${precio}
        </Card.Text>
<LinkRouter to= {urlDetail}>
        <ButtonCard>Detalle del producto</ButtonCard>
        </LinkRouter>
        <ItemCount/>
      </Card.Body>
    </Card>
  );
}

export default Item;