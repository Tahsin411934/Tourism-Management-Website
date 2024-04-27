import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../Styles/Nav.css";
import UseAuth from "../../Hook/useAuth";
import { useEffect, useState } from "react";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = UseAuth();
  const handleTheme = (e) => {
    const check = e.target.checked;
    check ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  useEffect(()=>{
    localStorage.setItem('theme',theme);
    const localTheme= localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme',localTheme)
    
  },[theme])

  const navigate = useNavigate();

  //  SET conditinal nav Route
  const viewLink = user ? (
    <div className="flex gap-5">
      <button
        onClick={() => {
          logOut();
          navigate("/");
        }}
        className="hidden font-semibold no-underline lg:inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#006aff] rounded-md shadow-sm"
      >
        Sign Out
      </button>

      {/* USER PROFILE */}
      <div className="tooltip tooltip-bottom z-50" data-tip={user.displayName}>
        <img
          alt=""
          className="w-12  h-12 rounded-full ring-2 ring-offset-4 "
          src={user.photoURL}
        />
      </div>
    </div>
  ) : (
    <>
      <Link to="/login">
        <button className="hidden ml-5 font-semibold no-underline lg:inline-flex items-center justify-center px-4 py-2 text-base hover:bg-[#588df0] hover:text-[#fff] leading-6 bg-slate-100 whitespace-no-wrap   rounded-md shadow-sm">
          Sign In
        </button>
      </Link>
      <Link to="/signup">
        <button className="lg:ml-5 font-semibold no-underline inline-flex items-center justify-center px-4 py-2 text-base leading-6  hover:bg-[#588df0] hover:text-[#fff] bg-slate-100 whitespace-no-wrap  rounded-md shadow-sm">
          Sign Up
        </button>
      </Link>
    </>
  );

  const navLink = (
    <>
      <NavLink
        className="ml-3 p-2 text-lg font-normal text-[#131313CC] border-none no-underline"
        to="/"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className="ml-3 p-2 text-lg font-normal text-[#131313CC] border-none no-underline"
        to="/UpdateProfile"
      >
        <li>All Tourists Spot</li>
      </NavLink>
      <NavLink
        className="ml-3 p-2 text-lg font-normal text-[#131313CC] border-none no-underline"
        to="/CustomerExperiences"
      >
        <li>Customer Experiences</li>
      </NavLink>

      
    </>
  );

  return (
    <div className=" container mx-auto w-[95%] font-Murecho ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
              
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
                  <button className="font-semibold no-underline inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#23BE0A] rounded-md shadow-sm">
                    Sign In
                  </button>
                </Link>
              )}
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
        <div className="navbar-end mr-2">{viewLink}</div>
        <label className="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          onClick={handleTheme}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
      </div>
      
    </div>
  );
};

export default Nav;
