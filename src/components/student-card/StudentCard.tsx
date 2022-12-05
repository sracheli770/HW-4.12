import React from 'react'
import { StudentCardProps } from '../types/Type'
import css from './StudentCard.module.scss'

const StudentCard = ({ firstName, lastName, city, id }: StudentCardProps) => {
    return (
        <div className={css.card}>
            <h1 className={css.name}>{`Name: ${lastName} ${firstName}`}</h1>
            <h3 className={css.id}>{`Id: ${id}`}</h3>
            <h3 className={css.city}>{`City: ${city}`}</h3>
        </div>
    )
}

export default StudentCard