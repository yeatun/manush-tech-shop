import React from 'react';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Shop = (props) => {
    // console.log(props);
    const {title,price,description,image} =props.shop;


    return (
        <div className='product'>
            <div>
                <img style={{width:'100px'}} src={image} alt="" />
            </div>
            <div className='product-name'>
            <h3>{title}</h3>
            <p>{description}</p> 
            <p>$ <b>{price}</b></p>
          
            <button 
              
            className='main-button'
            onClick={() => props.handleAddProduct(props.shop)}
            > 
             <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
            
        </div>
    );
};

export default Shop;