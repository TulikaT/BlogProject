import React from 'react'

function Logo({width  = '100px'}) {
  return (
    
    <div className='w-12 flex flex-row m-auto text-xl font-extrabold font-serif'>
        <h1 className='text-orange-400'>g</h1>
        <h1 className='text-orange-700'>o</h1>
        <h1 className='text-white'>Blogging</h1>
    </div>
  )
}

export default Logo