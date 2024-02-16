import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Profile from "./auth/profilePage";
import Members from "./aup/Members";

import "../App.css";

function AuthenticatedApp() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/:userId/profile" element={<Profile />} />
            <Route path="/members" element={<Members />} />
        </Routes>
    </div>
  );
}

export default AuthenticatedApp;