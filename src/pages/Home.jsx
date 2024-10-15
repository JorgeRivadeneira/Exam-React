import React, {useState} from 'react'
import { Alert } from '../components/Alert'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
  
      if (!value.trim()) {
        setAlertMessage('');
      }
    };
  
    const handleClick = () => {
      if (inputValue.trim()) {
        setAlertMessage(`¡Has ingresado: ${inputValue}!`);
      } else {
        setAlertMessage('Por favor, ingresa algo.');
      }
    };
    
  

  return (
    <div>
        <div>
            <Input value={inputValue} onChange={handleInputChange} />
            <Button onClick={handleClick} disabled={!inputValue.trim()} />
            <Alert message={alertMessage} />
        </div>
    </div>
  )
}
