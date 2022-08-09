import React, {useEffect} from 'react'
import CategoryServices from '../service/CategoryServices';
import { useNavigate, useMatch } from 'react-router-dom';
import  useUserAuth  from "../context/useUseAuth";

function CreateEmployeeComponent(props) {
    const navigate = useNavigate();

    const {state,setState} = useUserAuth();

    const match = useMatch('/add-employee/:id');
    console.log(match.params.id);

    const obj = {
        id: match.params.id,
        maDanhMuc: '',
        ten: '',
        diaDiem: '',
        moTa: '',
        ngayTao: '',
        ngaySua: ''
    };

    // step 3
    // console.log(state.id);

    // step 4
    useEffect(() => {
        if (obj.id === '_add') {
            console.log("id bang add");
            return
        } else {
            CategoryServices.getEmployeeById(obj.id).then((res) => {
                let employee = res.data;
                obj.ten = employee.ten;
                obj.diaDiem = employee.diaDiem;
                obj.moTa = employee.moTa;
                obj.id = employee.id;
                obj.maDanhMuc = employee.maDanhMuc;
                obj.ngayTao = employee.ngayTao;
                obj.ngaySua = employee.ngaySua;
                console.log(res);
            });
        }
    });
    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { ten: obj.ten, diaDiem: obj.diaDiem, moTa: obj.moTa , id: obj.id , maDanhMuc: obj.maDanhMuc, ngayTao:obj.ngayTao, ngaySua: obj.ngaySua };
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if (obj.id === '_add') {
            CategoryServices.createEmployee(employee).then(res => {
                navigate("/Home");
            });
        } else {
            console.log(employee);
            CategoryServices.updateEmployee(employee, obj.id).then(res => {
                navigate("/Home");
            });
        }
    }
    const changeIdHandler = (event) => {
        obj.id = event.target.value ;
    }

    const changeCodeHandler = (event) => {
        obj.maDanhMuc = event.target.value ;
    }

    const changeFirstNameHandler = (event) => {
        obj.ten = event.target.value ;
    }

    const changeLastNameHandler = (event) => {
        obj.diaDiem = event.target.value ;
    }

    const changeEmailHandler = (event) => {
        obj.moTa = event.target.value ;
    };

    const cancel = () => {
        navigate("/Home");
    };

    const getTitle = () => {
        if (obj.id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    };

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
        <div>
            <br></br>
            <div className="container">
                <div className="row" style={{paddingTop: "42px"}}>
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{color: "black"}}>
                        {
                            getTitle()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Id: </label>
                                    <input placeholder="Id" name="id" className="form-control"
                                        onChange={changeIdHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Code: </label>
                                    <input placeholder="Code" name="maDanhMuc" className="form-control"
                                         onChange={changeCodeHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Ten: </label>
                                    <input placeholder="Ten" name="ten" className="form-control"
                                         onChange={changeFirstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Dia Diem: </label>
                                    <input placeholder="Dia Diem" name="diaDiem" className="form-control"
                                         onChange={changeLastNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Mo Ta: </label>
                                    <input placeholder="Mo Ta" name="moTa" className="form-control"
                                         onChange={changeEmailHandler} />
                                </div>

                                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={cancel.bind()} style={{ marginLeft: "10px" }}>Cancel</button>
                                <button className="btn btn-danger" onClick={() => handleLogout()} style={{ marginLeft: "10px" }}>Logout</button>
                                
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default CreateEmployeeComponent
