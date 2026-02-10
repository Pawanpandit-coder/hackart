import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/newuser`, {
        user_name,
        user_email,
        user_password,
      });
      console.log(response.data);
      navigate("/");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e)=>setUserName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e)=>setUserEmail(e.target.value)}

            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e)=>setUserPassword(e.target.value)}

            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
          <span className="text-center">
            Already have account{" "}
            <Link to={"/account/login"} className="text-blue-500">
              {" "}
              Login{" "}
            </Link>
            now!
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
