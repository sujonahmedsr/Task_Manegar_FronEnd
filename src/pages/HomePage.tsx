import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Task from "./Task";
import { Input } from "@/components/ui/input";

const HomePage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between bg-white px-5 py-3 sticky top-0">
                <h1>All Task</h1>
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

            <div className="p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 bg-gray-200 rounded-s-2xl rounded-e-2xl">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    );
};

export default HomePage;