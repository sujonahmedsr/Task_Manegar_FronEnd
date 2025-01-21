import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}: { children: ReactNode }) => {
    const token = useAppSelector(useCurrentToken);
    if (!token) {
        return <Navigate to="/login" replace={true} />;
      }
    return children;
};

export default ProtectedRoute;