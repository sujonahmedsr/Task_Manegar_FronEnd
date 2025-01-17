import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const MainLayouts = () => {
    return (
        <div className="space-y-3">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayouts;