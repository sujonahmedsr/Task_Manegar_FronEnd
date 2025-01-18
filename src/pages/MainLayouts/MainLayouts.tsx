import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { CgGoogleTasks } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { SiGoogletasks } from "react-icons/si";
import { MdOutlinePending } from "react-icons/md";
import dummyImg from "../../assets/dummy.png"
import { Chart } from "../Chart";
const MainLayouts = () => {
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-1  sticky top-0 left-0 h-[100vh] flex flex-col items-center justify-between px-5 py-3">
                    <div className="space-y-5 flex flex-col items-center">
                        <Link to={'/'} className="flex items-center flex-col font-bold text-lg"><CgGoogleTasks className="text-3xl text-red-500" /><p>Dot<span className="text-red-500">Task</span></p></Link>
                        <div className="flex items-center flex-col gap-6 text-2xl transition-all text-gray-500">
                            <button title="All Task" className="hover:text-red-500 duration-300"><FaTasks /></button>
                            <button title="Complete Task" className="hover:text-red-500 duratio n-300"><SiGoogletasks /></button>
                            <button title="Pending Task" className="hover:text-red-500 duration-300"><MdOutlinePending /></button>
                        </div>
                    </div>
                    <Button>Log Out</Button>
                </div>
                <div className="col-span-8 flex flex-col justify-between">
                    <Outlet />
                </div>
                <div className="col-span-3  sticky top-0 left-0 h-[100vh] flex flex-col p-5 items-center gap-4">
                    <div>
                        <Button>Add Task</Button>
                    </div>
                    <div className="flex items-center gap-4 p-5 hover:bg-gray-200 duration-300 w-full">
                        <img className="w-16 h-16 rounded-full" src={dummyImg} alt="dummyImg" />
                        <div>
                            <h1 className="text-lg font-semibold">Hello,</h1>
                            <h1 className="text-xl font-bold">Sujon Ahmed</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="font-semibold">
                            <p className="text-gray-500">Total Tasks:</p>
                            <p className="pl-4 relative flex gap-2">
                                <span className="absolute h-[70%] w-[0.2rem] left-1 top-1/2 translate-y-[-50%] bg-purple-500 rounded"></span>
                                <span className="font-medium text-3xl">10</span>
                            </p>
                        </div>
                        <div className="font-semibold">
                            <p className="text-gray-500">In Progress:</p>
                            <p className="pl-4 relative flex gap-2">
                                <span className="absolute h-[70%] w-[0.2rem] left-1 top-1/2 translate-y-[-50%] bg-purple-500 rounded"></span>
                                <span className="font-medium text-3xl">5</span>
                            </p>
                        </div>
                        <div className="font-semibold">
                            <p className="text-gray-500">Open Tasks:</p>
                            <p className="pl-4 relative flex gap-2">
                                <span className="absolute h-[70%] w-[0.2rem] left-1 top-1/2 translate-y-[-50%] bg-purple-500 rounded"></span>
                                <span className="font-medium text-3xl">5</span>
                            </p>
                        </div>
                        <div className="font-semibold">
                            <p className="text-gray-500">Completed:</p>
                            <p className="pl-4 relative flex gap-2">
                                <span className="absolute h-[70%] w-[0.2rem] left-1 top-1/2 translate-y-[-50%] bg-purple-500 rounded"></span>
                                <span className="font-medium text-3xl">0</span>
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3 w-full">
                        <p>Activity</p>
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayouts;