import { Outlet } from "react-router-dom";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const MainLayouts = () => {
    return (
        <div className="min-h-screen flex flex-col md:grid md:grid-cols-12">
            {/* Left Sidebar: ছোট স্ক্রিনে hidden, medium থেকে visible */}
            <div className="hidden md:block md:col-span-1 bg-gray-100">
                <LeftSide />
            </div>

            {/* Main Content */}
            <div className="col-span-8 flex flex-col">
                <Outlet />
            </div>

            {/* Right Sidebar: ছোট স্ক্রিনে hidden, large থেকে visible */}
            <div className="hidden lg:block md:col-span-3 w-full bg-gray-100">
                <RightSide />
            </div>
        </div>
    );
};

export default MainLayouts;