import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import SignUP from "./component/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUP />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
