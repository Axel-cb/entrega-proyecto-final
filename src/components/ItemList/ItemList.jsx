import React from "react";
import Item from "./Item";

function ItemList({ products }) {
    return (
        <div className='container'>
      <div className='containerCards'>
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              id={product.id}
              imagen= {product.imagen}
              nombre= {product.nombre}
              precio= {product.precio}
              stock= {product.stock}
              category= {product.category}  
              descuento= {product.descuento}            
              />
          );
        })}
     </div>
     </div>
    );
  }
  

  export default ItemList;

