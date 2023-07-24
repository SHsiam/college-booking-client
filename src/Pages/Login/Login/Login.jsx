import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();
     event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
  };
    return (
        <div className="bg-orange-50 min-h-screen text-orange-950 font-bold  ">
              <h2 className="text-3xl text-center pt-4 ">Login Now</h2>
         <div className="hero">
        <div className="card bg-orange-200 my-4">
          <form onSubmit={handleLogin} className="card-body font-bold text-orange-950">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-orange-950">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-orange-950">Password</span>
              </label>
              <div className="flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 bg-orange-500 hover:bg-orange-800 text-orange-50 rounded p-2"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-orange-500 hover:bg-orange-800 text-orange-50" type="submit" value="Login" />
            </div>
          </form>
          <p className="font-bold text-center mx-4">
            <small className="text-orange-950">
              New Here? <Link className="text-sky-600 text-lg" to="/register">Create an account</Link>
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    );
};

export default Login;