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

const formSchema = z.object({
    email: z.string({ required_error: "Email is required." }),
    password: z.string({ required_error: "Password is required." })
});

const Login = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('hello ok');

        console.log(data);
    }

    return (
        <div className="p-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-md mx-auto p-10 border">
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
                                    <Input placeholder="Email" {...field} />
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
                                    <PasswordInput placeholder="Passowrd" {...field} />
                                </FormControl>
                                {
                                    error && <p className="text-red-500">{error.message}</p>
                                }
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Form>
        </div>
    )
};

export default Login;