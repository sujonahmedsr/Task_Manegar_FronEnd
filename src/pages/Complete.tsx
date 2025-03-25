import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Task from "./Task";
import { Input } from "@/components/ui/input";
import { useAllTaskQuery } from "@/Redux/Features/Task/taskApi";
import AddTask from "./AddTask";
import { useState } from "react";

export type Ttask = {
    _id: string,
    title: string,
    description: string,
    dueDate: Date,
    status: "active" | "inActive",
    priority: 'low' | 'medium' | 'high',
    isCompleted: boolean,
    createdAt: Date;
}

const Complete = () => {
    const [priority, setPriority] = useState("all");
    const [search, setSearch] = useState('')
    
    // priority ও status (isCompleted: true) যুক্ত করে API কল
    const { data: allTasks, isLoading, isError } = useAllTaskQuery(priority);

    let content;

    if (isLoading) {
        content = (
            <div className="flex items-center justify-between gap-5">
                <div className="bg-gray-200 p-4 flex flex-col justify-center rounded-lg h-52 gap-5 w-full cursor-pointer"></div>
            </div>
        );
    }

    if (isError) {
        content = <div className="text-red-500">Something went wrong...</div>;
    }

    if (allTasks?.data?.length > 0) {
        content = allTasks?.data
            ?.filter((item: Ttask) => item.isCompleted) // ✅ শুধু isCompleted: true ফিল্টার করা হচ্ছে
            ?.filter((item: Ttask) => 
                search.toLowerCase() === '' || 
                item?.title.toLowerCase().includes(search) || 
                item?.description.toLowerCase().includes(search)
            )
            ?.map((task: Ttask) => <Task key={task._id} task={task} />);
    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between bg-white p-5 sticky top-0 border-b">
                <Input onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="w-1/2" />
                <div>
                    <Tabs defaultValue="all" onValueChange={(value) => setPriority(value)}>
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="low">Low</TabsTrigger>
                            <TabsTrigger value="medium">Medium</TabsTrigger>
                            <TabsTrigger value="high">High</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            <div className="p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  rounded-s-2xl rounded-e-2xl">
                {content}
                <AddTask />
            </div>
        </div>
    );
};

export default Complete;
