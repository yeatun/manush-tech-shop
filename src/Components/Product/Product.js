import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {title,price,description,image,id} =props.product;
    

    return (
        <div >
            

           <div className='review'>
           <img style={{width:'100px'}} src={image} alt="" />
            <h5>{title}</h5>
            <p>$ <b>{price}</b></p>
            <button 
              
            className='main-button'
           
            > 
             <FontAwesomeIcon icon={faTrashAlt} /> Remove Item</button>
           </div>
        </div>
    );
};

export default Product;