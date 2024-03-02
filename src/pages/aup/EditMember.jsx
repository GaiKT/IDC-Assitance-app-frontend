import NavBar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import Footer from "../../components/footer";
import EditmembersForm from "../../components/form/Editmember";
import { useLocation } from "react-router-dom";

function EditMembers () {
    const location = useLocation();
    return(
        <>
            <NavBar/>
            <SideBar/>
            <div className="ml-72 p-10 bg-gray-100"> 
                <header className="text-4xl mb-5"> รายระเอียดสมาชิก </header> 
            <div className="w-full bg-white shadow-lg p-10 rounded-lg">
                <div>
                    <span className="text-xl">ข้อมูลสมาชิก (AUP)</span>
                    < EditmembersForm data={location.state} />
                </div>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default EditMembers