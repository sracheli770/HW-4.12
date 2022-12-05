import React from 'react'
import StudentCard from '../student-card/StudentCard'
import { StudentListProps } from '../types/Type'
import css from './StudentList.module.scss'

const StudentList = ({ list, callback }: StudentListProps) => {
    return (
        <div className={css.container}>
            <h1>Students List</h1>
            {list.map((card) =>
                <StudentCard callback={callback} key={card.id} {...card} />
            )}
        </div>
    )
}

export default StudentList