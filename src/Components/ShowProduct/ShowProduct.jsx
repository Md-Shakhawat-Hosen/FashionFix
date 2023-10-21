import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AddSlider from "../AddSlider/AddSlider";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";


const ShowProduct = () => {
  const single = useLoaderData();
  // console.log(single);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fashion-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products)

  const remaining = products.filter(
    (product) =>
      product.brandName.toLocaleLowerCase() === single.name.toLocaleLowerCase()
  );
  // console.log(remaining);



  return (
    <div className="px-6">
      <div>
        {remaining.length === 0 ? (
          ""
        ) : (
          <AddSlider remaining={remaining}></AddSlider>
        )}
      </div>

      {remaining.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <h1 className="font-bold text-3xl">There is no available product</h1>
        </div>
      ) : (
        <div>
          <h1 className="font-bold text-3xl text-center mb-11">
            Brand Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remaining.map((brand) => (
              <div key={brand._id} className="shadow-lg rounded-lg">
                <img
                  className="w-[400px] h-[300px] rounded-lg"
                  src={brand.photo}
                  alt=""
                />
                <h1 className="font-bold text-2xl p-3 text-center">
                  {brand.name}
                </h1>
                <div className="px-3">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl ">
                      Brand: {brand.brandName}
                    </h1>
                    <h1 className="font-bold text-xl ">Type: {brand.type}</h1>
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl ">
                      Price: {brand.price}$
                    </h1>
                    <Stack spacing={1}>
                      <Rating name="size-medium" value={brand.rating}  />
                      
                    </Stack>
                  </div>
                  <div className="py-3 flex gap-2">
                    <Link to={`/update/${brand._id}`} className="flex-1">
                      <button className="bg-yellow-600 text-white p-4 w-full font-bold">
                        Update
                      </button>
                    </Link>
                    <Link to={`/products/${brand._id}`} className="flex-1">
                      <button className="bg-cyan-400 text-white p-4 w-full font-bold">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProduct;
