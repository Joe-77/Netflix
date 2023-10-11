import React from 'react'
import notFound from '../images/404bg.png'

const Error = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <img  src={notFound} alt="" />
    </div>
  )
}

export default Error