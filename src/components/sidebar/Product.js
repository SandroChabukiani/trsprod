import React from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';

const Product = ({ category, onClick }) => {
  return (
      <div className='child' onClick={onClick}>
        <h1>{category}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <mask id="mask0_104_4785" style={{maskType: 'alpha', width: '24px', height: '24px'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
            <rect x="0.333252" y="0.5" width="24" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_104_4785)">
            <path d="M12.3333 15.875L6.33325 9.87498L7.73325 8.47498L12.3333 13.075L16.9333 8.47498L18.3333 9.87498L12.3333 15.875Z" fill="white"/>
          </g>
        </svg>
      </div>
  );
};

export default Product;