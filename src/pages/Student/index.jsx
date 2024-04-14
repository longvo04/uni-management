import { Box } from '@mui/material';
import StudentBar from '../../components/StudentBar';
import StudentHomePage from './HomePage';
import StudentDashBoard from './DashBoard';
import Courses from './Courses';
import CourseRegister from './CourseRegister';
import StudentFooter from '../../components/StudentFooter';

import { Routes, Route, Navigate } from "react-router-dom";

const Student = () => {
  return (
    <Box>
      <StudentBar />
      <Routes>
        <Route path="/" >
          <Route path="/home" element={<StudentHomePage />} />
          <Route path="/dashboard" element={<StudentDashBoard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-register" element={<CourseRegister />} />
        </Route>
      </Routes>
      <StudentFooter />
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Custom --> */}
      <script src="assets/js/custom.js"></script>
    </Box>
  )
}


export default Student;
