import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Profile from "./auth/profilePage";
import Members from "./aup/Members";
import AddMembers from "./aup/Addmember";
import EditMembers from "./aup/EditMember";

import "../App.css";

function AuthenticatedApp() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/:userId/profile" element={<Profile />} />
            <Route path="/members" element={<Members />} />
            <Route path="/members/addmember" element={<AddMembers />} />
            <Route path="/members/editmember/:id" element={<EditMembers />} />
        </Routes>
    </div>
  );
}

export default AuthenticatedApp;