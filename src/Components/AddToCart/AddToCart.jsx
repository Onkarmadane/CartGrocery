import React from 'react';
import Button from 'react-bootstrap/Button';
import './AddToCart.css'; // Import the custom CSS file

const AddToCart = () => {
  return (
    <Button className="animated-button mt-2 mb-2">
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 16h12V6H7v10zm13-12H4V4H2v2h2l3.6 7.59-1.35 2.44c-.14.26-.25.57-.25.92 0 1.1.9 2 2 2h12v-2H7.42c-.12 0-.23-.04-.33-.1l1.1-1.9h7.55c.75 0 1.41-.52 1.64-1.26l1.5-6c.04-.16.06-.33.06-.5 0-.83-.67-1.5-1.5-1.5z"
        />
      </svg>
      <span className="text">Add To Cart</span>
      <span className="circle"></span>
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 16h12V6H7v10zm13-12H4V4H2v2h2l3.6 7.59-1.35 2.44c-.14.26-.25.57-.25.92 0 1.1.9 2 2 2h12v-2H7.42c-.12 0-.23-.04-.33-.1l1.1-1.9h7.55c.75 0 1.41-.52 1.64-1.26l1.5-6c.04-.16.06-.33.06-.5 0-.83-.67-1.5-1.5-1.5z"
        />
      </svg>
    </Button>
  );
};

export default AddToCart;
