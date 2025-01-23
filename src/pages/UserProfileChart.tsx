import { Chart } from "./Chart";
import dummyImg from "../assets/dummy.png"
import { useLogoutMutation, useUserQuery } from "@/Redux/Features/Auth/AuthApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { logout, useCurrentUser } from "@/Redux/Features/Auth/AuthSlice";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import TaskActivity from "./TaskActivity";

const UserProfileChart = () => {
    const user = useAppSelector(useCurrentUser)
    const [logoutDb] = useLogoutMutation()
    const userInfo = useAppSelector(useCurrentUser)
    const dispatch = useAppDispatch()

    const handleLogOut = async () => {
        const toastId = toast.loading("Loading...")
        dispatch(logout())
        await logoutDb(undefined)
        console.log('okay');

        toast.success("Log Out...", { id: toastId })
        // window.location.reload()
    }

    const { data: userData, isLoading, isError } = useUserQuery(userInfo?.userId)

    if (isLoading) {
        <div><p>Loading...</p></div>
    } else if (isError) {
        <div><p>Something Went Wrong</p></div>
    }

    return (
        <div className="space-y-10 w-full">
            {/* user profile  */}
            <div>
                <div className="flex items-center gap-4 p-5 hover:bg-gray-200 duration-300 w-full">
                    <img className="w-16 h-16 rounded-full" src={dummyImg} alt="dummyImg" />
                    <div>
                        <h1 className="text-base font-semibold">Hello,</h1>
                        <h1 className="text-xl font-bold">{userData?.data?.name}</h1>
                    </div>
                </div>

                {
                    user ? <Button className="w-full" onClick={handleLogOut}>Log Out</Button> : <Link className="w-full" to={'/login'}><Button>Log In</Button></Link>
                }

            </div>

            <TaskActivity />

            {/* show task in chart  */}
            <div className="space-y-1 w-full">
                <Chart />
            </div>

        </div>
    );
};

export default UserProfileChart;