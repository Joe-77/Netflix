import React, { useContext } from "react";
import { Navigate, Route,  Routes } from "react-router-dom";
import Login from "../component/Login";
import SignUp from "../component/SignUp";
import ResetPass from "../component/ResetPass";
import ProtectRoutes from "./ProtectRoutes";
import Home from "../Home/Home";
import Error from "../component/Error";
import About from "../Home/About";
import PopularMovies from "../categoryPages/PopularMovies";
import { Context } from "../context/Context";
import RomanticMovies from "../categoryPages/RomanticMovies";
import ItalianMovies from "../categoryPages/ItalianMovies";
import ComedyMovies from "../categoryPages/ComedyMovies";
import Fav from "../component/Fav";

const Routers = () => {

  const {movies} = useContext(Context)

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="reset-password" element={<ResetPass />} />
      <Route path="*" element={<Error />} />

      <Route path="/*" element={<ProtectRoutes />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Fav />}/>
        <Route path="about/:movieName" element={<About />} />
        <Route path="home/movies/popular-movies" element={<PopularMovies prop={movies[0].popular}/>} />
        <Route path="home/movies/italian-movies" element={<ItalianMovies prop={movies[0].italian_movies}/>} />
        <Route path="home/movies/comedy-movies" element={<ComedyMovies prop={movies[0].comedy_movies}/>} />
        <Route path="home/movies/romantic-movies" element={<RomanticMovies prop={movies[0].romantic_movies}/>} />
      </Route>
    </Routes>
  );
};

export default Routers;
