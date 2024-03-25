import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Send from "./Pages/Send";
import Main from "./Pages/Main";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/send" element={<Send />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
