import dummyImg from "../../assets/dummy.png"
import { Button } from "@/components/ui/button";
import { Chart } from "../Chart";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const RightSide = () => {
    return (
        <div className="col-span-3  sticky top-0 left-0 h-[100vh] flex flex-col p-5 items-center gap-4">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
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
    );
};

export default RightSide;