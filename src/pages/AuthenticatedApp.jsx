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
import ChecklistsDasborad from "../components/checklists/ChecklistsDasborad";
import CheckRoomTemp from "../components/checklists/CheckRoomTemp";
import EditCheckRoomTemp from "../components/checklists/editChecklist/editCheckRoomTemp";
import CheckFDC from "../components/checklists/CheckFDC";
import EditCheckFDC from "../components/checklists/editChecklist/editCheckFDC";
import CheckTransformer from "../components/checklists/CheckTransformer";
import EditCheckTransformer from "../components/checklists/editChecklist/editCheckTransformer";
import CheckPhase1 from "../components/checklists/CheckPhase1";
import EditCheckPhase1 from "../components/checklists/editChecklist/editCheckPhase1";
import CheckPhase2 from "../components/checklists/CheckPhase2";
import EditCheckPhase2 from "../components/checklists/editChecklist/editCheckPhase2";
import Checkgenerator from "../components/checklists/Checkgenerator";
import EditCheckgenerator from "../components/checklists/editChecklist/editCheckgenerator";

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
              {/* user */}
              <Route path="/" element={<Home />} />
              <Route path="/users/:userId/profile" element={<Profile />} />
              {/* member */}
              <Route path="/members/*" element={<Members />} />
              <Route path="/members/addmember" element={<AddMembers />} />
              <Route path="/members/editmember/:id" element={<EditMembers />} />
              {/* company */}
              <Route path="/company/*" element={<Companys />} />
              <Route path="/company/addcompany" element={<AddCompany />} />
              <Route path="/company/editcompany/:id" element={<EditCompany />} />

              {/* checklist */}
              <Route path="/checklists/*" element={<ChecklistsDasborad />} />

                {/* roomtemp */}
              <Route path="/checklists/roomtemp" element={<CheckRoomTemp />} />
              <Route path="/checklists/roomtemp/edit" element={<EditCheckRoomTemp />} />

                {/* fdc */}
              <Route path="/checklists/fdc" element={<CheckFDC />} />
              <Route path="/checklists/fdc/edit" element={<EditCheckFDC />} />

                {/* tranformer */}
              <Route path="/checklists/Transformer" element={<CheckTransformer />} />
              <Route path="/checklists/transformer/edit" element={<EditCheckTransformer/>}/>

                {/* phase1 */}
              <Route path="/checklists/phase1" element={<CheckPhase1 />} />
              <Route path="/checklists/phase1/edit" element={<EditCheckPhase1/>}/>

                {/* phase2 */}
              <Route path="/checklists/phase2" element={<CheckPhase2 />} />
              <Route path="/checklists/phase2/edit" element={<EditCheckPhase2/>}/>

                {/* generator */}
              <Route path="/checklists/generator" element={<Checkgenerator />} />  
              <Route path="/checklists/generator/edit" element={<EditCheckgenerator/>}/>

            </Routes>
          </div>
        </div>
    </div>
  );
}

export default AuthenticatedApp;