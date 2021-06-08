import React, { useEffect, useState } from 'react';
import Shop from './Shop';
import './Shops.css';

const Shops = () => {
    const [shops , setShops] = useState([]);

    const handleAddProduct = (shop) =>{
      console.log('handleAddProduct',shop);
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
                  shops.map(shop => <Shop   handleAddProduct = {handleAddProduct} shop ={shop} ></Shop>)
              }
           </div>
           <div className='cart-container'>
             <h3>This is Cart</h3>
           </div>
        </div>
    );
};

export default Shops;