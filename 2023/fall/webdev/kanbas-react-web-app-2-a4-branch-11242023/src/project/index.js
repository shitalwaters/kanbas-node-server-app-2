import Signin from "../Kanbas/Users/signin";
import Account from "../Kanbas/Users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../nav";


function Project() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <Signin/>
    </div>
  );
}
export default Project;


