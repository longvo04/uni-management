import * as React from 'react';
import CustomizedTable from '../../../components/CustomizedTable';
import Modal from '../../../components/Modal';
import AddLecturer from './AddLecturer';
import EditLecturer from './EditLecturer';
import Box from '@mui/material/Box';

function createData(id, name, lecturerId, group, major, dob) {
  return [
    id,
    name,
    lecturerId,
    group,
    major,
    dob,
  ];
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Họ và tên',
  },
  {
    id: 'lecturerId',
    numeric: false,
    disablePadding: false,
    label: 'Mã giảng viên',
  },
  {
    id: 'group',
    numeric: false,
    disablePadding: false,
    label: 'Lớp',
  },
  {
    id: 'major',
    numeric: false,
    disablePadding: false,
    label: 'Khoa',
  },
  {
    id: 'dob',
    numeric: false,
    disablePadding: false,
    label: 'Ngày sinh',
  },
];

// id, name, mssv, group, major, dob) {


const rows = [
  createData(1, 'Nguyễn Minh Hiếu', '2211522', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(2, 'Nguyễn Văn B', '22116922', 'none', 'KH&KTMT', '2004-04-13'),
  createData(3, 'Ngọc Hoàng', '2211222', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(4, 'Nguyễn Văn D', '2212922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(5, 'Lê Trung Dũng', '2215922', 'none', 'KH&KTMT', '2004-04-13'),
  createData(6, 'Nguyễn Văn F', '2211622', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(7, 'Nguyễn Minh Hằng', '2211972', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(8, 'Nguyễn Văn H', '2211972', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(9, 'Nguyễn Văn S', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(10, 'Nam Tào', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(11, 'Nguyễn Văn AA', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(12, 'Võ Tá Thắng', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(13, 'Nguyện Bùi', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(14, 'Lê Bảo', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(15, 'Võ Tá Luân', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(16, 'Bắc Đẩu', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
];

const Lecturer = () => {
  
  return (
    <Box sx={{ marginTop: 3 }}>
      <Modal ModalContent={AddLecturer} buttonDescription={'Thêm Giảng viên'} modalTitle={'Nhập thông tin giảng viên'}/>
      <CustomizedTable ModalContent={EditLecturer} headCells={headCells} rows={rows} modalTitle={'Sửa thông tin giảng viên'}/>
    </Box>
  );
}

export default Lecturer