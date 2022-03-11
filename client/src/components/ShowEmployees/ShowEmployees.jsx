import axios from 'axios';
import React, { useState } from 'react';
import '../../App.css';

export const ShowEmployees = () => {
    const [employeeList, setEmployeeList] = useState([]);

    const getEmployees = () => {
        axios.get('http://localhost:3001/employees')
        .then(() => {

        })
    }
  return (
    <div className='employees' >
       <button onClick={getEmployees} className="show-employees">Show Employees</button> 
        


    </div>
  )
}
