import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;