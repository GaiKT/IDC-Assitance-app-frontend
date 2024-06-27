import React from 'react';
import { useNavigate } from "react-router-dom";
import { format, addYears, isAfter ,differenceInDays  } from 'date-fns';
import { th } from 'date-fns/locale';

function Table(props) {
    const navigate = useNavigate();

    const findExpStatus = (date) => {
        const expDate = addYears(new Date(date), 1); // Expiration date is one year after the date of signing
        const currentDate = new Date();
        return isAfter(expDate, currentDate) ? `${differenceInDays(expDate, currentDate)} วัน` : 'หมดอายุ';
    };

    const formatDate = (date) => {
        return format(new Date(date), 'dd MMMM yyyy', { locale: th });
    };

    const editMemberHandle = (data) => {
        navigate('/members/editmember/' + data.member_id, { state: data });
    };

    return (
        <table className="table max-md:table-xs rounded bg-gray-300">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Company (Thai)</th>
                    <th className="max-md:hidden">Company (Eng)</th>
                    <th className="max-md:hidden">Date of Sign</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item, index) => {
                        return (
                            <tr key={index} className="bg-white hover hover:cursor-pointer" onClick={() => { editMemberHandle(item) }}>
                                <td>{item.first_name} {item.last_name}</td>
                                <td>{item.company.team.team_name}</td>
                                <td>บริษัท {item.company.comp_name_thai} จำกัด</td>
                                <td className="max-md:hidden">{item.company.comp_name_eng}</td>
                                <td className="max-md:hidden">{formatDate(item.date_of_Sign)}</td>
                                <td className={findExpStatus(item.date_of_Sign) === 'หมดอายุ' ? 'text-red-600' : 'text-green-700'}>
                                    {findExpStatus(item.date_of_Sign)}
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;
