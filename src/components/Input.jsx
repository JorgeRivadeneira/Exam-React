import React, {useState} from 'react'

export const Input = ({ value, onChange }) => {


  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Ingresa algo"
    />
  )
}
