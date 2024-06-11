import Footer from "../footer";
import AddmembersForm from "../form/addmemberform";

function AddMembers () {
    return(
        <>
            <header className="text-4xl mb-5"> เพิ่มสมาชิกใหม่ </header> 
            <div className="w-full bg-white shadow-lg p-10 rounded-lg">
                <div>
                    <span className="text-lg">กรอกรายระเอียดสมาชิก AUP</span>
                    < AddmembersForm />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AddMembers