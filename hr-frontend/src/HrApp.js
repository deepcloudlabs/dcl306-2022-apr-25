import {useState} from "react";
import Employee from "./model/Employee";
import Input from "./bootstrap/Input";
import CheckBox from "./bootstrap/CheckBox";
import SelectBox from "./bootstrap/SelectBox";
import Image from "./bootstrap/Image";

export default function HrApp(props) {
    // employee : state (react) -> Model (MVC) -> Resource (REST Architecture -> RESTful Service)
    const [employee, setEmployee] = useState(new Employee());
    const [employees, setEmployees] = useState([]);
    const DEPARTMENTS = ["IT", "Sales", "Finance", "HR"];

    //region action methods
    function hireEmployee() {
        fetch('http://localhost:4001/employees',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(employee)
        }).then( response => response.json() )
            .then( console.table );
    }

    function fireEmployee() {

    }

    function handleInputChange(event) {
        const {name, value} = event.target;
        let newEmployee = {...employee};
        if (name === 'fulltime') {
            newEmployee[name] = !newEmployee[name];
        } else {
            newEmployee[name] = value;
        }
        setEmployee(newEmployee);
    }

    function handlePhotoChange(photo) {
        setEmployee({...employee, photo});
    }

    function updateEmployee() {

    }

    function findEmployeeByIdentity() {

    }

    function retrieveEmployees() {
        fetch('http://localhost:4001/employees',{
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        }).then( response => response.json() )
          .then( emps => setEmployees(emps) );
    }

    //endregion

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Employee</h4>
                </div>
                <div className="card-body">
                    <Input id="identityNo"
                           handleChange={handleInputChange}
                           value={employee.identityNo}
                           label="IDENTITY NO"></Input>
                    <Input id="fullname"
                           handleChange={handleInputChange}
                           value={employee.fullname}
                           label="FULL NAME"></Input>
                    <Input id="iban"
                           handleChange={handleInputChange}
                           value={employee.iban}
                           label="IBAN"></Input>
                    <Input id="salary"
                           handleChange={handleInputChange}
                           value={employee.salary}
                           label="SALARY"></Input>
                    <Input id="birthYear"
                           handleChange={handleInputChange}
                           value={employee.birthYear}
                           label="BIRTH YEAR"></Input>
                    <CheckBox id="fulltime"
                              handleChange={handleInputChange}
                              value={employee.fulltime}
                              label="FULL-TIME?"></CheckBox>
                    <SelectBox id="department"
                               options={DEPARTMENTS}
                               handleChange={handleInputChange}
                               value={employee.department}
                               label="DEPARTMENT?"></SelectBox>
                    <Image id="photo"
                           label="PHOTO"
                           handleFileChange={handlePhotoChange}
                           value={employee.photo}></Image>
                    <div className="input-group">
                        <button className="btn btn-success"
                                onClick={hireEmployee}>Hire Employee
                        </button>
                        <button className="btn btn-danger"
                                onClick={fireEmployee}>Fire Employee
                        </button>
                        <button className="btn btn-warning"
                                onClick={updateEmployee}>Update Employee
                        </button>
                        <button className="btn btn-danger"
                                onClick={findEmployeeByIdentity}>Find Employee
                        </button>
                        <button className="btn btn-warning"
                                onClick={retrieveEmployees}>Retrieve Employees
                        </button>
                    </div>
                </div>
            </div>
            <p></p>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Employees</h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-hover table-striped table-responsive">
                        <thead>
                         <tr>
                             <th>No</th>
                             <th>Photo</th>
                             <th>Identity No</th>
                             <th>Full Name</th>
                             <th>IBAN</th>
                             <th>Salary</th>
                             <th>Birth Year</th>
                             <th>Full-time?</th>
                             <th>Department</th>
                             <th>Operations</th>
                         </tr>
                        </thead>
                        <tbody>
                        {
                            employees.map( (emp,idx) =>
                               <tr key={emp.identityNo}>
                                   <td>{idx+1}</td>
                                   <td><img className="img-thumbnail" style={{width: "64px"}} src={emp.photo} alt=""></img></td>
                                   <td>{emp.identityNo}</td>
                                   <td>{emp.fullname}</td>
                                   <td>{emp.iban}</td>
                                   <td>{emp.salary}</td>
                                   <td>{emp.birthYear}</td>
                                   <td>{emp.fulltime ? 'FULL-TIME' : 'PART-TIME'}</td>
                                   <td>{emp.department}</td>
                                   <td><button className="btn btn-danger">Fire Employee</button></td>
                               </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};