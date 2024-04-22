import Box from '@mui/material/Box';
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
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
      <LecturerBar />

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '430px' }}>
        <Routes>
            <Route path="/" element={<LecturerHomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/lecturer/home" element={<LecturerHomePage />} />
            <Route path="/lecturer/dashboard" element={<LecturerDashBoard />} />
            <Route path="/lecturer/courses" element={<Courses />} />
            <Route path="/lecturer/course-register" element={<CourseRegister />} />
            <Route path="/lecturer/infor" element={<LecturerInfor />} />
        </Routes>
      </Box>

      <LecturerFooter />
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Custom --> */}
      <script src="assets/js/custom.js"></script>
    </Box>
  )
}

export default Lecturer;