import React, { useEffect, useState } from 'react';
import Footer from '../footer';
import TapChecklist from '../utils/TapChecklist';
import axios from "axios"
import { useAuth } from '../../contexts/authentication'

export default function ChecklistsDashboard() {
    const tabs = ['roomtemp', 'fdc', 'transformer', 'phase1', 'phase2', 'generator',];
    const [activeTab, setActiveTab] = useState(0);
    const [data ,setData] = useState([]);
    const [strDate , setStrDate] = useState('');
    const [endDate , setEndDate] = useState(`${new Date()}`);
    const {apiUrl} = useAuth()
    const [page , setPage] = useState(1)

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const getChecklist = async () => {
        let result = await axios.get(`${apiUrl}/checklists/${tabs[activeTab]}?str=${strDate}&end=${endDate}&page=${page}`)
        setData(result.data)
    };

    useEffect(()=>{
        getChecklist()
    },[activeTab , strDate , endDate, page])

    return (
        <>
            <nav role="tablist" className="tabs tabs-lifted max-md:tabs-xs">
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
                            <TapChecklist nameCheckList={tab} data={data} setStrDate={setStrDate} setEndDate={setEndDate}/>
                            <div className='flex justify-end'>
                                <div className="join">
                                    <button className="join-item btn bg-white max-md:btn-sm" onClick={()=>{page > 1 ? setPage(page - 1) : setPage(page)}} disabled={page === 1}>«</button>
                                    <button className="join-item btn bg-white max-md:btn-sm" onClick={getChecklist}>Page {page}</button>
                                    <button className="join-item btn bg-white max-md:btn-sm" onClick={()=>{setPage(page + 1)}} disabled={ data.length < 5}>»</button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </nav>
            <Footer />
        </>
    );
}
