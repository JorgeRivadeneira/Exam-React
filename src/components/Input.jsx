import React, {useState} from 'react'

export const Input = ({ value, onChange }) => {

  const style = {
    display: 'flex',

  }

  return (
    <input
      style={style}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Ingresa algo"
    />
  )
}
