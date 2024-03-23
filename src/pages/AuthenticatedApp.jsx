import { Routes, Route } from "react-router-dom";
import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
import Home from "../components/Home";
import Profile from "../components/profilePage";

import Breadcrumbs from "../components/utils/Breadcrumbs";

//member menagement
import Members from "../components/aup/Members";
import AddMembers from "../components/aup/Addmember";
import EditMembers from "../components/aup/EditMember";

//Company menagement
import Companys from "../components/company/company";
import EditCompany from "../components/company/Editcompany";
import AddCompany from "../components/company/addcompany";

//checklists
import CheckRoomTemp from "../components/checklists/CheckRoomTemp";
import CheckFDC from "../components/checklists/CheckFDC";
import CheckTransformer from "../components/checklists/CheckTransformer";
import CheckPhase1 from "../components/checklists/CheckPhase1";
import CheckPhase2 from "../components/checklists/CheckPhase2";
import Checkgenerator from "../components/checklists/Checkgenerator";

import "../App.css";

function AuthenticatedApp() {
  return (
    <div className="App flex">
        <SideBar/>
        <div className="bg-gray-100 w-full min-h-screen">
          <NavBar/> 
          <div className="ml-10 mb-4"><Breadcrumbs /></div>
          <div className="px-10 pb-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/:userId/profile" element={<Profile />} />
              <Route path="/members/*" element={<Members />} />
              <Route path="/members/addmember" element={<AddMembers />} />
              <Route path="/members/editmember/:id" element={<EditMembers />} />
              <Route path="/company/*" element={<Companys />} />
              <Route path="/company/addcompany" element={<AddCompany />} />
              <Route path="/company/editcompany/:id" element={<EditCompany />} />
              <Route path="/checklists/roomtemp" element={<CheckRoomTemp />} />
              <Route path="/checklists/fdc" element={<CheckFDC />} />
              <Route path="/checklists/Transformer" element={<CheckTransformer />} />
              <Route path="/checklists/phase1" element={<CheckPhase1 />} />
              <Route path="/checklists/phase2" element={<CheckPhase2 />} />
              <Route path="/checklists/generator" element={<Checkgenerator />} />
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default AuthenticatedApp;