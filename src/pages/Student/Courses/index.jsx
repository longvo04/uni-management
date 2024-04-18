import React, { useState } from 'react';
import Box from '@mui/material/Box';
import '../../../assets/css/style.css';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [searchTermCourse, setSearchTermCourse] = useState('');
  const [searchTermClass, setSearchTermClass] = useState('');
  const [searchTermStudent, setSearchTermStudent] = useState('');

  const classData = {
    'GT1': [
      { name: 'GT1 2023', size: '40', lecturer: 'Nguyễn Văn A' },
      { name: 'GT1 2024', size: '48', lecturer: 'Nguyễn Văn B' },
    ],
    'GT2': [
      { name: 'GT2 2023', size: '42', lecturer: 'Nguyễn Văn C' },
      { name: 'GT2 2024', size: '50', lecturer: 'Nguyễn Văn D' },
    ],
    'VL1': [
      { name: 'VL1 2023', size: '38', lecturer: 'Nguyễn Văn A' },
      { name: 'VL1 2024', size: '45', lecturer: 'Nguyễn Văn A' },
    ],
    'HDC': [
      { name: 'HDC 2023', size: '35', lecturer: 'Nguyễn Văn A' },
      { name: 'HDC 2024', size: '42', lecturer: 'Nguyễn Văn A' },
    ],
    'LTNC': [
      { name: 'LTNC 2023', size: '30', lecturer: 'Nguyễn Văn A' },
      { name: 'LTNC 2024', size: '36', lecturer: 'Nguyễn Văn A' },
    ],
  };

  const studentData = {
    'GT1 2023': [
      { name: 'Nguyễn Văn a', mssv: '2200000', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn b', mssv: '2200001', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn c', mssv: '2200002', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn d', mssv: '2200003', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
    ],
    'GT1 2024': [
      { name: 'Nguyễn Văn e', mssv: '2200004', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn f', mssv: '2200005', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn g', mssv: '2200006', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
    ],
    // ... Add more classes here
  };

  const filterClassData = (className, searchTerm) => {
    return classData[className].filter(detail => detail.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const filterStudentData = (className, searchTerm) => {
    return studentData[className].filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.mssv.includes(searchTerm)
    );
  };

  const calculateFinalGrade = (student) => {
    const quizGrade = student.quiz * 0.05;
    const bonusGrade = student.bonus * 0.05;
    const homeworkGrade = student.homework * 0.2;
    const midTermGrade = student.midTerm * 0.3;
    const finalTermGrade = student.finalTerm * 0.4;

    return (quizGrade + bonusGrade + homeworkGrade + midTermGrade + finalTermGrade).toFixed(2);
  };

  const displayClassDetails = (className) => {
    setSelectedCourse(className);
  };

  const displayStudentDetails = (classDetail) => {
    setSelectedClass(classDetail);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setSearchTermCourse('');
    setSearchTermClass('');
    setSelectedClass(null);
    setSearchTermStudent('');
  };

  const handleBackToClass = () => {
    setSelectedClass(null);
    setSearchTermStudent('');
  };

  return (
    <Box>
      <div className="margin-top"></div>

      <main className="container-lg py-5">
        {/* Search Course */}
        {selectedCourse === null && (
          <Box className="search-container">
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              className="form-control"
              value={searchTermCourse}
              onChange={(e) => setSearchTermCourse(e.target.value)}
            />
            <ul>
              {Object.keys(classData).filter(course => course.toLowerCase().includes(searchTermCourse.toLowerCase())).map((course) => (
                <li key={course} onClick={() => displayClassDetails(course)}>
                  {course}
                </li>
              ))}
            </ul>
          </Box>
        )}

        {/* Display Class Details */}
        {selectedCourse !== null && selectedClass === null && (
          <Box className="search-container">
            <input
              type="text"
              placeholder="Tìm kiếm lớp học..."
              className="form-control"
              value={searchTermClass}
              onChange={(e) => setSearchTermClass(e.target.value)}
            />
            <h4>Khóa học: {selectedCourse}</h4>
            <ul>
              {filterClassData(selectedCourse, searchTermClass).map((detail) => (
                <li
                  key={detail.name}
                  onClick={() => displayStudentDetails(detail.name)}
                >
                  {`${detail.name} - Sĩ số: ${detail.size} - Giảng viên: ${detail.lecturer}`}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary" onClick={handleBackToCourses}>Trở về</button>
          </Box>
        )}

        {/* Display Student Details */}
        {selectedClass !== null && (
          <Box className="search-container">
            <input
              type="text"
              placeholder="Tìm kiếm sinh viên..."
              className="form-control"
              value={searchTermStudent}
              onChange={(e) => setSearchTermStudent(e.target.value)}
            />
            <h4>Danh sách học sinh - {selectedClass}</h4>
            <ul>
              {filterStudentData(selectedClass, searchTermStudent).map((student) => (
                <li key={student.mssv}>
                  {`${student.name}, ${student.mssv}, Điểm tổng kết: ${calculateFinalGrade(student)}`}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary" onClick={handleBackToClass}>Trở về</button>
          </Box>
        )}
      </main>

      <div className="margin-bottom"></div>
    </Box>
  );
};

export default Courses;
