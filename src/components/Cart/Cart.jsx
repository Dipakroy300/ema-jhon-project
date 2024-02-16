import React from 'react';
import './Card.css';
const Cart = ({cart}) => {
    // const cart=props.cart;
    // const {cart}=props;


    let totalPrice=0;
    let totalShipping=0;
    for(const product of cart){
        totalPrice=totalPrice+product.price;
        totalShipping= totalShipping + product.shipping;
    }

    const tax=totalPrice*7/100;

    const GrandTotal=totalPrice+totalShipping+tax;
    return (
        <div className='cart'>
                 <h4>Order Summary</h4>
                 <p>Selected Items:{cart.length}</p>
                 <p>Total Price: ${totalPrice.toFixed(2)}</p>
                 <p>Total Shipping: ${totalShipping.toFixed(2)}</p>
                 <p>Tax: ${tax.toFixed(2)}</p>
                 <h5>Grand Total: ${GrandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;