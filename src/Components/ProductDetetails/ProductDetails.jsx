import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import { useState } from "react";
// import { useEffect } from "react";

const ProductDetails = () => {
  const details = useLoaderData();
  const {user} = useContext(AuthContext);

  // console.log(user.email)
  // console.log(details)
  // const [dataCart, setDataCart] = useState(null);
  // useEffect(() => {
  //   fetch("https://fashion-server.vercel.app/cart")
  //     .then((res) => res.json())
  //     .then((data) => setDataCart(data));
  // }, []);
  // console.log(dataCart);
  //    const checkDuplicate = [];

  const handleAddCart = (product) => {
    // console.log(product);

    // console.log(product.id)

    const productDetails = {
      id: product._id,
      email: user.email,
      name: product.name,
      brandName: product.brandName,
      photo: product.photo,
      price: product.price,
      type: product.type,
    };

      fetch("https://fashion-server.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            //  checkDuplicate.push(product._id);
            toast.success("Successfully added to cart");
            // setTimeout(function () {
            //   location.reload();
            // }, 10);
          }
        });

    // const checkFind = dataCart.find((pro) => pro.id === product._id);

    //  console.log(checkFind)

    // if (!checkFind) {
    //   const productDetails = {
    //     id: product._id,
    //     name: product.name,
    //     brandName: product.brandName,
    //     photo: product.photo,
    //     price: product.price,
    //     type: product.type,
    //   };

    //   // console.log(productDetails)

    //   fetch("https://fashion-server.vercel.app/cart", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(productDetails),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // console.log(data);
    //       if (data.insertedId) {
    //         //  checkDuplicate.push(product._id);
    //         toast.success("Successfully added to cart");
    //         setTimeout(function () {
    //           location.reload();
    //         }, 10);
    //       }
    //     });
    // } else {
    //   toast.error("Already added to cart");
    // }
  };
  return (
    <div className="px-6">
      <div>
        <Toaster />
      </div>
      <div className="">
        <div className="shadow-lg rounded-lg">
          <img
            className="w-[700px] h-[400px] rounded-lg mx-auto"
            src={details.photo}
            alt=""
          />
          <h1 className="font-bold text-2xl p-3 text-center">{details.name}</h1>
          <div className="px-3">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl ">Brand: {details.brandName}</h1>
              <h1 className="font-bold text-xl ">Type: {details.type}</h1>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-xl ">Price: {details.price}$</h1>
              <h1 className="font-bold text-xl ">Rating: {details.rating}</h1>
            </div>
            <div>
              <p>{details.short}</p>
            </div>
            <div className="py-3 flex gap-2">
              <div className="flex-1">
                <button
                  onClick={() => handleAddCart(details)}
                  className="bg-cyan-400 font-bold text-white p-4 w-full"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
