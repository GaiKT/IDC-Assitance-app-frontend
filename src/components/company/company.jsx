import Footer from "../footer";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from '../../contexts/authentication'

function Companys () {
    const [Company,setCompany] = useState([]) 
    const [keyword,setKeyword] = useState('')
    const nevigate = useNavigate();
    const {apiUrl} = useAuth()

    const getCompany = async () => {
        try {
            const result = await axios.get(`${apiUrl}/company?keyword=` + keyword)
            setCompany(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const editmemberHandle = (data) => {
        nevigate('/company/editcompany/' + data.comp_id , { state : data } )
    }

    useEffect(()=>{
        getCompany()
    },[keyword])

    return (
    <>
        <div className="flex justify-between items-center mb-4">
            <header className="md:text-4xl"> Company Management </header> 
            <a href="/company/addcompany" className="btn max-md:btn-sm btn-success text-white">New Company</a>
        </div>
        <div className="w-full bg-white shadow-sm p-5 rounded-lg">
            <div className="flex justify-between text-xl">
                <span>ตารางรายชื่อบริษัท</span>
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
            <table className="table max-md:table-xs rounded bg-gray-300">
            <thead>
            <tr>
                <th>Name Thailand</th> 
                <th>Name English</th> 
                <th>Team</th>
            </tr>
            </thead> 
            <tbody>
                {   
                    Company.map((item , index)=>{
                        return(
                            <tr key={index}  className="bg-white hover hover:cursor-pointer" onClick={() => {(editmemberHandle(item))}}>
                                <td>บริษัท {item.comp_name_thai} จำกัด</td> 
                                <td>{item.comp_name_eng}</td> 
                                <td>{item.team.team_name}</td> 
                            </tr>
                        );
                    })
                }
            </tbody> 
            </table>
        </div>
        </div>
        <Footer/>
    </>
    );
}

export default Companys