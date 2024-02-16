import Footer from "../components/footer";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import Content from "./ContentPage";

function HomePage() {
    return (
        <>
        <NavBar/>
        <SideBar/>
        <Content/>
        <Footer/>
        </>
    );
}

export default HomePage;