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
    <Box sx={{ width: '100%', minHeight: '400px', backgroundColor: '#efefefef' }}>
      <Box sx={{ height: '80px' }}></Box>
      {/* Display Class Details */}
      {selectedClass === null && (
        <Box className="search-container" sx={{ backgroundColor: 'white' }}>
          <input
            id="searchInput"
            type="text"
            placeholder="Tìm kiếm lớp học..."
            className="form-control"
            value={searchTermClass}
            onChange={(e) => setSearchTermClass(e.target.value)}
          />
          <h4>Giảng viên: {classData['LTNC'][0].lecturer}</h4>
          <ul id="courseList">
            {filterClassData('LTNC', searchTermClass).map((detail) => (
              <li
                key={detail.name}
                onClick={() => displayStudentDetails(detail.name)}
              >
                {`${detail.name} - Sĩ số: ${detail.size}`}
              </li>
            ))}
          </ul>
        </Box>
      )}

      {/* Display Student Details */}
      {selectedClass !== null && selectedStudent === null && (
        <Box className="search-container" sx={{ backgroundColor: 'white' }}>
          <input
            id="searchInput"
            type="text"
            placeholder="Tìm kiếm sinh viên..."
            className="form-control"
            value={searchTermStudent}
            onChange={(e) => setSearchTermStudent(e.target.value)}
          />
          <h4>Danh sách học sinh - {selectedClass}</h4>
          <ul id="courseList">
            {filterStudentData(selectedClass, searchTermStudent).map((student) => (
              <li key={student.mssv} onClick={() => displayStudentGrades(student)}>
                {`${student.name}, ${student.mssv}`}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={handleBackToClass}>Trở về</button>
        </Box>
      )}

      {/* Display Student Grades */}
      {selectedStudent !== null && (
        <Box className="search-container" sx={{ backgroundColor: 'white' }}>
          <h4>Điểm của {selectedStudent.name}</h4>
          <ul id="courseList">
            <li>
              {`Điểm kiểm tra: ${selectedStudent.quiz}; thay đổi thành: `}
              <input
                type="number"
                value={selectedStudent.quiz}
                min="0"
                max="10"
                style={{ marginLeft: '10px', width: '50px' }}
                onChange={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 10) {
                    selectedStudent.quiz = e.target.value;
                    setSelectedStudent({ ...selectedStudent });
                  }
                }}
              />
            </li>
            <li>
              {`Điểm bonus: ${selectedStudent.bonus}; thay đổi thành: `}
              <input
                type="number"
                value={selectedStudent.bonus}
                min="0"
                max="10"
                style={{ marginLeft: '10px', width: '50px' }}
                onChange={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 10) {
                    selectedStudent.bonus = e.target.value;
                    setSelectedStudent({ ...selectedStudent });
                  }
                }}
              />
            </li>
            <li>
              {`Điểm bài tập: ${selectedStudent.homework}; thay đổi thành: `}
              <input
                type="number"
                value={selectedStudent.homework}
                min="0"
                max="10"
                style={{ marginLeft: '10px', width: '50px' }}
                onChange={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 10) {
                    selectedStudent.homework = e.target.value;
                    setSelectedStudent({ ...selectedStudent });
                  }
                }}
              />
            </li>
            <li>
              {`Điểm giữa kỳ: ${selectedStudent.midTerm}; thay đổi thành: `}
              <input
                type="number"
                value={selectedStudent.midTerm}
                min="0"
                max="10"
                style={{ marginLeft: '10px', width: '50px' }}
                onChange={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 10) {
                    selectedStudent.midTerm = e.target.value;
                    setSelectedStudent({ ...selectedStudent });
                  }
                }}
              />
            </li>
            <li>
              {`Điểm cuối kỳ: ${selectedStudent.finalTerm}; thay đổi thành: `}
              <input
                type="number"
                value={selectedStudent.finalTerm}
                min="0"
                max="10"
                style={{ marginLeft: '10px', width: '50px' }}
                onChange={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 10) {
                    selectedStudent.finalTerm = e.target.value;
                    setSelectedStudent({ ...selectedStudent });
                  }
                }}
              />
            </li>
            <li>
              <Box>
                {`Điểm tổng kết: ${calculateFinalGrade(selectedStudent)}`}
              </Box>
            </li>
          </ul>
          <button className="btn btn-primary" onClick={handleBackToStudent}>Trở về</button>
        </Box>
      )}
      <Box sx={{ height: '80px' }}></Box>
    </Box>
  );
};

export default Courses;
