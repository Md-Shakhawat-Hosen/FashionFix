import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Cart = () => {
  const {user} = useContext(AuthContext);
  const myCartLoaded = useLoaderData();

  const userCart = myCartLoaded.filter( cart => cart.email === user.email);

  const [myCart, setMyCart] = useState(userCart);
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
    <div className="h-[80vh] mt-10">
      <div className="overflow-x-auto px-6">
        <table className="table">
          {/* head */}
          <thead className="text-yellow-600">
            <tr>
              <th className="">
                <label>SL</label>
              </th>
              <th>Name</th>
              <th>Brand Name</th>
              <th>Price</th>
              <th>Action</th>
          
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
                    className=""
                  >
                    <div className="flex items-center gap-2 border p-2 rounded-lg border-yellow-600 hover:bg-yellow-200">
                      <AiOutlineDelete></AiOutlineDelete>
                      <span>Delete</span>
                    </div>
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
