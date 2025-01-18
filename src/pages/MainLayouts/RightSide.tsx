import dummyImg from "../../assets/dummy.png"
import { Chart } from "../Chart";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod"
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
const formSchema = z.object({
    name: z.string({ required_error: "Name is required." }),
    description: z.string({ required_error: "Description is required." }),
    priority: z.string({ required_error: "Priority is required." }),
    dueDate: z.date({ required_error: "Due Date is required." }),
    isCompleted: z.boolean().optional(),
});
const RightSide = () => {
    const date = new Date()
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    const {reset} = form
    
    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        console.log(data);

        reset()
        setOpen(!open)
    }
    return (
        <div className="col-span-3  sticky top-0 left-0 h-[100vh] flex flex-col p-5 items-center gap-4">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button onClick={() => setOpen(!open)}>Add Task</Button>
                </DialogTrigger>
                <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
                    <DialogTitle>Add Task</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-md mx-auto w-full">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} value={field.value || ''} />
                                        </FormControl>
                                        {
                                            error && <p className="text-red-500">{error.message}</p>
                                        }
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                id="description-dialog" // Set the ID to match `aria-describedby`
                                                placeholder="Enter description"
                                                {...field}
                                                value={field.value || ''}
                                            />
                                        </FormControl>
                                        {
                                            error && <p className="text-red-500">{error.message}</p>
                                        }
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="priority"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Priority</FormLabel>
                                        <FormControl>
                                            <Select
                                                value={field.value || ''} // Use field.value for controlled behavior
                                                onValueChange={field.onChange} // Update form state
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a fruit" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="Low">Low</SelectItem>
                                                        <SelectItem value="Medium">Medium</SelectItem>
                                                        <SelectItem value="High">High</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        {
                                            error && <p className="text-red-500">{error.message}</p>
                                        }
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="isCompleted"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Is Completed</FormLabel>
                                        <FormControl>
                                            <Select
                                                value={field.value !== null ? String(field.value) : undefined} // Use field.value for controlled behavior
                                                onValueChange={(value) => field.onChange(value === "true")} // Update form state
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a fruit" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value={"true"}>Yes</SelectItem>
                                                        <SelectItem value={"false"}>No</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        {
                                            error && <p className="text-red-500">{error.message}</p>
                                        }
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="dueDate"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Due Date</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button

                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                        )}
                                                    >
                                                        <CalendarIcon />
                                                        {field.value
                                                            ? format(field.value, "PPP")
                                                            : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date || field.value || undefined}
                                                        onSelect={(selectedDate) => field.onChange(selectedDate)}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        {
                                            error && <p className="text-red-500">{error.message}</p>
                                        }
                                    </FormItem>
                                )}
                            />





                            <Button type="submit" className="w-full">Create Task</Button>
                        </form>
                    </Form>
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