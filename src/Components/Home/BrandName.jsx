import toast, { Toaster } from "react-hot-toast";

const BrandName = () => {
  const handleBrandName = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const brandName = { name, photo };
    console.log(brandName);

    fetch("http://localhost:5000/brand", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandName),
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
    <div className="bg-slate-200 p-9 w-3/4 mx-auto">
      <div>
        <Toaster />
      </div>
      <div className="w-1/2 mx-auto">
        <form onSubmit={handleBrandName}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              placeholder="Brand Name"
              name="name"
              className="input input-bordered w-full"
            />
          </div>
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
          <button className="bg-cyan-300 text-white p-4 w-full mt-7 rounded-lg">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrandName;
