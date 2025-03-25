/* eslint-disable @typescript-eslint/no-explicit-any */
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

const HomePage = () => {
    const [priority, setPriority] = useState("all");
    const [searh, setSearch] = useState('')
    const { data: allTasks, isLoading, isError } = useAllTaskQuery(priority)

    let content;

    if (isLoading) {
        content = <div className="flex items-center justify-between gap-5">
            <div className="bg-gray-200 p-4 flex flex-col justify-center rounded-lg h-52 gap-5 w-full cursor-pointer"></div>
        </div>
    }
    if (isError) {
        content = <div className="text-red-500">Somethin went wrong...</div>
    }
    if (allTasks?.data?.length > 0) {

        content = allTasks?.
        data?.
        filter((item: any) => {
            return searh.toLowerCase() === '' ? item : item?.title.toLowerCase().includes(searh) || item?.description.toLowerCase().includes(searh)
        })?.
        map((task: Ttask, item: any) => <Task key={item} task={task} />)
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

export default HomePage;