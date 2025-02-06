import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  ClearError,
  SigninFailed,
  SigninStart,
  Signinsuccess,
} from "../redux/user/UserSlice";
import OAuth from "../Components/OAuth";
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';
const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(SigninStart());
      const res = await axios.post("/api/auth/signin", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      console.log(data);
      if (data.success === false) {
        dispatch(SigninFailed(data.message));
        toast.error("error")
        return;
      }
      dispatch(Signinsuccess(data));
      toast.success("Sign in Successfully")
      setTimeout(() => {

        navigate("/");
      }, 2000)
    } catch (error) {
      dispatch(SigninFailed(error.message));
    }
  };
  console.log(error);
  useEffect(() => {
    dispatch(ClearError());
  }, [dispatch]);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
          required
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
        <Toaster
          position="top-center" 
          reverseOrder={false} 
        />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignIn;
