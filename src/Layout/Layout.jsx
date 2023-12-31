import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Components/AddProduct/AddProduct";
import Cart from "../Components/Cart/Cart";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import BrandName from "../Components/Home/BrandName";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import ProductDetails from "../Components/ProductDetetails/ProductDetails";
import Register from "../Components/Register/Register";
import ShowProduct from "../Components/ShowProduct/ShowProduct";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Root from "../Root/Root";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://fashion-server.vercel.app/brand"),
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
        loader: ({ params }) =>
          fetch(`https://fashion-server.vercel.app/brand/${params.id}`),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://fashion-server.vercel.app/products/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://fashion-server.vercel.app/cart"),
      },
    ],
  },
]);

export default myRoute;
