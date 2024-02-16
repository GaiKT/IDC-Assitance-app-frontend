function SideBar() {
    return(
        <ul className="menu bg-white max-w-72 w-full h-full absolute top-0 left-0">
            <div className="h-20 flex justify-center items-center">
                <p className="text-2xl">Logo</p>
            </div>
            <li><a className="font-bold">
                Dashborad
            </a></li>
            <li>
                <details open>
                <summary className="font-bold">
                    Systems
                </summary>
                <ul>
                    <li><a href="/members">Members (AUP)</a></li>
                    <li><a>FaceRacks</a></li>
                    <li><a>Lan Setup</a></li>
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
                                <li><a>Checklist roomteamp</a></li>
                                <li><a>Checklist FDC</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                Every Days
                            </summary>
                            <ul>
                                <li><a>Checklist transformer</a></li>
                                <li><a>Checklist Phase1</a></li>
                                <li><a>Checklist Phase2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                Weekly
                            </summary>
                            <ul>
                                <li><a>Checklist Generator</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                Mouthly
                            </summary>
                            <ul>
                                <li><a>Checklist Emergency</a></li>
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