import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-300 py-6' >
      <div className='container text-gray-950 mx-auto text-center flex flex-col' >
        <h2 className='text-2xl font-semibold text-center '>Amit Biswas <span className='text-sm font-semibold text-gray-950'>(Fontend Developer)</span></h2>
     
          <div className='flex gap-2 justify-center '>
            <div className='flex gap-2 items-center'>Mobile : 9007097330</div>
         <div className='flex gap-2 items-center'>Email : amit.biswas54@gmail.com</div>
      </div>
      </div>
    </div>
  )
}

export default Footer