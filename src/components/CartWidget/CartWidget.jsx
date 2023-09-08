import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

export const CartWidget = ({ onCartClick }) => {
    const [itemCount, setItemCount] = useState(0);

    const carritoClick = () => {
        setItemCount(itemCount + 1);
        onCartClick();
    };

    return (
        <div className="cart-widget" onClick={carritoClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartWidget;