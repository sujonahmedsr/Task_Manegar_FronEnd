import { FaStar } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
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
import { toast } from "sonner";
import { Ttask } from "./HomePage";

const Task = ({ task }: { task: Ttask }) => {
    const { title, description, dueDate, isCompleted
        , priority, createdAt } = task

    const time = new Date().getTime() - new Date(createdAt).getTime();
    const day = Math.floor(time / (1000 * 60 * 60 * 24))

    const date = new Date()
    const [open, setOpen] = useState(false)
    const form = useForm(
        {
            defaultValues:
            {
                name: title,
                description: description,
                priority: priority,
                dueDate: dueDate,
                isCompleted: isCompleted
            }
        }
    )




    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const loading = toast.loading("updating...")

        console.log(data);

        toast.success('update task', { id: loading })
        setOpen(!open)
    }
    return (
        <div className="bg-gray-200 border p-4 flex flex-col justify-between rounded-lg w-72 h-48">
            <div className="space-y-1">
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-base text-gray-600">{description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-5">
                    <p className="text-base font-semibold text-gray-600">{day === 0 ? 'Today' : `${day} days ago`}  </p>
                    <h1 className="text-base font-semibold text-rose-700">{priority}</h1>
                </div>
                <div className="space-x-3 text-xl">
                    <button>
                        <FaStar className={`${isCompleted ? "text-yellow-600" : " text-gray-600"}`} />
                    </button>
                    <button>

                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <FaEdit onClick={() => setOpen(!open)} className="text-blue-600" />
                            </DialogTrigger>
                            <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
                                <DialogTitle>Update Task</DialogTitle>
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
                                                                    <SelectItem value="low">Low</SelectItem>
                                                                    <SelectItem value="medium">Medium</SelectItem>
                                                                    <SelectItem value="high">High</SelectItem>
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

                                        <Button type="submit" className="w-full">Update Task</Button>
                                    </form>
                                </Form>
                            </DialogContent>
                        </Dialog>
                    </button>
                    <button>
                        <MdDelete className="text-red-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Task;