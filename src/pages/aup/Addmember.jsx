import NavBar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import Footer from "../../components/footer";
import AddmembersForm from "../../components/form/addmemberform";

function AddMembers () {
    return(
        <>
            <NavBar/>
            <SideBar/>
            <div className="ml-72 p-10 bg-gray-100"> 
                <header className="text-4xl mb-5"> เพิ่มสมาชิกใหม่ </header> 
            <div className="w-full bg-white shadow-lg p-10 rounded-lg">
                <div>
                    <span className="text-xl">กรอกรายระเอียดผู้สมัคร AUP</span>
                    < AddmembersForm />
                </div>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default AddMembers