import { Link } from "react-router-dom";


const Login = () => {
    return (
      <div>
        <div className="mt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <span className="font-bold text-center text-2xl pt-4">
                Login Now
              </span>

              <form className="card-body">
                
                
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
              <h1 className="text-center pb-5">
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