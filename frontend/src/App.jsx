import React, { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
// export const CredentialContext = React.createContext();
function App() {
  const [cred, setCred] = useState("");
  const [render, setRender] = useState("");
  // const handleCredUpdate = (userEmail) => {
  //   console.log(userEmail);
  //   console.log("executinng handle update");
  //   setCred(userEmail);
  //   console.log(cred);
  // }
  const handleCredUpdate = (userEmail) => {
    setCred(userEmail)
  }


  // useEffect(() => { setRerender(true) }, [rerender]);

  return (
    // <CredentialContext.Provider value={credentialstate}>;

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Dashboard credentials={cred} credUpdateFunction={handleCredUpdate} />}></Route>
        {rerender && <Route path="/" element={<Dashboard credentials={cred} credUpdateFunction={handleCredUpdate} />}></Route>
        } */}
        <Route path="/" element={<Dashboard credentials={cred} credLogoutFunction={handleCredUpdate} />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login credUpdateFunction={handleCredUpdate} />}></Route>
      </Routes>
    </BrowserRouter >
    // </CredentialContext.Provider>
  )
}

export default App
