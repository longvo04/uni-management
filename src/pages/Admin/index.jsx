import AdminBar from '../../components/AdminBar';
import Student from './Student';
import Lecturer from './Lecturer';
import Courses from './Courses';
import AddStudent from './Student/AddStudent';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


const Admin = () => {
  return (
    <div>
      <AdminBar/>
      <Routes>
        <Route path="/" >
          <Route path="/lecturer" element={<Lecturer />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student/add" element={<AddStudent />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Admin;
