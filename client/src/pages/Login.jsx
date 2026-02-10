import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {
    const navigate = useNavigate()
  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/loginuser`,
        {
          user_email,
          user_password,
        },
      );
      navigate('/')
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
            <span className="text-center">
              Don't have account{" "}
              <Link to={"/account/register"} className="text-blue-500">
                {" "}
                Sign-up{" "}
              </Link>
              now!
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
