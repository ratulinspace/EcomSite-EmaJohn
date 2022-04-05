import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {

    const { name, price, shipping, quantity } = props.product;

    return (
        <div>
            <h3>Review section</h3>
            <h4>{name}</h4>
        </div>
    );
};

export default ReviewItem;