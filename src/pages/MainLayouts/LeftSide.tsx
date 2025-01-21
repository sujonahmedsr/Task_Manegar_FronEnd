import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CgGoogleTasks } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { SiGoogletasks } from "react-icons/si";
import { MdOutlinePending } from "react-icons/md";
import { toast } from "sonner";
import { useLogoutMutation } from "@/Redux/Features/Auth/AuthApi";
import { logout, useCurrentUser } from "@/Redux/Features/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";

const LeftSide = () => {
    const [logoutDb] = useLogoutMutation()
    const user = useAppSelector(useCurrentUser)
    const dispatch = useAppDispatch()
    const handleLogOut = async () => {
        const toastId = toast.loading("Loading...")
        dispatch(logout())
        await logoutDb(undefined)
        toast.success("Log Out...", { id: toastId })
        window.location.reload()
    }
    return (
        <div className="col-span-1 sticky top-0 left-0 flex flex-col items-center justify-between px-5 py-3 h-[90vh]">
            <div className="space-y-5 flex flex-col items-center">
                <Link to={'/'} className="flex items-center flex-col font-bold text-lg"><CgGoogleTasks className="text-3xl text-red-500" /><p>Do<span className="text-red-500">Task</span></p></Link>
                <div className="flex items-center flex-col gap-6 text-2xl transition-all text-gray-500">
                    <button title="All Task" className="hover:text-red-500 duration-300"><FaTasks /></button>
                    <button title="Complete Task" className="hover:text-red-500 duratio n-300"><SiGoogletasks /></button>
                    <button title="Pending Task" className="hover:text-red-500 duration-300"><MdOutlinePending /></button>
                </div>
            </div>
            {
                user ? <Button onClick={handleLogOut}>Log Out</Button> : <Link to={'/login'}><Button>Log In</Button></Link>
            }
        </div>
    );
};

export default LeftSide;