import { Chart } from "./Chart";
import dummyImg from "../assets/dummy.png"

const UserProfileChart = () => {
    return (
        <div className="space-y-5 w-full">
            {/* user profile  */}
            <div className="flex items-center gap-4 p-5 hover:bg-gray-200 duration-300 w-full">
                <img className="w-16 h-16 rounded-full" src={dummyImg} alt="dummyImg" />
                <div>
                    <h1 className="text-lg font-semibold">Hello,</h1>
                    <h1 className="text-xl font-bold">Sujon Ahmed</h1>
                </div>
            </div>

            {/* task progress  */}
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

            {/* show task in chart  */}
            <div className="space-y-1 w-full">
                <p className="text-lg font-semibold">Activity</p>
                <Chart />
            </div>
        </div>
    );
};

export default UserProfileChart;