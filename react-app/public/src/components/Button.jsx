import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { counterContext } from '../../../context/context'

const Button = () => {
  const value = useContext(counterContext)
  
  return (
    <div>
      {/* Display count or add a label so you know it works */}
      <button onClick={() => value.setcount((count) => count + 1)}>
        Count: {value.count}
      </button>
      <span><Component1/></span>
    
    </div>
  )
}

export default Button
