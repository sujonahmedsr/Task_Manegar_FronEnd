import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-1  sticky top-0 left-0 h-[100vh] flex flex-col items-center justify-between p-5 ">
                    <h1>col span 3</h1>
                    
                    <Button>Log Out</Button>
                </div>
                <div className="col-span-8 flex flex-col justify-between ">
                    <Outlet />
                </div>
                <div className="col-span-3  sticky top-0 left-0 h-[100vh] flex flex-col justify-between p-5">
                    <h1>col span 3</h1>
                </div>
            </div>
        </div>
    );
};

export default MainLayouts;