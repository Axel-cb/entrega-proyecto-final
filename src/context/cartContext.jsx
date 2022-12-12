import { createContext, useState } from "react";


export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(product, count) {
    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {
      product.count = count;
      newCart.push(product);
      setCart(newCart);
    }
  }
  function clearCart() {    
    setCart([])
  }

  function removeItem() {
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function priceInCart() {
    let precioTotal = 0;
    cart.forEach(
      (producto) =>
        (precioTotal = precioTotal + (producto.precio*producto.count))
    );
    return precioTotal;
  }


  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeItem,
        itemsInCart,
        priceInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
