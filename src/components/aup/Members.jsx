import Footer from "../footer";
import Table from "../table";
import axios from "axios";
import { useState,useEffect } from "react";

function Members () {
    const [members,setMembers] = useState([]) 
    const [keyword,setKeyword] = useState('')

    const getMembers = async () => {
        try {
            const result = await axios.get('http://localhost:4000/aup?keyword=' + keyword)
            setMembers(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getMembers()
    },[keyword])

    return(
        <>
            <div className="flex justify-between items-center mb-4">
                <header className="md:text-4xl"> Members Management </header> 
                <a href="/members/addmember" className="btn max-md:btn-sm btn-success text-white">New member</a>
            </div>
            <div className="w-full bg-white shadow-lg p-5 rounded-lg">
                <div className="flex justify-between md:text-xl">
                    <span>ตารางรายชื่อผู้เข้าดำเนินการ (Aup)</span>
                    <label> 
                        <input 
                        type="text" 
                        placeholder="Enter your search text" 
                        className="text-center border rounded mb-5 ml-2 text-sm p-1" 
                        onChange={(e)=>{
                            setKeyword(e.target.value)
                        }}
                        value={keyword}
                        />
                    </label>
                </div>
            <div className="overflow-x-auto">
                <Table data={members}/>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Members