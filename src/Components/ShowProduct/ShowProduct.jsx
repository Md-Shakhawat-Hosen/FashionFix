import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const ShowProduct = () => {
    const single = useLoaderData();
    // console.log(single);

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // console.log(products)
   
    const remaining = products.filter(product => product.brandName.toLocaleLowerCase() === single.name.toLocaleLowerCase());
    // console.log(remaining);

    return (
      <div>
        {remaining.length === 0 ? (
          <div className="h-screen flex justify-center items-center">
            <h1 className="font-bold text-3xl">
              There is no available product
            </h1>
          </div>
        ) : (
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
                    <h1 className="font-bold text-xl ">
                      Rating: {brand.rating}
                    </h1>
                  </div>
                  <div className="py-3 flex gap-2">
                    <Link to={`/update/${brand._id}`} className="flex-1">
                      <button className="bg-cyan-400 text-white p-4 w-full">
                        Update
                      </button>
                    </Link>
                    <Link to={`/products/${brand._id}`} className="flex-1">
                      <button className="bg-cyan-400 text-white p-4 w-full">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default ShowProduct;