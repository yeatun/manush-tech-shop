import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../Login/useAuth';

const Review = () => {
    const [cart, setCart] = useState([]);
    // const auth = useAuth();

    // const removeProduct = (productKey) => {
    //     const newCart = cart.filter(pd => pd.key !== productKey);
    //     setCart(newCart);
    //     removeFromDatabaseCart(productKey);
    // }

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            const cartProducts =  productKeys.map( id => {
                const product = data.find( pd => pd.id === id);
                // product.quantity = savedCart[id];
                return product;
            });
            setCart(cartProducts);
        })
        
    }, []);

     
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem 
                        // id={pd.id}
                        // removeProduct = {removeProduct}
                        product={pd}></ReviewItem>)
                }
                {/* {
                    !cart.length && <h1>Your cart is empty. <a href="/shop">Keep shopping</a></h1>
                } */}
            </div>
            {/* <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="shipment">
                        {
                            auth.user ?
                            <button className="main-button">Proceed Checkout</button>
                            :
                            <button className="main-button">Login to Proceed</button>
                        }
                    </Link>
                </Cart>
            </div> */}
        </div>
    );
};

export default Review;