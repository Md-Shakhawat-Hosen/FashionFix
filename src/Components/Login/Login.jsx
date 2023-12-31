import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    
    const { loginEmail, loginGoogle } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    // console.log(location)
    const handleLoginForm = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      console.log( email, password);

      loginEmail(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("Successfully logged!");
          form.reset();
          navigate(location.state ? `${location.state}` : '/')
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(`${error.message}`);
        });
    };

    const handleLoginGoogle = () => {
        loginGoogle()
        .then(result =>{
            console.log(result.user)
            toast.success('successfully logged with google')
            navigate(location.state ? `${location.state}` : "/");
        })
        .catch(error =>{
            toast.error(`${error.message}`)
        })
    }
    return (
      <div>
        <div>
          <Toaster />
        </div>
        <div className="mt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <span className="font-bold text-center text-2xl pt-4">
                Login Now
              </span>

              <form onSubmit={handleLoginForm} className="card-body">
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
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div onClick={handleLoginGoogle} className="w-[100%] flex justify-center mb-4">
                <div className="flex justify-center items-center w-3/4 border-2 px-8 py-3 rounded-xl hover:bg-slate-200">
                  <FcGoogle className="text-3xl mr-2"></FcGoogle>
                  <span className="font-bold text-black">Login With Google</span>
                </div>
              </div>
              <h1 className="text-center pb-5 text-black">
                Are you new? Please{" "}
                <Link
                  className="text-cyan-400 font-bold border-b-2 border-cyan-600"
                  to="/register"
                >
                  Register
                </Link>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;