import Student from '../../services/student'

export type StudentCardProps = {
    callback: (student: Student) => void;
} & Student;

export type StudentListProps = {
    callback: (student: Student) => void;
    list: Student[];
}

export type AddStudentProps = {
    callback: (student: Student) => void;
}