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
          <Route path="/" element={<Student />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/admin/lecturer" element={<Lecturer />} />
          <Route path="/admin/student" element={<Student />} />
          <Route path="/admin/courses" element={<Courses />} />
      </Routes>
      {/* </Box> */}
    </div>
  );
}

export default Admin;
