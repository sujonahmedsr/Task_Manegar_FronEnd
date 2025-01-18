
import { Outlet } from "react-router-dom";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const MainLayouts = () => {
    return (
        <div>
            <div className="grid grid-cols-12">
                <LeftSide />
                <div className="col-span-8 flex flex-col justify-between">
                    <Outlet />
                </div>
                <RightSide />
            </div>
        </div>
    );
};

export default MainLayouts;