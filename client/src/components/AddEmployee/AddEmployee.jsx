import React, { useRef, useState } from 'react';
import '../../App.css';
import axios from 'axios';

export const AddEmployee = () => {
  const [message, setMessage] = useState('')
    const name = useRef();
    const age = useRef();
    const country = useRef();
    const position = useRef();
    const wage = useRef();

    const addEmployee = () => {
      const newEmployee = {
        name: name.current.value,
        age: age.current.value,
        country: country.current.value,
        position: position.current.value,
        wage: wage.current.value,
      }
      console.log(newEmployee)
        axios.post('http://localhost:3001/create', newEmployee)
        .then((res)=> {
          setMessage(res.data.message)
        })
       // window.location.reload();
    }
    
  return (
    <div className='employee-form' >
        <div className="information">
        <label htmlFor="">Name</label>
        <input type="text" ref={name} />
        <label htmlFor="">Age</label>
        <input type="number" ref={age} />
        <label htmlFor="">Country</label>
        <input type="text" ref={country} />
        <label htmlFor="">Position</label>
        <input type="text" ref={position} />
        <label htmlFor="">Wage (yr)</label>
        <input type="number"  ref={wage} />
        <div className="message-container">
         {message && <span className="message">{message}</span>}
        </div>
        <button onClick={addEmployee}>Add Employee</button>
        </div>
    </div>
  )
}
