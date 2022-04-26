import {useState} from "react";
import Employee from "./model/Employee";
import Input from "./bootstrap/Input";
import CheckBox from "./bootstrap/CheckBox";
import SelectBox from "./bootstrap/SelectBox";
import Image from "./bootstrap/Image";

export default function HrApp(props) {
    const [employee, setEmployee] = useState(new Employee());
    const [employees, setEmployees] = useState([]);
    const DEPARTMENTS = ["IT", "Sales", "Finance", "HR"];

    //region action methods
    function hireEmployee() {

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
        </div>
    );
};