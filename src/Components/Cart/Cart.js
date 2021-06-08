import React from 'react';
import { Link } from 'react-router-dom';


const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
//    const total = cart.reduce ((total, prd)=> total+prd.price , 0)
let shipping = 0;
let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    totalPrice = totalPrice + product.price
}

 if(totalPrice > 35){
    shipping = 0;}

if(totalPrice > 15){
    shipping = 4.99;

}
else if (totalPrice > 0){
    shipping = 12.99;
}
const tax = (totalPrice / 10).toFixed(2);
const grandTotal = (totalPrice + shipping +Number(tax)).toFixed(2);
const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
}
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:$ <b>{cart.length}</b></p>
            <p>Product Price:$ <b>{formatNumber(totalPrice)}</b></p>
            <p><small>Shipping Cost: $ <b>{shipping}</b></small></p>
            <p><small>Tax + VAT: $ <b>{tax}</b></small></p>
            <p>Total Price: $ <b>{grandTotal}</b></p>
            <br />
          <Link  to ="/review">
          <button className="main-button">Review Order</button>
          </Link>
           
           
        </div>
    );
};

export default Cart;