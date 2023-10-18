import { useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const UpdateProduct = () => {
    const params = useParams();
    const [updateProduct, setUpdateProduct] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/products/${params.id}`)
        .then(res=> res.json())
        .then(data => setUpdateProduct(data))
    },[])
    // console.log(params);
    // console.log(updateProduct)
    const {
          name,
          photo,
          brandName,
          type,
          price,
          rating,
        } = updateProduct;

      const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const brandInfo = {
          name,
          photo,
          brandName,
          type,
          price,
          rating,
        };
        console.log(brandInfo);

        fetch(`http://localhost:5000/products/${params.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(brandInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success("Updated Successfully");
            }
              
            
          });
      };


    return (
      <div>
        <div className="bg-slate-200 p-9 ">
          <div>
            <Toaster />
          </div>
          <div className="">
            <form onSubmit={handleUpdateProduct}>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Brand image URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    name="photo"
                    defaultValue={photo}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={name}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Brand Name"
                    name="brandName"
                    defaultValue={brandName}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type"
                    name="type"
                    defaultValue={type}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    defaultValue={price}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Rating"
                    name="rating"
                    defaultValue={rating}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
        
              <button className="bg-cyan-300 text-white font-bold p-4 w-full mt-7 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateProduct;