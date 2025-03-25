import App from "@/App";
import Complete from "@/pages/Complete";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import SingInSignupProtectRoute from "@/pages/MainLayouts/SingInSignupProtectRoute";
import Pending from "@/pages/Pending";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/completed",
                element: <Complete />
            },
            {
                path: "/pending",
                element: <Pending />
            },
        ],
    },
    {
        path: "/login",
        element: <SingInSignupProtectRoute>
            <Login />
        </SingInSignupProtectRoute>
    },
    {
        path: "/signup",
        element: <SingInSignupProtectRoute>
            <SignUp />
        </SingInSignupProtectRoute>
    },
])

export default router