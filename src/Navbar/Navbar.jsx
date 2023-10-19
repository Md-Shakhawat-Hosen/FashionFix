import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import DarkTheme from "../Components/DarkTheme/DarkTheme";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);

    const navLinks = <>
     
     <li className="mr-4 font-bold"> <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "border-b-4 border-yellow-600"
                        : isPending
                        ? "pending"
                        : ""
                    }  to='/' >Home</NavLink> </li>
     <li className="mr-4 font-bold"> <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "border-b-4 border-yellow-600"
                        : isPending
                        ? "pending"
                        : ""
                    }  to='/addproduct' >Add Product</NavLink> </li>
     <li className="mr-4 font-bold"> <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "border-b-4 border-yellow-600"
                        : isPending
                        ? "pending"
                        : ""
                    }  to='/cart' >My Cart</NavLink> </li>
    
    </>

    const handleLogOut = () =>{
      logOut()
      .then(()=>{
        toast.success('Logged Out successfully')
      })
      .catch(()=>{
        toast.error('Something wrong')
      })
    }
    return (
      <div className="px-4">
        <div>
          <Toaster />
        </div>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown z-10">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </label>
              <ul
                tabIndex={0}
                className=" dropdown-content mt-3 z-[1] p-2 shadow bg-slate-400 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center">
              <img
                className="w-[50px] lg:mr-2"
                src="https://i.ibb.co/PwZ2P36/Ffashion-Fix-removebg-preview.png"
                alt=""
              />
              <a className=" normal-case text-xl font-bold hidden md:block">
                Fashion<span className="text-yellow-600">Fix</span>{" "}
              </a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end space-x-4">
            {user ? (
              <>
                <h1>{user.displayName}</h1>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <Link onClick={handleLogOut} className="btn">
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
            <DarkTheme></DarkTheme>
          </div>
        </div>
      </div>
    );
};

export default Navbar;