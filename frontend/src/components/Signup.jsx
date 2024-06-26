import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("signup button clicked");
        axios.post("http://localhost:3000/signup", { name, email, password })
            .then(res => {
                console.log(res);
                alert("New User Registration Successfully");
                navigate("/login");
            })
            .catch(err => console.log("axios signup error:", err));
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-8 bg-white border border-gray-200 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
            <form onSubmit={handleSignup}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Sign Up
                </button>
            </form>
            <div className="text-center mt-6">
                <p className="text-gray-600">Already have an account?</p>
                <button
                    className="text-blue-500 hover:underline"
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Signup;