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

const Task = () => {
    const date = new Date()
        const [open, setOpen] = useState(false)
        const form = useForm(
            { defaultValues:
                {name: "Sujon",
                description: "hiji",
                priority: "Low",
                dueDate: null,
                isCompleted: true}
            }
        )
        console.log(form);
        
        
        const onSubmit: SubmitHandler<FieldValues> = (data) => {
    
            console.log(data);
    
            setOpen(!open)
        }
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
                        
                        <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <FaEdit onClick={() => setOpen(!open)} className="text-blue-600"/>
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

                            <Button type="submit" className="w-full">Update Task</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
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