import React, { useState } from 'react';
import Box from '@mui/material/Box';
import '../../../assets/css/style.css';

const Courses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTermClass, setSearchTermClass] = useState('');
  const [searchTermStudent, setSearchTermStudent] = useState('');

  const classData = {
    'LTNC': [
      { name: 'LTNC 2023', size: '40', lecturer: 'Nguyễn Văn A' },
      { name: 'LTNC 2024', size: '48', lecturer: 'Nguyễn Văn A' },
    ],
  };

  const studentData = {
    'LTNC 2023': [
      { name: 'Nguyễn Văn Aa', mssv: '2200001', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn Ab', mssv: '2200002', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn Ac', mssv: '2200003', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn Ad', mssv: '2200004', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
    ],
    'LTNC 2024': [
      { name: 'Nguyễn Văn Ba', mssv: '2200005', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn Bc', mssv: '2200006', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn Bc', mssv: '2200007', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
      { name: 'Nguyễn Văn Bd', mssv: '2200008', quiz: 0, bonus: 0, homework: 0, midTerm: 0, finalTerm: 0 },
    ],
  };

  const filterClassData = (lecturerName, searchTerm) => {
    return classData[lecturerName].filter(detail => detail.name.toLowerCase().includes(searchTerm.toLowerCase()));
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

    return (quizGrade + bonusGrade + homeworkGrade + midTermGrade + finalTermGrade).toFixed(1);
  };

  const displayStudentDetails = (classDetail) => {
    setSelectedClass(classDetail);
  };

  const displayStudentGrades = (student) => {
    setSelectedStudent(student);
  };

  const handleBackToClass = () => {
    setSelectedClass(null);
    setSelectedStudent(null);
    setSearchTermClass('');
  };

  const handleBackToStudent = () => {
    setSelectedStudent(null);
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
