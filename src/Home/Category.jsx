import React from "react";
import { Link } from "react-router-dom";

const Category = ({ prop }) => {
  return (
    <div className="container my-10 mx-auto relative group px-3 sm:px-0">
      <Link to={`movies/popular-movies`}>
        <h1 className="text-white tracking-wide italic font-mono mb-5 capitalize">
          {prop[0].category}
        </h1>
      </Link>

      <div className="grid  grid-flow-col auto-cols-max overflow-x-scroll scrollbar-thin sm:scrollbar-track-gray-800 sm:scrollbar-thumb-zinc-200">
        {prop.map((e, id) => (
          <Link key={id} to={`/about/${e.name}`} state={e}>
            <div>
              <img className=" w-80 h-80" src={e.poster_img} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
