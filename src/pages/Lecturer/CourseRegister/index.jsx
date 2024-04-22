import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Button from '@mui/material/Button';
import '../../../assets/css/style.css';

const data1 = [
  {
    id: 1,
    dot: 'HK233_D1',
    description: 'Đăng ký môn học 08/04/2024',
    time: '26/03/2024 10:00 - 02/04/2024 23:00',
    subjects: [
      {
        id: 1,
        name: 'LTNC 2024',
        code: 'CO2342',
        credit: '4',
        studentNumber: '74/140',
        day: ['2', '3'],
        time: ['7', '8'],
        week: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        isRegistered: false
        day: ['2', '3'],
        time: ['7', '8'],
        week: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        isRegistered: false
      },
      {
        id: 2,
        name: 'KTLT 2024',
        name: 'KTLT 2024',
        code: 'CO2342',
        credit: '4',
        studentNumber: '74/140',
        day: ['2', '3'],
        time: ['11', '12'],
        week: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        isRegistered: false
        day: ['2', '3'],
        time: ['11', '12'],
        week: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        isRegistered: false
      },
      {
        id: 3,
        name: 'MHHTH 2024',
        name: 'MHHTH 2024',
        code: 'CO2342',
        credit: '4',
        studentNumber: '74/140',
        day: ['2', '3'],
        time: ['7', '8'],
        week: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        isRegistered: false
      },
        day: ['2', '3'],
        time: ['7', '8'],
        week: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        isRegistered: false
      },
    ]
  }
];

const Table1 = ({ data, onRowClick }) => (
  <table style={{ backgroundColor: '#efefefef' }} className="custom-table">
    <thead>
      <tr>
        <th>STT</th>
        <th>Đợt đăng ký</th>
        <th>Mô tả</th>
        <th>Thời gian đăng ký</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} onClick={() => onRowClick(item)}>
          <td>{index + 1}</td>
          <td>{item.dot}</td>
          <td>{item.description}</td>
          <td>{item.time}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Table2 = ({ data, onRegisterClick }) => (
  <table style={{ backgroundColor: '#efefefef' }} className="custom-table">
    <thead>
      <tr>
        <th>STT</th>
        <th>{data.description}</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {data.subjects.map((subject, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <table className="inner-table">
              <thead>
                <tr>
                  <th>Tên lớp</th>
                  <th>Mã lớp</th>
                  <th>Tín chỉ</th>
                  <th>Sĩ số</th>
                  <th>Thứ</th>
                  <th>Tiết</th>
                  <th>Tuần học</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{subject.name}</td>
                  <td>{subject.code}</td>
                  <td>{subject.credit}</td>
                  <td>{subject.studentNumber}</td>
                  <td>{subject.day.join(', ')}</td>
                  <td>{subject.time.join(', ')}</td>
                  <td>{subject.week.join(', ')}</td>
                  <td>{subject.day.join(', ')}</td>
                  <td>{subject.time.join(', ')}</td>
                  <td>{subject.week.join(', ')}</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <Button variant="contained" color={subject.isRegistered ? "secondary" : "primary"} onClick={() => onRegisterClick(subject)}>
              {subject.isRegistered ? 'Hủy' : 'Nhận'}
            </Button>
            <Button variant="contained" color={subject.isRegistered ? "secondary" : "primary"} onClick={() => onRegisterClick(subject)}>
              {subject.isRegistered ? 'Hủy' : 'Nhận'}
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Table3 = ({ registeredSubjects, onCancelClick }) => (
  <div>
    <h4><strong>Danh sách lớp đã nhận</strong></h4>
    <table className="inner-table">
      <thead>
        <tr>
          <th>Tên lớp</th>
          <th>Mã lớp</th>
          <th>Tín chỉ</th>
          <th>Sĩ số</th>
          <th>Thứ</th>
          <th>Tiết</th>
          <th>Tuần học</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {registeredSubjects.map((subject, index) => (
          <tr key={index}>
            <td>{subject.name}</td>
            <td>{subject.code}</td>
            <td>{subject.credit}</td>
            <td>{subject.studentNumber}</td>
            <td>{subject.day.join(', ')}</td>
            <td>{subject.time.join(', ')}</td>
            <td>{subject.week.join(', ')}</td>
            <td>
              <Button variant="contained" color="secondary" onClick={() => onCancelClick(subject)}>Hủy</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CourseRegister = () => {
const Table3 = ({ registeredSubjects, onCancelClick }) => (
  <div>
    <h4><strong>Danh sách lớp đã nhận</strong></h4>
    <table className="inner-table">
      <thead>
        <tr>
          <th>Tên lớp</th>
          <th>Mã lớp</th>
          <th>Tín chỉ</th>
          <th>Sĩ số</th>
          <th>Thứ</th>
          <th>Tiết</th>
          <th>Tuần học</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {registeredSubjects.map((subject, index) => (
          <tr key={index}>
            <td>{subject.name}</td>
            <td>{subject.code}</td>
            <td>{subject.credit}</td>
            <td>{subject.studentNumber}</td>
            <td>{subject.day.join(', ')}</td>
            <td>{subject.time.join(', ')}</td>
            <td>{subject.week.join(', ')}</td>
            <td>
              <Button variant="contained" color="secondary" onClick={() => onCancelClick(subject)}>Hủy</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CourseRegister = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [showTable2, setShowTable2] = useState(false);
  const [registeredSubjects, setRegisteredSubjects] = useState([]);
  const [registeredSubjects, setRegisteredSubjects] = useState([]);

  const handleRowClick = (item) => {
    setSelectedData(item);
    setShowTable2(true);
  };

  const handleRegisterClick = (subject) => {
    if (subject.isRegistered) {
      // Hủy môn học
      setRegisteredSubjects(registeredSubjects.filter(s => s.id !== subject.id));
      subject.isRegistered = false;
    } else {
      // Kiểm tra trùng lịch dạy
      const isConflict = registeredSubjects.some(
        (regSubject) =>
          regSubject.day.some((day) => subject.day.includes(day)) &&
          regSubject.time.some((time) => subject.time.includes(time))
      );

      if (isConflict) {
        alert(`Trùng lịch dạy lớp '${subject.name}'`);
        return;
      }

      setRegisteredSubjects([...registeredSubjects, subject]);
      subject.isRegistered = true;
    }
    if (subject.isRegistered) {
      // Hủy môn học
      setRegisteredSubjects(registeredSubjects.filter(s => s.id !== subject.id));
      subject.isRegistered = false;
    } else {
      // Kiểm tra trùng lịch dạy
      const isConflict = registeredSubjects.some(
        (regSubject) =>
          regSubject.day.some((day) => subject.day.includes(day)) &&
          regSubject.time.some((time) => subject.time.includes(time))
      );

      if (isConflict) {
        alert(`Trùng lịch dạy lớp '${subject.name}'`);
        return;
      }

      setRegisteredSubjects([...registeredSubjects, subject]);
      subject.isRegistered = true;
    }
  };

  const handleBackClick = () => {
    setShowTable2(false);
  };

  const handleCancelClick = (subject) => {
    setRegisteredSubjects(registeredSubjects.filter(s => s.id !== subject.id));
    subject.isRegistered = false;
  };

  const handleCancelClick = (subject) => {
    setRegisteredSubjects(registeredSubjects.filter(s => s.id !== subject.id));
    subject.isRegistered = false;
  };

  return (
    <main className="container-lg py-5">
      <Box sx={{ maxWidth: '1000px', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
        <h4><strong>Bảng đăng ký</strong></h4>
        {!showTable2 ? (
          <Table1 data={data1} onRowClick={handleRowClick} />
        ) : (
          <>
            <Table2 data={selectedData} onRegisterClick={handleRegisterClick} />
            <Button variant="contained" color="primary" onClick={handleBackClick}>Trở về</Button>
            <Table3 registeredSubjects={registeredSubjects} onCancelClick={handleCancelClick} />
            <Button variant="contained" color="primary" onClick={handleBackClick}>Trở về</Button>
            <Table3 registeredSubjects={registeredSubjects} onCancelClick={handleCancelClick} />
          </>
        )}
      </Box>
    </main>
  );
};

export default CourseRegister;