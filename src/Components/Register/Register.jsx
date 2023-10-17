import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {
    
    const { createUser, userUpdateProfile } = useContext(AuthContext);

    const handleRegisterForm = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

      console.log(name, photo, email, password);

      // Check if the password is less than 6 characters
      if (password.length < 6) {
        return toast.error("Password must be at least 6 characters long");
      }

      // Check if the password contains a capital letter
      if (!/[A-Z]/.test(password)) {
        return toast.error("Password must contain at least one capital letter");
      }

      // Check if the password contains a special character
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return toast.error("Password must contain at least one special character");
      }

      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          userUpdateProfile(name,photo)
          .then(()=>{
            toast.success("Successfully Registered!");
          })
          
          form.reset();
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(`${error.message}`);
        });
    }
    return (
      <div>
        <div>
          <Toaster />
        </div>
        <div className="">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <span className="font-bold text-center text-2xl pt-4">
                Register Now
              </span>

              <form onSubmit={handleRegisterForm} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    name="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <h1 className="text-center pb-5">
                Already Have an Account? Please{" "}
                <Link
                  className="text-cyan-400 font-bold border-b-2 border-cyan-600"
                  to="/login"
                >
                  Login
                </Link>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;