
import React from 'react'
import { useLocation } from 'react-router-dom';
import logo from '../images/netflix-1-logo-svgrepo-com.svg'
import ReactPlayer from 'react-player';
import { FaRegCircleXmark } from "react-icons/fa6";
import ShowChampion from './ShowChampion'


const About = () => {

  const location = useLocation().state;

  window.scrollTo(0, 0);

  const hideVideo = () => {
    document.getElementById("showVideo").classList.add("hidden");
  };

  const show = () => {
    document.getElementById("showVideo").classList.remove("hidden");
    document.getElementById("showVideo").classList.add("flex");
  };

  

  return (
    // start main div
    <div className="min-h-screen">
      <div className="w-full h-screen sm:h-[600px] relative">
        <div className="cover h-full">
          <img className="w-full h-full" src={location.cover_img} alt="" />
        </div>

        <div className="absolute z-[50] top-1/2 left-5 sm:left-10 translate-y-[-50%] flex flex-col sm:flex-row sm:items-center gap-10">
          <div>
            <img className=" w-48 sm:w-60 rounded-lg" src={location.poster_img} alt="" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <img className=" w-7 sm:w-10" src={logo} alt="" />
              <span className="text-orange-700 text-sm sm:text-xl">{location.name}</span>
            </div>

            <div className="my-5 flex items-center gap-5 text-sm text-orange-600">
              {location.adult ? <span>+18</span> : <span>+13</span>}
              <span className=" px-2 py-1 border-[1px] border-white/60">
                {location.time}
              </span>
              <span>{location.date}</span>
            </div>

            <p className=" w-52 sm:w-64 hidden sm:block text-white/30 leading-8 text-sm my-5">
              {location.about}
            </p>

            <button
            onClick={show} 
            className=" duration-700 bg-orange-600 hover:bg-transparent hover:border-[1px] hover:border-orange-800 hover:text-orange-600 px-2 py-1 text-sm rounded-md">
              Watch Trailer
            </button>
          </div>
        </div>
        <div onClick={hideVideo} id='showVideo' className=" absolute z-[99999] cursor-pointer w-full h-[600px] top-0 left-0 bg-black/60 hidden items-center justify-center">
          <div className='relative w-64 sm:w-[640px]'>
            <ReactPlayer url={location.trailer} width='auto'/>
            <FaRegCircleXmark
            onClick={hideVideo} 
            className=' absolute z-[99999] top-[-30px] right-0 text-white text-2xl'/>
          </div>
        </div>

        <div className="overlay absolute top-0 left-0 w-full h-full bg-black/70 z-20"></div>
      </div>

      <div className='text-white my-5 px-5 sm:px-20'>
        <ShowChampion prop={location} id={location.id}/>
      </div>

    </div>
    // end main div
  );
}

export default About