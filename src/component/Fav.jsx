import React, { useState } from "react";
import { getFav } from "../utility/getAllFav";
import fav from "../images/fav.jpeg";
import { Link } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { deleteFav } from "../utility/deleteFav";

const Fav = () => {
  const { data } = getFav();

  const {mutateAsync} = deleteFav()



  const del = (id)=> {
    mutateAsync(id)
    
  }
  

  return (
    <div>
      <div className="w-full h-[400px]">
        <img className="w-full h-full" src={fav} alt="" />
      </div>

      <div className="container mx-auto">
        {data?.length > 0 ? (
          <>
            <h1 className="mt-10 text-orange-500 font-mono italic tracking-wider text-xl">
              Favorite Movies
            </h1>
            <div className="px-3 my-7 grid grid-cols-1 md:grid-col-3 lg:grid-cols-4 gap-7 ">
              {data?.map((e, id) => (
                <div key={id} className="relative group">
                  <HiOutlineXMark
                    onClick={()=> del(e.id)}
                    className="text-white text-2xl absolute z-[999] top-0 right-0 block sm:hidden group-hover:block cursor-pointer"
                  />
                  <Link key={id} to={`/about/${e.name}`} state={e}>
                    <div className="relative">
                      <img
                        className="w-full h-60"
                        src={e.poster_img}
                        alt=""
                      />
                      <div className="overlay absolute w-full h-full top-0 left-0 bg-black/70"></div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-red-600 text-lg sm:text-2xl h-[45vh] flex items-center justify-center italic font-mono">
            Don't Have Favorite Movies!
          </div>
        )}
      </div>
    </div>
  );
};

export default Fav;
