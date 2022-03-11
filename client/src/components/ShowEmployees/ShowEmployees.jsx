import axios from 'axios';
import React, { useState } from 'react';
import '../../App.css';

export const ShowEmployees = () => {
    const [employeeList, setEmployeeList] = useState([]);

    const getEmployees = () => {
        axios.get('http://localhost:3001/employees')
        .then((res) => {
            setEmployeeList(res.data.result)
        })
    }
  return (
    <div className='employees' >
        <h2 className="employee-form-header">Employee Database</h2>
       <button onClick={getEmployees} className="show-employees">Show Employees</button> 
       <div className="employee-list">
        {employeeList && employeeList.map((employee, index) => (
             <table className="employee-item" key={index}>
                 <thead>
                     <th className="table-header">{employee.name}</th>
                     <th className="table-header">{employee.position}</th>
                     <th className="table-header">Country</th>
                 </thead>
                 <tbody className="second-row">
                     <td className="age">Id#: 000{employee.id}</td>
                     <td className="age">Age: {employee.age}</td>
                     <td className="country">{employee.country}</td>
                 </tbody>
                 <tfoot >
                     <tr className="third-row">
                         <td colSpan={"3"}>Annual Salary: ${employee.wage.toLocaleString()}</td>
                     </tr>
                     
                 </tfoot>
            </table>
        ))}
        </div>
    </div>
  )
}
