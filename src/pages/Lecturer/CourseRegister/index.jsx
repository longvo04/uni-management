import React, { useState } from 'react';
import Box from '@mui/material/Box';
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
        day: 'Thứ 2 - Thứ 3',
        time: 'Tiết 1-2',
        week: '-1-2-3-4-5-6-7-8-9-'
      }
    ]
  }
];

const Table1 = ({ data, onRowClick }) => (
  <table className="custom-table">
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
  <table className="custom-table">
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
                  <td>{subject.day}</td>
                  <td>{subject.time}</td>
                  <td>{subject.week}</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <button className="btn btn-primary" onClick={() => onRegisterClick(subject)}>Nhận</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const App = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [showTable2, setShowTable2] = useState(false);

  const handleRowClick = (item) => {
    setSelectedData(item);
    setShowTable2(true);
  };

  const handleRegisterClick = (subject) => {
    // Xử lý khi nhấn nút 'Nhận' lớp
    console.log(`Đã nhận môn: ${subject.name}-${subject.code}`);
  };

  const handleBackClick = () => {
    setShowTable2(false);
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
            <button className="btn btn-primary" onClick={handleBackClick}>Trở về</button>
          </>
        )}
      </Box>
    </main>
  );
};

export default App;
