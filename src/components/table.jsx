import { useNavigate } from "react-router-dom";

function Table(props) {
    const nevigate = useNavigate();

    const findExpDate = (date) => {
        let signIndate = new Date(date); 
        signIndate.setDate(signIndate.getDate() + 365); 
        let year = signIndate.getFullYear();
        let month = (signIndate.getMonth() + 1).toString().padStart(2, '0'); 
        let day = signIndate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const findExpStatus = (date) => {
        let expDate = new Date(date); 
        expDate.setDate(expDate.getDate() + 365); 
        const currentDate = new Date();
        return expDate > currentDate ? 'ไม่หมดอายุ' : 'หมดอายุ';
    };

    const editmemberHandle = (data) => {
        nevigate('/members/editmember/' + data.member_id , { state : data } )
    }
    
    return (
        <table className="table rounded bg-gray-300">
        <thead>
        <tr>
            <th>Name</th> 
            <th>Card ID</th>
            <th>team</th> 
            <th>company</th> 
            <th>Exp</th> 
            <th>status</th>
        </tr>
        </thead> 
        <tbody>
            {   
                props.data.map((item , index)=>{
                    return(
                        <tr key={index}  className="bg-white hover hover:cursor-pointer" onClick={() => {(editmemberHandle(item))}}>
                            <td>{item.first_name} {item.last_name}</td> 
                            <td>{item.card_id.slice(-4)}</td> 
                            <td>{item.teamname}</td> 
                            <td>{item.comp_name}</td> 
                            <td>{findExpDate(item.date_of_sign)}</td> 
                            <td className={findExpStatus(item.date_of_sign)==='หมดอายุ' ? 'text-red-600':'text-green-700'}>{findExpStatus(item.date_of_sign)}</td>
                        </tr>
                    );
                })
            }
        </tbody> 
    </table>
    );
}

export default Table