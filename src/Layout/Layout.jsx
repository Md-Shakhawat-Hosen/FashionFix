import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Components/AddProduct/AddProduct";
import BrandName from "../Components/Home/BrandName";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ShowProduct from "../Components/ShowProduct/ShowProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Root from "../Root/Root";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brand"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/brand",
        element: <BrandName></BrandName>,
      },
      {
        path: "/brand/:id",
        element: <ShowProduct></ShowProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/brand/${params.id}`),
      },
    ],
  },
]);


export default myRoute;