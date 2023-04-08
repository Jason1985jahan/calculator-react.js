import React from 'react'

function CalculateButton({onClick , value , className}) {
  return (
     <button onClick={() =>onClick(value)} className={className}>{value}</button>
  )
}

export default CalculateButton
