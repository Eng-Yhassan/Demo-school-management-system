import React from 'react'
import DashboardPages from './components/DashboardPages'
import {Route, Routes} from "react-router-dom"
import Student from './pages/Student'
import RegisterStudent from './pages/RegisterStudent'
import UpdateStudent from './components/UpdateStudent'
import Teacher from './pages/Teacher'
import RegisterTeacher from './pages/RegisterTeacher'
import UpdateTeacher from './components/UpdateTeacher'
import Document from './pages/Document'
import AddDocument from './pages/AddDocument'

const App = () => {
  return (
    <div className=''>
      <DashboardPages/>

      <Routes>
        <Route path='/student' element={<Student/>}/>
        <Route path='/RegisterStudent' element={<RegisterStudent/>}/>
        <Route path='/updateStudent/:id' element={<UpdateStudent/>}/> 
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/RegisterTeacher' element={<RegisterTeacher/>}/>
        <Route path='/updateTeacher/:id' element={<UpdateTeacher/>}/>
        <Route path='/document' element={<Document/>}/>
        <Route path='/AddDocument' element={<AddDocument/>}/>
      </Routes>
    </div>
  )
}

export default App