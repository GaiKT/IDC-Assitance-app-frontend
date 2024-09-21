import Footer from "../footer";
import Editcompanyform from "../form/Editcompanyform";
import { useLocation } from "react-router-dom";

function EditCompany () {
    const location = useLocation();
    return(
        <>
            <header className="text-4xl mb-5"> รายระเอียดบริษัท </header> 
            <div className="w-full bg-white shadow-sm p-10 rounded-lg">
                <div>
                    <span className="text-xl">ข้อมูลบริษัท</span>
                    < Editcompanyform data={location.state} />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default EditCompany