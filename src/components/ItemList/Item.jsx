import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Item(props) {
  return (
    <Card style={{ width: '18rem' }} className= "cardAlign">
      <Card.Img variant="top" src={props.imagen} alt= "props.titulo" />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
        ${props.precio}
        </Card.Text>
        <Button variant="success">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;