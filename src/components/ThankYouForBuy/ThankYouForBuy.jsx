import React from 'react'
import { useParams } from "react-router-dom";



function ThankYouForBuy() {
  const idOrder = useParams().idOrder;
return (
  <>
  <div>¡Gracias por la compra!</div>
  <h4>El ID generado por tu compra es: <strong>{idOrder}</strong></h4>
  </>
)
}


export default ThankYouForBuy