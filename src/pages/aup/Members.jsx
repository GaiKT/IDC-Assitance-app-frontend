import NavBar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import Footer from "../../components/footer";
import Table from "../../components/table";

function Members () {
    return(
        <>
            <NavBar/>
            <SideBar/>
            <div className="ml-72 p-10 bg-gray-100"> 
            <header className="text-4xl mb-5"> Members (AUP) </header>
            <div className="w-full bg-white shadow-lg p-10 rounded-lg">
                <div className="flex justify-between ">
                    <span className="text-xl">Tablename</span>
                    <label> search :
                        <input type="text" placeholder="Enter your text" className="text-center border rounded mb-5 ml-2" />
                    </label>
                </div>
            <div className="overflow-x-auto">
                <Table/>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Members