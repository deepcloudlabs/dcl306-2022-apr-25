import {useState} from "react";
import Employee from "./model/Employee";

export default function HrApp(props){
    const [employee, setEmployee] = useState(new Employee());
    const [employees, setEmployees] = useState([]);

    //region action methods
    function hireEmployee() {

    }
    function fireEmployee() {

    }
    function handleInputChange(e) {

    }
    function handlePhotoChange(e) {

    }

    function updateEmployee() {

    }

    function findEmployeeByIdentity() {

    }

    function retrieveEmployees() {

    }
    //endregion

    return(
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
                       handleChange={handleInputChange}
                       value={employee.department}
                       label="DEPARTMENT?"></SelectBox>
               <Image id="photo"
                      label="PHOTO"
                      handleFileChange={handlePhotoChange}
                      value={employee.photo}></Image>
               <div className="input-group">
                   <button className="btn btn-success"
                           onClick={hireEmployee}>Hire Employee</button>
                   <button className="btn btn-danger"
                           onClick={fireEmployee}>Fire Employee</button>
                   <button className="btn btn-warning"
                           onClick={updateEmployee}>Update Employee</button>
                   <button className="btn btn-danger"
                           onClick={findEmployeeByIdentity}>Find Employee</button>
                   <button className="btn btn-warning"
                           onClick={retrieveEmployees}>Retrieve Employees</button>
               </div>
            </div>
        </div>
      </div>
    );
};