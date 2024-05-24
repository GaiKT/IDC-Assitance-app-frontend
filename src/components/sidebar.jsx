import { Link } from "react-router-dom";

function SideBar() {
    return(
        <div className="w-80">
            <ul className="menu bg-white max-w-72 w-full sticky top-0 left-0">
                <div className="h-20 flex justify-center items-center">
                <h1 className="text-center font-extrabold text-2xl mb-2">IDC Assistance</h1>
                </div>
                <li>
                    <details open>
                    <summary className="font-bold">
                        Dashborad
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
                        Systems
                    </summary>
                    <ul>
                        <li><Link to="/members">Members menagement</Link></li>
                        <li><Link to="/company">Companies menagement</Link></li>
                        {/* <li><Link>FaceRacks</Link></li>
                        <li><Link>Lan Setup</Link></li> */}
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary className="font-bold">
                        Checklists
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