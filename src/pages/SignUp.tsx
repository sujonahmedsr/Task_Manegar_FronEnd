/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Link, useNavigate } from "react-router-dom";
import { CgGoogleTasks } from "react-icons/cg";
import { useRegistrationMutation } from "@/Redux/Features/Auth/AuthApi";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string({ required_error: "Name is required." }),
    email: z.string({ required_error: "Email is required." }),
    password: z.string({ required_error: "Password is required." })
});

const SignUp = () => {
    const navigate = useNavigate()
    const [registration] = useRegistrationMutation()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    // const [selectedFile, setSelectedFile] = useState(null); // Stores the selected image


    // const handleFileChange = (event: any) => {
    //     const file = event.target.files[0]; // Get the selected file
    //     if (file) {
    //       setSelectedFile(file); // Store the file in state
    //     }
    //   };
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Registration Ongoin...")

        const registerData = {
            name: data?.name,
            email: data?.email,
            password: data?.password
        }

        const formData = new FormData()
        formData.append("data", JSON.stringify(registerData))
        // formData.append('files', selectedFile?.name);

        console.log(Object.entries(formData));
        console.log(registerData);


        try {
            const res = await registration(formData);
            console.log(res);

            if (res?.error) {
                toast.error((res?.error as any)?.data?.message, { id: toastId })
            } else {
                navigate('/login')
                toast.success("Registration Ok... Login In now....", { id: toastId })
            }
        } catch (error) {
            toast.error("Something Went Wrong...", { id: toastId })
        }

    }



    return (
        <div className="p-4 h-[100vh] grid place-items-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 max-w-md mx-auto p-10 border w-full">
                    <div className="text-center space-y-3">
                        <Link to={'/'} className="flex items-center flex-col font-bold text-lg"><CgGoogleTasks className="text-3xl text-red-500" /><p>Dot<span className="text-red-500">Task</span></p></Link>
                        <p>Already Have Account? <Link to={'/login'} className="text-red-500 font-semibold hover:underline">Login</Link></p>
                    </div>
                    {/* <input
                        type="file"
                        accept="image/*" // Restrict file input to images only
                        onChange={handleFileChange} // Capture the file
                    /> */}
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
                    <Button type="submit" className="w-full">Sing Up</Button>
                </form>
            </Form>
        </div>
    )
};

export default SignUp;