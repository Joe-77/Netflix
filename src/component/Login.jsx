import React, { useContext } from "react";
import cover from "../images/cover.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
const Login = () => {

  const { logIn } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handleFormSubmit = (data) => {
    logIn(data)
  };

  return (
    <div className="w-full h-screen bg-black sm:bg-transparent relative">
      <img className="w-0 h-0 sm:w-full sm:h-full" src={cover} alt="" />
      <div className="overlay w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
      <div className="absolute bg-black opacity-70 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full sm:w-1/2 lg:w-1/4 text-white px-10 py-7">
        <h2 className="text-3xl tracking-wider font-thin italic">Sign In</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="my-5">
            <label className="block" htmlFor="Email">
              Email : <span className="text-red-400"> * </span>
            </label>
            <input
              id="Email"
              {...register("email", { required: true })}
              type="email"
              className="block outline-none bg-gray-800 text-white px-2 py-1 mt-2 font-bold rounded-lg w-full"
            />
            {errors.email && (
              <small className="text-xs text-orange-500">
                Please enter valid email
              </small>
            )}
          </div>
          <div className="my-5">
            <label className="block" htmlFor="pass">
              Password : <span className="text-red-400"> * </span>
            </label>
            <input
              id="pass"
              {...register("password", {
                required: true,
                minLength: 4,
                maxLength: 60,
              })}
              type="password"
              className="block outline-none bg-gray-800 text-white px-2 py-1 mt-2 font-bold rounded-lg w-full"
            />
            {errors.password && (
              <small className="text-xs text-orange-500">
                Your password must contain between 4 and 60 characters.
              </small>
            )}
          </div>
          <button className="w-full bg-orange-600 py-2 text-xl tracking-wider rounded-sm">
            Sign In
          </button>
          <div className="text-end mt-1">
            <Link to={"/reset-password"}>
              <small className="text-xs text-orange-600">Need help?</small>
            </Link>
          </div>
          <div className="text-gray-500 text-xs">
            New to Netflix?
            <Link to={"/signUp"}>
              <span className="text-white hover:underline"> Sign up now.</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
