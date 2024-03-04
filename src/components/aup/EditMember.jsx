import Footer from "../footer";
import EditmembersForm from "../form/Editmember";
import { useLocation } from "react-router-dom";

function EditMembers () {
    const location = useLocation();
    return(
        <>
            <header className="text-4xl mb-5"> รายระเอียดสมาชิก </header> 
            <div className="w-full bg-white shadow-lg p-10 rounded-lg">
                <div>
                    <span className="text-xl">ข้อมูลสมาชิก (AUP)</span>
                    < EditmembersForm data={location.state} />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default EditMembers