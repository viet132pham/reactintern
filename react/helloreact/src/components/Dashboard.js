import React from "react";
import "../styles/Dashboard.css";
import { useLocation , useNavigate  } from "react-router-dom";
import  useUserAuth  from "../context/useUseAuth";
function Dashboard(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const {state,setState} = useUserAuth();
    console.log(`bat dau vao logout`+state);

    const handleDashboard = () => {
        navigate("/Home" );
    }

    const handleLogout = () => {
        setState({
            isLoggedIn: false,
            isLoginPending: false,
            loginError: null
        });
        console.log(`sau khi bam btn logout`+state);
        sessionStorage.clear();
        navigate("/" );
    }

    return (
        <div className="container__wrap-1">
            <span className="dashboard"> Chao {location.state.userName} !</span>
            <button className="loginBtn" onClick={() => handleDashboard()}>Home</button>
            <button className="loginBtn" onClick={() => handleLogout()}>Logout</button>
        </div>
    );
}

export default Dashboard;