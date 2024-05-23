import React, { useEffect, useState } from 'react';
import Footer from '../footer';
import TapChecklist from '../utils/TapChecklist';
import axios from "axios"

export default function ChecklistsDashboard() {
    const tabs = ['roomtemp', 'fdc', 'transformer', 'phase1', 'phase2', 'generator',];
    const [activeTab, setActiveTab] = useState(0);
    const [data ,setData] = useState([]);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const getChecklist = async () => {
        let result = await axios.get('http://localhost:4000/checklists/reccord?checklistName=' + tabs[activeTab])
        setData(result.data.data)
    };

    useEffect(()=>{
        getChecklist()
    },[activeTab])

    return (
        <>
            <div>
                <header className="text-4xl mb-5">Checklists Dashboard</header>
            </div>
            <nav role="tablist" className="tabs tabs-lifted">
                {tabs.map((tab, index) => (
                    <React.Fragment key={index}>
                        <input
                            type="radio"
                            role="tab"
                            className="tab"
                            aria-label={tab[0].toUpperCase() + tab.slice(1)}
                            checked={activeTab === index}
                            onChange={() => handleTabChange(index)}
                        />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <TapChecklist nameCheckList={tab} data={data} />
                        </div>
                    </React.Fragment>
                ))}
            </nav>
            <Footer />
        </>
    );
}
