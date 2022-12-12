import React, { useState } from 'react'
import  "./buttonCard.css"


function ButtonCard(props) {

   

  return (
    <button disabled={props.disabled} className='buttonCard' onClick= {props.onClick}>{props.children}</button>
  );
}

export default ButtonCard