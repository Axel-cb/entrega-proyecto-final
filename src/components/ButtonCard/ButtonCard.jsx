import React, { useState } from 'react'
import  "./buttonCard.css"


function ButtonCard(props) {

    function handleClick(){            
    }

  return (
    <button className='buttonCard' onClick= {handleClick}>{props.children}</button>
  );
}

export default ButtonCard