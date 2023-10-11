import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-center text-white py-2">
      copyright &copy; {new Date().getFullYear()} created by{" "}
      <a
      target='_blank'
      className='text-orange-400 duration-700 hover:text-orange-800 hover:underline' 
      href="https://www.linkedin.com/in/yousef-abdallah-760273242/">
        Yousef Abdallah
      </a>
    </div>
  );
}

export default Footer