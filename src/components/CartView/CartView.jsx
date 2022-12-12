import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firestore";
import ButtonCard from "../ButtonCard/ButtonCard";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";
import "./cartView.css";

function CartView() {
  const { cart, clearCart, removeItem, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

  if (cart.length === 0) return <h4 className="cardCartContainer">¡Carrito vacío! =(</h4>;

  async function handleCheckout(evt, data) {
    const order = {
      buyer: data,
      items: cart,
      total: 0,
      date: new Date(),
    };
    const orderId = await createOrder(order);
    navigate(`/thankYouForBuy/${orderId}`);
    clearCart();
  }

  return (
    <div className="cardCartContainer">
      <div className="cartList">
        {cart.map((item) => (
          <div key={item.id} className="formatCartView">
            <img src={item.imagen} alt={item.title} />
            <h2>{item.nombre}</h2>
            <h4>${item.precio}</h4>
            <h4>unidades: {item.count}</h4>
            <button onClick={() => removeItem(item.id)} className="dangerEmptyCart">X</button>
          </div>
        ))}
      </div>
      <div className="formCart-css">
        <h4>
          <strong>Total:</strong> ${priceInCart()}
        </h4>
        <CartForm onSubmit={handleCheckout} className="formCart-align" />

        <button className="dangerEmptyCart" onClick={() => clearCart()}>Vaciar carrito</button>
      </div>
    </div>
  );
}

export default CartView;
