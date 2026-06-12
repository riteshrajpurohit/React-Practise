import React from 'react'

function Properties({name , color}) {
  return (
    <div >
      <button className={`px-3 py-1 m-4 rounded-m  ${color}`}>{name}</button>
    </div>
  )
}

export default Properties
