import { Box } from '@mui/material';
import LecturerBar from '../../components/LecturerBar';
import LecturerHomepage from './HomePage';
import LecturerDashboard from './DashBoard';
import Courses from './Courses';
import UserFooter from '../../components/UserFooter';

import { Routes, Route, Navigate } from "react-router-dom";

const Lecturer = () => {
  return (
    <Box>
      <LecturerBar />
      <Routes>
        <Route path="/" >
          <Route path="/home" element={<LecturerHomepage />} />
          <Route path="/dashboard" element={<LecturerDashboard />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
      <UserFooter />
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Custom --> */}
      <script src="assets/js/custom.js"></script>
    </Box>
  )
}

export default Lecturer;
