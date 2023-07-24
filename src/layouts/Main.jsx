import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer";
import NavMenu from "../Pages/Share/NavMenu.Jsx";


const Main = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;