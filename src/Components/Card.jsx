import React from 'react'

function Card({data , handelClick , index}) {
        const { name , artist , added }  = data ;

  return (
    <div className='w-72 bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex gap-4 relative mt-10'>
      
      <div className='bg-gradient-to-br from-orange-500 to-orange-700 w-20 h-20 rounded-xl flex-shrink-0'></div>

      <div>
        <h3 className='text-lg font-bold text-zinc-800'>
          {name} 
        </h3>
        <h6 className='text-sm text-zinc-500 mt-1'>
          {artist}
        </h6>
      </div>

      <button onClick={()=>handelClick(index)} className={`absolute bottom-4 right-4 px-4 py-2 ${added ? " bg-green-500 hover-bg-orange-600 ": " bg-orange-500 hover:bg-orange-600 "} text-white rounded-full text-xs font-medium transition-all duration-300`}>
        { added ? "ADDED" : "ADD TO FAV"}
      </button>

    </div>
  )
}

export default Card