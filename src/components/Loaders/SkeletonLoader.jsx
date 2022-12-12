import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Card from 'react-bootstrap/Card';
import ButtonCard from "../ButtonCard/ButtonCard"
import {Link as LinkRouter} from "react-router-dom"

function SkeletonLoader() {
  return (
    <div>
    <Card style={{ width: '100%' }} className= "cardAlign">
      <Card.Img variant="top" src={<Skeleton/>} alt= "props.titulo" />
      <Card.Body className='alignCard'>
        <Card.Title><Skeleton/></Card.Title>       
        <Card.Text>
        <Skeleton/>
        </Card.Text>
<LinkRouter to= {<Skeleton/>}>
        <ButtonCard><Skeleton/></ButtonCard>
        </LinkRouter>        
      </Card.Body>
    </Card>
    </div>
  )
}

export default SkeletonLoader