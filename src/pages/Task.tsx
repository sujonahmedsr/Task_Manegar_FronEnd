import { FaStar } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Task = () => {
    return (
        <div className="bg-white border p-4 flex flex-col justify-between rounded-lg">
            <div className="space-y-1">
                <h1 className="text-xl font-semibold">Task Title</h1>
                <p className="text-base text-gray-600">Interactively administrate market positioning expertise with value-added schemas.</p>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div>
                    <h1 className="text-base font-semibold text-rose-700">Medium</h1>
                </div>
                <div className="space-x-3 text-xl">
                    <button>
                        <FaStar className="text-gray-600"/>
                    </button>
                    <button>
                        <FaEdit className="text-blue-600"/>
                    </button>
                    <button>
                        <MdDelete className="text-red-600"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Task;