import React from 'react';

const TextInput = ({ label, name, value, onChange, type = 'text', required = false, children, ...props }) => {
  if (type === 'select') {
    return (
      <div>
        <label>{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          style={{ width: '100%', padding: '10px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          {...props}
        >
          {children}
        </select>
      </div>
    );
  }
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{ width: '100%', padding: '10px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        {...props}
      />
    </div>
  );
};

export default TextInput;