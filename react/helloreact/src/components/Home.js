import React from "react";
import "../styles/Home.css";
import CategoryList from "./CategoryList";
import useUserAuth from "../context/useUseAuth";
import { useNavigate } from "react-router-dom";

function Home(props) {
    const navigate = useNavigate();

    const { state, setState } = useUserAuth();
    console.log(`bat dau vao home` + state);

    const handleLogout = () => {
        setState({
            isLoggedIn: false,
            isLoginPending: false,
            loginError: null
        });
        console.log(`sau khi bam btn logout` + state);
        sessionStorage.clear();
        navigate("/");
    }
    return (
        <div className="main">
            <div className="card border border-success shadow-0 mb-3">
                <div className="card-header bg-transparent border-success" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Header
                    <button className="loginBtn" onClick={() => handleLogout()}>Logout</button>
                </div>
                <CategoryList />
                <div className="card-footer bg-transparent border-success">Footer</div>
            </div>
        </div>
    );
}

export default Home;