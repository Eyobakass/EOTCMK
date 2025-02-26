import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminAuth = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [authSuccess, setAuthSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (authSuccess) {
      navigate("/admin");
    }
  }, [authSuccess, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/adminAuth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      const token = response.headers.get("x-auth-token");
      if (token) {
        localStorage.setItem("token", token);
      }

      localStorage.setItem("data", JSON.stringify(data));
      setAuthSuccess(true); // This triggers navigation in useEffect
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          አድሚን
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              ኢሜይል
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              የይለፍ ቃል
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            ይላኩ
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAuth;
