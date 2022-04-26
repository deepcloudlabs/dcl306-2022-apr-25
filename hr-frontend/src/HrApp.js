import {useState} from "react";
import Employee from "./model/Employee";

export default function HrApp(props){
    const [employee, setEmployee] = useState(new Employee());
    const [employees, setEmployees] = useState([]);

    return(
      <div className="container">
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Employee</h4>
            </div>
            <div className="card-body"></div>
        </div>
      </div>
    );
};