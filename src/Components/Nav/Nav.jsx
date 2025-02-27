import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../Styles/Nav.css";
import UseAuth from "../../Hook/useAuth";
import { useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip'
const Nav = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = UseAuth();
  const handleTheme = (e) => {
    const check = e.target.checked;
    check ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme)

  }, [theme])

  const navigate = useNavigate();

  //  SET conditinal nav Route
  const viewLink = user ? (
    <div className="flex gap-5">
      <button
        onClick={() => {
          logOut();
          navigate("/");
        }}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded"
      >
        Sign Out
      </button>

      {/* USER PROFILE */}
      {/* <div className="tooltip tooltip-bottom z-50" data-tip={}> */}
        <img
          alt=""
          className="w-12 my-anchor-element  h-12 rounded-full ring-2 ring-offset-4 "
          src={user?.photoURL}
        />
      </div>
   
  ) : (
    <>
      <Link to="/login">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded ">
          Log In
        </button>
      </Link>
      <Link to="/signup">
        <button className=" ml-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Sign Up
        </button>
      </Link>
    </>
  );

  const navLink = (
    <>
      <NavLink
        className="ml-3 p-2 text-sm font-normal text-[#131313CC] border-none no-underline"
        to="/"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className="ml-3 p-2 text-sm font-normal text-[#131313CC] border-none no-underline"
        to="/AllTouristsSpot"
      >
        <li>All Tourists Spot</li>
      </NavLink>
      <NavLink
        className="ml-3 p-2 text-sm font-normal text-[#131313CC] border-none no-underline"
        to="/addtouristspots"
      >
        <li>Add Tourists Spot</li>
      </NavLink>
      <NavLink
        className="ml-3 p-2 text-sm font-normal text-[#131313CC] border-none no-underline"
        to={`/MyListPage/${user?.email}`}
      >
        <li>My List Page</li>
      </NavLink>


    </>
  );

  return (
    <div className=" container mx-auto w-[95%] font-Murecho rounded-lg shadow-lg  ">
      <div className="navbar ">
        <div className="navbar-start">

          <Tooltip className="z-50" anchorSelect=".my-anchor-element" place="top">
            {user?.displayName}
          </Tooltip>

          {/* drop down */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow  rounded-box w-52"


            >
              {navLink}
              {/* conditional nav */}
              {user ? (
                <button
                  onClick={() => {
                    logOut();
                    navigate("/");
                  }}
                  className="lg:hidden ml-5 font-semibold no-underline inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#006aff] rounded-md shadow-sm"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/login" className="lg:hidden ml-5">
                  <button className="font-semibold no-underline inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#006aff] rounded-md shadow-sm">
                    Log in
                  </button>
                </Link>

              )}
              <label className="swap swap-rotate">
                <input onClick={handleTheme} type="checkbox" />
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
              </label>

            </ul>
          </div>

          <img
            src="https://i.ibb.co/DCDNTHW/download-1.png"
            alt="React Image"
            className=" w-12  "
          />
          <a className="ml-2 text-2xl font-bold italic text-[#131313]">
            <span className=" text-[#006aff] ">Share</span>Trip
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex">{navLink}</ul>
        </div>

        <label className=" hidden lg:flex  swap swap-rotate ">
          <input onClick={handleTheme} type="checkbox" />
          <svg className="swap-on fill-current  w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </label>
        <div className="navbar-end mr-2">{viewLink}</div>
      </div>

    </div>
  );
};

export default Nav;