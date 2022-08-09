import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/useUseAuth";

const RequireAuth = ({ allowedRoles }) => {
    const {state} = useAuth();
    const location = useLocation();
    return (
        state.isLoggedIn?<Outlet/>
        : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;