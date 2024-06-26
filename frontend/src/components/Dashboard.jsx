import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//anuj yadav---
const Dashboard = (props) => {
  const credentials = props.credentials;
  const credLogoutFunction = props.credLogoutFunction;
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const logoutFunctionality = (e) => {
    credLogoutFunction(null);
    setLogout(true);
  };

  useEffect(() => {
    if (logout) {
      navigate("/");
    }
  }, [logout]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {credentials ? (
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">
            Hi, {credentials}
          </p>
          <button
            onClick={logoutFunctionality}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
