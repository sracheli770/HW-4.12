import React, { useState } from 'react';
import './App.css';
import AddCard from './components/add-card/AddCard';
import StudentList from './components/students-list/StudentList';
import { Student } from './services/student';
import list from './services/students-list'


function App() {
  const [cards, setCards] = useState(list);
  const addStudent = (student: Student) => { setCards(cards => [student, ...cards]) }

  return (
    <div className="App">
      <AddCard callback={addStudent} />
      <StudentList callback={addStudent} list={cards} />
    </div>
  );
}

export default App;
