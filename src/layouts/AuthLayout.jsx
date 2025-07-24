import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#f3f3f3]">
            <header className="py-3 mx-auto w-11/12">
                <Navbar/>
            </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;