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
import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod"
import { PasswordInput } from "@/components/ui/password-input";
import { Link } from "react-router-dom";
import { CgGoogleTasks } from "react-icons/cg";
import { useLoginMutation } from "@/Redux/Features/Auth/AuthApi";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { setUser } from "@/Redux/Features/Auth/AuthSlice";
import { useAppDispatch } from "@/Redux/hooks";

const formSchema = z.object({
    email: z.string({ required_error: "Email is required." }),
    password: z.string({ required_error: "Password is required." })
});

const Login = () => {
    const dispatch = useAppDispatch()
    const [loginUser] = useLoginMutation()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Login...")
        
        try {
            const res = await loginUser({
                email: data?.email,
                password: data?.password
            });
            console.log(res);

            if (res?.error) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                toast.error((res?.error as any)?.data?.message
                    , { id: toastId })
            } else {
                const user = jwtDecode(res?.data?.data?.token);
                dispatch(setUser({user, token: res?.data?.data?.token}))
                toast.success("Login Succesfull", { id: toastId })
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Something Went Wrong.!", { id: toastId })
        }
    }

    return (
        <div className="p-4 h-[100vh] grid place-items-center ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 max-w-md mx-auto p-10 border w-full">
                    <div className="text-center space-y-3">
                        <Link to={'/'} className="flex items-center flex-col font-bold text-lg"><CgGoogleTasks className="text-3xl text-red-500" /><p>Dot<span className="text-red-500">Task</span></p></Link>
                        <p>Create an Account? <Link to={'/signup'} className="text-red-500 font-semibold hover:underline">Sign Up</Link></p>
                    </div>
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
                                    <Input placeholder="Email" {...field} value={field.value || ''} />
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
                                    <PasswordInput placeholder="Passowrd" {...field} value={field.value || ''} />
                                </FormControl>
                                {
                                    error && <p className="text-red-500">{error.message}</p>
                                }
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">Log In</Button>
                </form>
            </Form>
        </div>
    )
};

export default Login;