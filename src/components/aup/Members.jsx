import Footer from "../footer";
import Table from "../table";
import axios from "axios";
import { useState,useEffect } from "react";

function Members () {
    const [members,setMembers] = useState([]) 
    const [keyword,setKeyword] = useState('')

    const getmembers = async () => {
        try {
            const result = await axios.get('http://localhost:4000/aup?keyword=' + keyword)
            setMembers(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getmembers()
    },[keyword])

    return(
        <>
            <div className="flex justify-between">
                <header className="text-4xl mb-5"> Members Management </header> 
                <a href="/members/addmember" className="btn btn-success text-white">New member</a>
            </div>
            <div className="w-full bg-white shadow-lg p-10 rounded-lg">
                <div className="flex justify-between text-xl">
                    <span>Members Table</span>
                    <label> search :
                        <input 
                        type="text" 
                        placeholder="Enter your text" 
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