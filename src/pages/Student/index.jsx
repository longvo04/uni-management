import { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import StudentBar from '../../components/StudentBar';
import StudentHomePage from './HomePage';
import StudentDashBoard from './DashBoard';
import Courses from './Courses';
import CourseRegister from './CourseRegister';
import UserFooter from '../../components/UserFooter';
import StudentInfor from './StudentInfor';
import { Routes, Route, Navigate } from "react-router-dom";
import Progress from './Progress/Progress';
import { db } from '../../firebase/client'
import { doc, getDoc } from "firebase/firestore";

const Student = () => {
  const uid = JSON.parse(localStorage.getItem('uid'))

  const fetchData = async () => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
  }

  useEffect(()=>{
    fetchData()
  },[])

  console.log(uid)

  return (
    <Box>
      <StudentBar />
      <Routes>
        <Route path="/" element={<StudentHomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/student/home" element={<StudentHomePage />} />
        <Route path="/student/dashboard" element={<StudentDashBoard />} />
        <Route path="/student/courses" element={<Courses />} />
        <Route path="/student/course-register" element={<CourseRegister />} />
        <Route path="/student/infor" element={<StudentInfor />} />
        <Route path="/student/progress" element={<Progress />} />
      </Routes>
      <UserFooter />
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Custom --> */}
      <script src="assets/js/custom.js"></script>
    </Box>
  )
}


export default Student;
