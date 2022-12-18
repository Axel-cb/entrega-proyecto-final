import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Card from 'react-bootstrap/Card';
import ButtonCard from "../ButtonCard/ButtonCard"
import {Link as LinkRouter} from "react-router-dom"

function SkeletonLoader() {
  return (
    <
    Card style={{ width: '100%' }} className= "cardAlign">
    <Card.Img variant="top" src={<Skeleton/>} alt= "props.titulo" />
      <Card.Body className='alignCard'>
        <Card.Title><Skeleton/></Card.Title>       
        <Card.Text>
        <Skeleton/>
        </Card.Text>
      </Card.Body>
    </Card>
  
  )
}

export default SkeletonLoader