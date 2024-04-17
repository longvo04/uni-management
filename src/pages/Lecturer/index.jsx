import { Box } from '@mui/material';
import LecturerBar from '../../components/LecturerBar';
import LecturerHomePage from './HomePage';
import LecturerDashBoard from './DashBoard';
import Courses from './Courses';
import CourseRegister from './CourseRegister';
import LecturerInfor from './LecturerInfor';
import LecturerFooter from '../../components/LecturerFooter';
import { Routes, Route, Navigate } from "react-router-dom";

const Lecturer = () => {
  return (
    <Box>
      <LecturerBar />
      <Routes>
        <Route path="/" >
          <Route path="/home" element={<LecturerHomePage />} />
          <Route path="/dashboard" element={<LecturerDashBoard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-register" element={<CourseRegister />} />
          <Route path="/LecturerInfor" element={<LecturerInfor />} />
        </Route>
      </Routes>
      <LecturerFooter />
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Custom --> */}
      <script src="assets/js/custom.js"></script>
    </Box>
  )
}

export default Lecturer;
