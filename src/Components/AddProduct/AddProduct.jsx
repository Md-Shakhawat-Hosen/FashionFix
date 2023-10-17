import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const short = form.short.value;

    const brandInfo = { name, photo,brandName,type,price,rating,short };
    console.log(brandInfo);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("successfully added");
          form.reset();
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
          <form onSubmit={handleAddProduct}>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Brand image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
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
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Short Description"
                name="short"
                className=" outline-gray-300 border-4 w-full p-3 rounded-lg"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <button className="bg-cyan-300 text-white font-bold p-4 w-full mt-7 rounded-lg">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
