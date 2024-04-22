import AdminBar from '../../components/AdminBar';
import Student from './Student';
import Lecturer from './Lecturer';
import Courses from './Courses';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Box from '@mui/material/Box';

const Admin = () => {
  return (
    <div>
      <AdminBar />
      {/* <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingX: '20px'
      }}> */}
      <Routes>
        <Route path="/" >
          <Route path="/lecturer" element={<Lecturer />} />
          <Route path="/student" element={<Student />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
      {/* </Box> */}
    </div>
  );
}

export default Admin;
