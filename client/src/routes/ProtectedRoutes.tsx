import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { useToast } from "../providers/ToastProvider";
import { ClipLoader } from "react-spinners";

interface ProtectedRouteProps {
    redirectPath?: string;
}

const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
    redirectPath = "/login",
}) => {
    const { isAuthenticated, isLoading } = useAuth();
    const { showToast } = useToast();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[100vh]">
                <ClipLoader size={50} color={"#3f51b5"} loading={isLoading} cssOverride={{
                    borderWidth: '6px'
                }} />
            </div>
        );
    }

    if (!isAuthenticated) {
        showToast('Please log in to access the page!', 'warning', {
            vertical: 'top',
            horizontal: 'center',
        });
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;
