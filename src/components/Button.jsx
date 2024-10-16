import React from 'react'

export const Button = ({onClick, disabled}) => {
    const style = {
        display: 'flex',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: '16px',
        opacity: disabled ? 0.6 : 1,
      };
    
  return (
    <button 
        onClick={onClick} 
        disabled={disabled}
        style={style}
    >
        Enviar
    </button>
  )
}
