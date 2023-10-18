
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    // console.log(location)


     if (loading) {
        return (
            <div className="w-full flex justify-center items-center h-screen">
                <div className="loading loading-infinity w-[100px]"></div>
            </div>
        )
     }

     if (user){
        return children;
     }
     
     


     return <Navigate state={`${location.pathname}`} to="/login"></Navigate>;
};

PrivateRoute.propTypes ={
    children: PropTypes.node
}

export default PrivateRoute;