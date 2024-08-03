import React, { useState } from 'react';
import './cart.css';
import { useNavigate } from 'react-router';

const Cart = () => {

    const navigate=useNavigate();
    
    
    
    
    const [quantities, setQuantities] = useState({
        monitor: 1,
        gamepad: 1
    });

    const handleQuantityChange = (event, product) => {
        const { value } = event.target;
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [product]: Number(value)
        }));
    };

    const getSubtotal = (price, quantity) => price * quantity;

    const monitorPrice = 650;
    const gamepadPrice = 550;
    const subtotal = getSubtotal(monitorPrice, quantities.monitor) + getSubtotal(gamepadPrice, quantities.gamepad);

    return (
        <div className="cart">
            <div className="breadcrumb">
                Home / Cart
            </div>
            <div className="cart-items">
            <div className="cart-header" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                </div>
                <hr />
                <div className="cart-item"  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
                    <img src="https://www.sencor.com/Sencor/media/content/Products/SLE32S700TCS-2.jpg" alt="LCD Monitor" className="product-image"/>
                    <span>$650</span>
                    <input 
                        type="number" 
                        value={quantities.monitor} 
                        onChange={(e) => handleQuantityChange(e, 'monitor')}
                   style={{border:'1px solid grey', borderRadius:'5px'}}/>
                    <span>${getSubtotal(monitorPrice, quantities.monitor)}</span>
                </div>
                <div className="cart-item"  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
                    <img src="https://media.discordapp.net/attachments/1267753931979882540/1268922800245047306/ps5.webp?ex=66ae2ff3&is=66acde73&hm=ecf4b57ea60a1ee5773da0f3686f73c01becec6b5008526d265373cd9cf36fa3&=&format=webp&width=662&height=662" alt="H1 Gamepad" className="product-image"/>
                    <span>$550</span>
                    <input 
                        type="number" 
                        value={quantities.gamepad} 
                        onChange={(e) => handleQuantityChange(e, 'gamepad')}
                        style={{border:'1px solid grey', borderRadius:'5px'}} />
                    <span>${getSubtotal(gamepadPrice, quantities.gamepad)}</span>
                </div>
            </div>
            <div className="cart-actions">
                <button className="btn" onClick={() => navigate('/home')} style={{border: '1px solid black'}}>Return To Shop</button>
                <button className="btn" style={{border: '1px solid black'}}>Update Cart</button>
            </div>
            
            <div className="cart-total">
                <div className="total-line">
                    <span>Subtotal:</span>
                    <span>${subtotal}</span>
                </div>
                <div className="total-line">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className="total-line total">
                    <span>Total:</span>
                    <span>${subtotal}</span>
                </div>
                <button className="btn checkout-btn" style={{borderRadius:'none' , borderRadius:'5px'}}>Proceed to checkout</button>
            </div>
        </div>
    );
};

export default Cart;