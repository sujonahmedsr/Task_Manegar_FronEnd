import { Link, useLocation } from "react-router-dom";
import { CgGoogleTasks } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { SiGoogletasks } from "react-icons/si";
import { MdOutlinePending } from "react-icons/md";

const LeftSide = () => {
    const route = useLocation()

    return (
        <div className="sticky top-0 left-0 flex flex-col items-center justify-between px-5 py-3 h-[100vh] border-r">
            <div className="space-y-5 flex flex-col items-center">
                <Link to={'/'} className="flex items-center flex-col font-bold text-lg">
                    <CgGoogleTasks className="text-3xl text-red-500" />
                    <p>Do<span className="text-red-500">Task</span></p>
                </Link>
                <div className="flex flex-col items-center gap-6 text-2xl text-gray-500">
                    <Link to={'/'}>
                    <button
                        title="All Task"
                        className={`hover:text-red-500 duration-300 ${route.pathname === "/" ? "text-red-500" : ""}`}
                    >
                        <FaTasks />
                    </button>
                    </Link>
                    <Link to={'/completed'}>
                    <button
                        title="Complete Task"
                        className={`hover:text-red-500 duration-300 ${route.pathname === "/completed" ? "text-red-500" : ""}`}
                    >
                        <SiGoogletasks />
                    </button>
                    </Link>
                    <Link to={'/pending'}>
                        <button
                            title="Pending Task"
                            className={`hover:text-red-500 duration-300 ${route.pathname === "/pending" ? "text-red-500" : ""}`}
                        >
                            <MdOutlinePending />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;
