
import React from 'react'

export const Alert = ({message}) => {
    const style = {
        padding: '10px',
        margin: '10px 0',
        border: '1px solid transparent',
        borderRadius: '4px',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        borderColor: '#f5c6cb'
      };
    
  return (
    message && (
        <div style={style}>
          {message}
        </div>
      )
  )
}
