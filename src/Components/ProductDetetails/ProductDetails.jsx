import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const details = useLoaderData();
    // console.log(details)
    return (
      <div>
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
                  <button className="bg-cyan-400 font-bold text-white p-4 w-full">
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