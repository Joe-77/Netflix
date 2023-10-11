import { collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import { db } from "../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const ShowChampion = ({ prop, id }) => {

  const navigate = useNavigate()

  const addToFav = async () => {
    await setDoc(doc(db, "Fav", `${prop.name}`), prop).then(() => {
      toast.success("movie added successfully");
      navigate('/profile')
    })
  };

  return (
    <>
      <div onClick={addToFav} className="text-3xl cursor-pointer w-fit">
        <AiFillHeart />
      </div>

      <div className="my-5">
        <span className="text-gray-600">Genres : </span>
        <span className="divide-x-2 divide-gray-700">
          {prop.genres.map((e, id) => (
            <span
              className="text-xs sm:text-sm px-2 italic font-mono tracking-wide"
              key={id}
            >
              {e}
            </span>
          ))}
        </span>
      </div>
      <div className="my-5 flex items-center gap-3  sm:hidden">
        <p className="text-gray-600 mb-2">About : </p>
        <p className="w-52 sm:w-64 text-white/30 leading-8 text-xs">
          {prop.about}
        </p>
      </div>
      <div>
        <span className="text-gray-600">Cast :</span>
        <span className="divide-x-2 divide-gray-700">
          {prop.champions.map((e, id) => (
            <span key={id} className="px-2 text-xs sm:text-sm">
              {e}
            </span>
          ))}
        </span>
      </div>
      <div className="flex gap-4 my-5">
        {prop.champion_images.map((e, id) => (
          <img
            key={id}
            src={e}
            alt=""
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-md"
          />
        ))}
      </div>
    </>
  );
};

export default ShowChampion;
