import React, { useState } from 'react'

function Practise() {
    const [val, setVal ]= useState({ name: "Ritesh" , isBanned: true});
  return (
    <div className='text-black px-10 py-10'>
      <h1>{val}</h1>
    <button onClick={()=> setVal(...val , (!isBanned))}>Change</button>
    </div>
  )
}

export default Practise
