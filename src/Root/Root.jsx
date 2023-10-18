
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";


const Root = () => {
  const {dark} = useContext(AuthContext);
  console.log(dark)
    return (
      <div>
        {dark ? (
            <div>
              <div className="max-w-screen-xl mx-auto">
                <Navbar></Navbar>

                <div className="">
                  <Outlet></Outlet>
                </div>
                <Footer></Footer>
              </div>
            </div>
        ) : (
          <div className="bg-gray-800 text-white">
            <div className="max-w-screen-xl mx-auto">
              <Navbar></Navbar>

              <div className="">
                <Outlet></Outlet>
              </div>
              <Footer></Footer>
            </div>
          </div>
        )}
      </div>
    );
};

export default Root;