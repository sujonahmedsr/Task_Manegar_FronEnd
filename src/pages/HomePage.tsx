/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Task from "./Task";
import { Input } from "@/components/ui/input";
import { useAllTaskQuery } from "@/Redux/Features/Task/taskApi";

export type Ttask = {
    title: string,
    description: string,
    dueDate: Date,
    status: "active" | "inActive",
    priority: 'low' | 'medium' | 'high',
    isCompleted: boolean,
    createdAt: Date;
}

const HomePage = () => {
    const { data: allTasks, isLoading, isError } = useAllTaskQuery(undefined)

    let content;

    if (isLoading) {
        content = <div className="p-4 flex items-center justify-between gap-5">
            <div className="bg-gray-100 border p-4 flex flex-col justify-between rounded-lg w-72 h-48"></div>
            <div className="bg-gray-100 border p-4 flex flex-col justify-between rounded-lg w-72 h-48"></div>
            <div className="bg-gray-100 border p-4 flex flex-col justify-between rounded-lg w-72 h-48"></div>
        </div>
    }
    if(isError){
        content = <div className="text-red-500">Somethin went wrong...</div>
    }
    if (allTasks?.data?.length > 0) {
        
        content = <div className="p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  rounded-s-2xl rounded-e-2xl">
            {
                allTasks?.data?.map((task: Ttask, item: any) => <Task key={item} task={task} />)
            }
        </div>
    }

    return (
        <div className="flex flex-col border">
            <div className="flex items-center justify-between bg-white p-5 sticky top-0">
                <Input placeholder="Search..." className="w-1/2" />
                <div>
                    <Tabs defaultValue="account">
                        <TabsList>
                            <TabsTrigger value="All">All</TabsTrigger>
                            <TabsTrigger value="Low">Low</TabsTrigger>
                            <TabsTrigger value="Medium">Medium</TabsTrigger>
                            <TabsTrigger value="High">High</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>
            {content}
        </div>
    );
};

export default HomePage;