import Calculation from "@/utils/Calculation";

const TaskActivity = () => {
    const {openTask, completeTask, inCompleteTask, totalTask} = Calculation()

    return (
        < div className="grid grid-cols-2 gap-4 w-full" >
            <div className="font-semibold">
                <p className="text-gray-500">Total Tasks:</p>
                <p className="pl-4 relative flex gap-2">
                    <span className="absolute h-[70%] w-[0.2rem] left-1 top-1/2 translate-y-[-50%] bg-purple-500 rounded"></span>
                    <span className="font-medium text-3xl">{totalTask ? totalTask : 0}</span>
                </p>
            </div>
            <div className="font-semibold">
                <p className="text-gray-500">In Progress:</p>
                <p className="pl-4 relative flex gap-2">
                    <span className="absolute h-[70%] w-[0.2rem] left-1 top-1/2 translate-y-[-50%] bg-purple-500 rounded"></span>
                    <span className="font-medium text-3xl">{inCompleteTask ? inCompleteTask : 0}</span>
                </p>
            </div>
            <div className="font-semibold">
                <p className="text-gray-500">Open Tasks:</p>
                <p className="pl-4 relative flex gap-2">
                    <span className="absolute h-[70%] w-[0.2rem] left-1 top-1/2 translate-y-[-50%] bg-purple-500 rounded"></span>
                    <span className="font-medium text-3xl">{openTask ? openTask : 0}</span>
                </p>
            </div>
            <div className="font-semibold">
                <p className="text-gray-500">Completed:</p>
                <p className="pl-4 relative flex gap-2">
                    <span className="absolute h-[70%] w-[0.2rem] left-1 top-1/2 translate-y-[-50%] bg-purple-500 rounded"></span>
                    <span className="font-medium text-3xl">{completeTask ? completeTask : 0}</span>
                </p>
            </div>
        </div >
    );
};

export default TaskActivity;