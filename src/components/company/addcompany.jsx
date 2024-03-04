import Footer from "../footer";
import Addcompanyform from "../form/addcompanyform";

function AddCompany () {
    return(
        <>
            <header className="text-4xl mb-5"> รายละเอียดบริษัท </header> 
            <div className="w-full bg-white shadow-lg p-10 rounded-lg">
                <div>
                    <span className="text-xl">ข้อมูลบริษัท</span>
                    <Addcompanyform />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AddCompany