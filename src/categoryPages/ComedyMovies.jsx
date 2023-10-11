import React from 'react'
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const ComedyMovies = ({prop}) => {
  window.scrollTo(0, 0);
  const random = Math.round(Math.random() * prop.length);

  return (
    <div>
      <div className="cover w-full h-[400px] relative">
        <ReactPlayer
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          url={prop[random].trailer}
        />

        <div className="w-full h-full absolute top-0 left-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto my-10 px-3 sm:px-0">
        <h1 className="text-white mb-4 italic tracking-wide font-mono capitalize">
          {prop[0].category}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {prop.map((e, id) => (
            <Link key={id} to={`/about/${e.name}`} state={e}>
              <div className="relative">
                <div className="relative">
                  <img className="w-full h-80" src={e.poster_img} alt="" />
                  <div className=" absolute top-0 left-0 w-full h-full bg-black/80"></div>
                </div>
                <div className="absolute top-0 right-0">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center border-[1px] border-gray-600 text-yellow-400 text-sm relative">
                    <p>{e.rating}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComedyMovies