import React, { useState } from 'react'
import { Student } from '../../services/student'
import { AddStudentProps } from '../types/Type'
//import css from './AddCard.module.scss'

const AddCard = ({ callback }: AddStudentProps) => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [id, setId] = useState('')
    const [city, setCity] = useState('')
    const addCards = () => {
        const student = new Student(fname, lname, id, city)
        callback(student);
    }

    return (
        <div className=''>
            <input value={fname} onChange={e => { setFname(e.target.value); }} type="text" placeholder='First Name' />
            <input value={lname} onChange={e => { setLname(e.target.value); }} type="text" placeholder='Last Name' />
            <input value={id} onChange={e => { setId(e.target.value) }} type="text" placeholder='Id (optional)' />
            <input value={city} onChange={e => { setCity(e.target.value); }} type="text" placeholder='City' />
            <button onClick={addCards} className='btn btn-primary'>Add</button>
        </div>
    )
}

export default AddCard