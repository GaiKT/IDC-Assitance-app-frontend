import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard , faGear , faListCheck , faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authentication";

function SideBar() {

    const {state} = useAuth();
    console.log(state)

    return(
        <div className="md:w-80 z-10">

            {/* respornsive */}
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content absolute top-6 left-5 cursor-pointer">
                    <label htmlFor="my-drawer" 
                    className="drawer-button cursor-pointer text-2xl">
                        <FontAwesomeIcon icon={faBars}/>
                    </label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-white">
                        <div className="h-20 flex justify-center items-center">
                            <h1 className="text-center font-extrabold text-2xl mb-2">IDC Assistance</h1>
                        </div>
                        <li>
                            <details open>
                            <summary className="font-bold">
                            <FontAwesomeIcon icon={faDashboard}/> Dashboard
                            </summary>
                            <ul>
                                <li><Link to="/">Main Dashboard</Link></li>
                                <li><Link to="/checklists/dasborad">Checklists Dashboard</Link></li>
                            </ul>
                            </details>
                        </li>
                        <li>
                            <details open>
                            <summary className="font-bold">
                            <FontAwesomeIcon icon={faGear}/> Systems
                            </summary>
                            <ul>
                                <li><Link to="/members">Members management</Link></li>
                                <li><Link to="/company">Companies management</Link></li>
                                {
                                    state?.user?.level === "admin" &&
                                    <li>
                                    <details>
                                    <summary>
                                    Admin Panel
                                    </summary>
                                    <ul>
                                        <li><Link to="/admin">Users management</Link></li>
                                        <li><Link to="/register">User register</Link></li>
                                    </ul>
                                    </details>
                                    </li>
                                }
                            </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                            <summary className="font-bold">
                            <FontAwesomeIcon icon={faListCheck}/>  Checklists
                            </summary>
                            <ul>
                                <li>
                                    <details>
                                        <summary>
                                            Every 2 Hour
                                        </summary>
                                        <ul>
                                            <li><Link to="/checklists/roomtemp">Checklist Roomteamp</Link></li>
                                            <li><Link to="/checklists/fdc">Checklist FDC</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>
                                            Every Days
                                        </summary>
                                        <ul>
                                            <li><Link to="/checklists/Transformer">Checklist Transformer</Link></li>
                                            <li><Link to="/checklists/phase1">Checklist Phase1</Link></li>
                                            <li><Link to="/checklists/phase2" >Checklist Phase2</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>
                                            Weekly
                                        </summary>
                                        <ul>
                                            <li><Link to="/checklists/generator">Checklist Generator</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>
                                            Mouthly
                                        </summary>
                                        <ul>
                                            <li><Link>Checklist Emergency</Link></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>


            <ul className="menu bg-white max-w-72 w-full sticky top-0 left-0 max-md:hidden">
                <div className="h-20 flex justify-center items-center">
                <h1 className="text-center font-extrabold text-2xl mb-2">IDC Assistance</h1>
                </div>
                <li>
                    <details open>
                    <summary className="font-bold">
                       <FontAwesomeIcon icon={faDashboard}/> Dashborad
                    </summary>
                    <ul>
                        <li><Link to="/">Main Dashborad</Link></li>
                        <li><Link to="/checklists/dasborad">Checklists Dashborad</Link></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details open>
                    <summary className="font-bold">
                        <FontAwesomeIcon icon={faGear}/> Systems
                    </summary>
                    <ul>
                        <li><Link to="/members">Members menagement</Link></li>
                        <li><Link to="/company">Companies menagement</Link></li>
                        {
                            state?.user?.level === "admin" &&
                            <li>
                                <details>
                                <summary>
                                    Admin Panel
                                </summary>
                                <ul>
                                    <li><Link to="/admin">Users management</Link></li>
                                    <li><Link to="/register">User register</Link></li>
                                </ul>
                                </details>
                            </li>
                        }
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary className="font-bold">
                    <FontAwesomeIcon icon={faListCheck}/>  Checklists
                    </summary>
                    <ul>
                        <li>
                            <details>
                                <summary>
                                    Every 2 Hour
                                </summary>
                                <ul>
                                    <li><Link to="/checklists/roomtemp">Checklist Roomteamp</Link></li>
                                    <li><Link to="/checklists/fdc">Checklist FDC</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Every Days
                                </summary>
                                <ul>
                                    <li><Link to="/checklists/Transformer">Checklist Transformer</Link></li>
                                    <li><Link to="/checklists/phase1">Checklist Phase1</Link></li>
                                    <li><Link to="/checklists/phase2" >Checklist Phase2</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Weekly
                                </summary>
                                <ul>
                                    <li><Link to="/checklists/generator">Checklist Generator</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Mouthly
                                </summary>
                                <ul>
                                    <li><Link>Checklist Emergency</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                    </details>
                </li>
            </ul>

        </div>

    );
}
export default SideBar;