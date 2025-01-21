import App from "@/App";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import SingInSignupProtectRoute from "@/pages/MainLayouts/SingInSignupProtectRoute";
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