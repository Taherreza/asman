import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {}
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Order Items:  0 {cart}</h3>
            <p>Items:  $0</p>
            <p>Shipping:  $0</p>
            <p>Total Tax:  $0</p>
            <p>Estimited Tax:  $0</p>
            <h2>Order Total:  $0</h2>
        </div>
    );
};

export default Cart;