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
import UserProfileChart from "../UserProfileChart";
import { toast } from "sonner";
import { useAddTaskMutation } from "@/Redux/Features/Task/taskApi";
import { useAppSelector } from "@/Redux/hooks";
import { useCurrentUser } from "@/Redux/Features/Auth/AuthSlice";
const formSchema = z.object({
    title: z.string({ required_error: "Title is required." }),
    description: z.string({ required_error: "Description is required." }),
    // priority: z.string({ required_error: "Priority is required." }),
    // dueDate: z.date({ required_error: "Due Date is required." }),
    // isCompleted: z.boolean().optional(),
});
const RightSide = () => {
    const user = useAppSelector(useCurrentUser)
    const [addTask] = useAddTaskMutation()
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    const { reset } = form

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const loading = toast.loading("Creating....")

        const taskData = {
            ...data,
            user: user?.email
        }

        try {
            const res = await addTask(taskData)
            console.log(res);

            if (res?.error) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                toast.error((res?.error as any)?.data?.message
                    , { id: loading })
            } else {
                reset()
                toast.success('Added task', { id: loading })
                setOpen(!open)
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Something Went Wrong.!", { id: loading })
        }
    }
    return (
        <div className="col-span-3  sticky top-0 left-0 flex flex-col p-5 items-center gap-4 h-[90vh]">
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
                                name="title"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Title" {...field} value={field.value || ''} />
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

                            {/* <FormField
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
                                                    <SelectValue placeholder="Select a Priority" />
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
                            /> */}

                            {/* <FormField
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
                            /> */}

                            {/* <FormField
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
                            /> */}

                            <Button type="submit" className="w-full">Create Task</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>


            {/* user profile and charts here  */}
            <UserProfileChart />

        </div>
    );
};

export default RightSide;