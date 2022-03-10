import React, { useRef, useState } from 'react';
import '../../App.css';

export const AddEmployee = () => {
    const name = useRef();
    const age = useRef();
    const country = useRef();
    const position = useRef();
    const wage = useRef();

    const displayInfo = () => {
        console.log()
    }
    
  return (
    <div className='employee-form' >
        <div className="information">
        <label htmlFor="">Name</label>
        <input type="text" ref={name} />
        <label htmlFor="">Age</label>
        <input type="text" ref={age} />
        <label htmlFor="">Country</label>
        <input type="text" ref={country} />
        <label htmlFor="">Position</label>
        <input type="text" ref={position} />
        <label htmlFor="">Wage (yr)</label>
        <input type="number"  ref={wage} />
        <button type="submit">Add Employee</button>
        </div>
    </div>
  )
}
