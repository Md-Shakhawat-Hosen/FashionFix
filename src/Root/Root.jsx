import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
      <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>

        <div className="px-8">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Root;