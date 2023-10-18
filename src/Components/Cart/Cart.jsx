import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const myCartLoaded = useLoaderData();

  const [myCart, setMyCart] = useState(myCartLoaded);
  // console.log(myCart)

  const handleCartDelete = (id) => {
    fetch(`https://fashion-server.vercel.app/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.deletedCount > 0) {
          toast.success("successfully deleted");
          const remaining = myCart.filter((pod) => pod._id !== id);
          setMyCart(remaining);
        }
      });
  };
  return (
    <div className="h-[80vh]">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>SL</label>
              </th>
              <th>Name</th>
              <th>Brand Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myCart.map((prod, indx) => (
              <tr key={prod._id}>
                <th>
                  <span>{indx + 1}.</span>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={prod.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{prod.name}</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  {prod.brandName}
                  <br />
                </td>
                <td className="font-bold">{prod.price}</td>
                <th>
                  <button
                    onClick={() => handleCartDelete(prod._id)}
                    className="btn"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Cart;
