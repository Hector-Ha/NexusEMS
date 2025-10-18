import React from 'react';

const Button = ({ label, onClick, type = 'button', style: customStyle = {} }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        background: '#2e7d32',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
        ...customStyle,
      }}
    >
      {label}
    </button>
  );
};

export default Button;