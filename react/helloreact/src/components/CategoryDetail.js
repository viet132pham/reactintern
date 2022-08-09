import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useUserAuth from "../context/useUseAuth";


function CategoryDetail(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const { state, setState } = useUserAuth();

  const editEmployee = (id) => {
    navigate(`/add-employee/${id}`);
  }

  const addEmployee = () => {
    navigate("/add-employee/_add");
  }

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
    <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
      <h2 className="text-center">Category Item</h2>
      <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className="btn btn-primary" style={{ width: "200px" }} onClick={() => addEmployee()}> Add Item</button>
        <button className="loginBtn" onClick={() => handleLogout()}>Logout</button>

      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">

          <thead>
            <tr>
              <th> Item image</th>
              <th> Item name</th>
              <th> Item description</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr>
                <td>
                  <img src={location.state.img} className="card-img-top" alt="" />
                </td>
                <td> {location.state.name} </td>
                <td> {location.state.desc} </td>
                <td>
                  <button onClick={() => editEmployee(location.state.id)} className="btn btn-info">Update</button>
                  <button style={{ marginLeft: "10px" }} className="btn btn-danger">Delete</button>
                  <button style={{ marginLeft: "10px" }} className="btn btn-info">View</button>
                </td>
              </tr>
            }
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default CategoryDetail;
