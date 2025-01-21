import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const SingInSignupProtectRoute = ({children}: { children: ReactNode }) => {
    const token = useAppSelector(useCurrentToken);
    if (token) {
        return <Navigate to="/" replace={true} />;
      }
    return children;
};

export default SingInSignupProtectRoute;