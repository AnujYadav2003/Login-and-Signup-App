import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = (props) => {
    const credUpdateFunction = props.credUpdateFunction;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        credUpdateFunction(email);
        setShouldNavigate(true);
        axios.post("http://localhost:3000/login", { email, password })
            .then(res => {
                console.log(res);
                if (res.data === "Success") {
                    alert("Login successful");
                    credUpdateFunction(email);
                    setShouldNavigate(true);
                }
            })
            .catch(err => console.log("axios login error:", err));
    };

    useEffect(() => {
        if (shouldNavigate) {
            navigate("/");
        }
    }, [shouldNavigate]);

    return (
        <form onSubmit={handleLogin}>
            <div className="max-w-md mx-auto mt-16 p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Login
                </button>
                <div className="text-center mt-6">
                    <p className="text-gray-600">Don't have an account?</p>
                    <button
                        type="button"
                        className="text-blue-500 hover:underline"
                        onClick={() => navigate("/Signup")}
                    >
                        Signup
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Login;
