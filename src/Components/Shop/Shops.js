import React, { useEffect, useState } from 'react';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Shop from './Shop';
import './Shops.css';

const Shops = () => {
    const [shops , setShops] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (shop) =>{
      console.log('handleAddProduct',shop);
      const newCart =[...cart,shop];
      setCart(newCart);
      const SameProduct = newCart.filter(pd => pd.id === shop.id);
      const count  = SameProduct.length;
      addToDatabaseCart(shop.id, count);
    }

    useEffect(()=>{
      const url =`https://fakestoreapi.com/products`;
      fetch(url)
      .then(res => res.json())
      .then(data => setShops(data))
    },[])
    return (
        <div className='shop-container'>
           
           <div  className='product-container'>
              {
                  shops.map(shop => <Shop id={shop.id}   handleAddProduct = {handleAddProduct} shop ={shop} ></Shop>)
              }
           </div>
           <div className='cart-container'>
           <Cart cart={cart}>
                    {/* <Link to="/review">
                        <button className="main-button">Review Order</button>
                    </Link> */}
               </Cart>
           </div>
        </div>
    );
};

export default Shops;