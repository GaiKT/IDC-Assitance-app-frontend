import { Link } from "react-router-dom";

function SideBar() {
    
    return(
        <ul className="menu bg-white max-w-72 w-full h-full absolute top-0 left-0">
            <div className="h-20 flex justify-center items-center">
            <h1 className="text-center font-extrabold text-2xl mb-2">IDC Assistance</h1>
            </div>
            <li>
                <Link className="font-bold">
                    Dashborad
                </Link>
            </li>
            <li>
                <details open>
                <summary className="font-bold">
                    Systems
                </summary>
                <ul>
                    <li><Link to="/members">Members (AUP)</Link></li>
                    <li><Link>FaceRacks</Link></li>
                    <li><Link>Lan Setup</Link></li>
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
                                <li><Link>Checklist roomteamp</Link></li>
                                <li><Link>Checklist FDC</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                Every Days
                            </summary>
                            <ul>
                                <li><Link>Checklist transformer</Link></li>
                                <li><Link>Checklist Phase1</Link></li>
                                <li><Link>Checklist Phase2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                Weekly
                            </summary>
                            <ul>
                                <li><Link>Checklist Generator</Link></li>
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
    );
}
export default SideBar;