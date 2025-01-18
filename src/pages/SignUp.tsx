import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod"
import { PasswordInput } from "@/components/ui/password-input";
import { Link } from "react-router-dom";
import { CgGoogleTasks } from "react-icons/cg";

const formSchema = z.object({
    name: z.string({ required_error: "Name is required." }),
    email: z.string({ required_error: "Email is required." }),
    password: z.string({ required_error: "Password is required." })
});

const SignUp = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('hello ok');

        console.log(data);
    }

    return (
        <div className="p-4 h-[100vh] grid place-items-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 max-w-md mx-auto p-10 border w-full">
                <div className="text-center space-y-3">
                    <Link to={'/'} className="flex items-center flex-col font-bold text-lg"><CgGoogleTasks className="text-3xl text-red-500" /><p>Dot<span className="text-red-500">Task</span></p></Link>
                    <p>Already Have Account? <Link to={'/login'} className="text-red-500 font-semibold hover:underline">Login</Link></p>
                </div>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field, fieldState: { error } }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} value={field.value || ''}/>
                                </FormControl>
                                {
                                    error && <p className="text-red-500">{error.message}</p>
                                }
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email",
                            },
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} value={field.value || ''}/>
                                </FormControl>
                                {
                                    error && <p className="text-red-500">{error.message}</p>
                                }
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field, fieldState: { error } }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="Passowrd" {...field} value={field.value || ''}/>
                                </FormControl>
                                {
                                    error && <p className="text-red-500">{error.message}</p>
                                }
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">Sing Up</Button>
                </form>
            </Form>
        </div>
    )
};

export default SignUp;