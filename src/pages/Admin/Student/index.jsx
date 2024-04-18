import * as React from 'react';
import CustomizedTable from '../../../components/CustomizedTable';
import Modal from '../../../components/Modal';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import Box from '@mui/material/Box';

function createData(id, name, mssv, group, major, dob) {
  return [
    id,
    name,
    mssv,
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
    id: 'mssv',
    numeric: false,
    disablePadding: false,
    label: 'MSSV',
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
  createData(1, 'Nguyễn Văn A', '2211522', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(2, 'Nguyễn Văn B', '22116922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(3, 'Nguyễn Văn C', '2211222', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(4, 'Nguyễn Văn D', '2212922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(5, 'Nguyễn Văn E', '2215922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(6, 'Nguyễn Văn F', '2211622', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(7, 'Nguyễn Văn G', '2211972', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(8, 'Nguyễn Văn H', '2211972', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(9, 'Nguyễn Văn S', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(10, 'Nguyễn Văn BV', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(11, 'Nguyễn Văn AA', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(12, 'Võ Tá Thắng', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(13, 'Nguyện Bùi', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(14, 'Lê Bảo', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(15, 'Võ Tá Luân', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
  createData(16, 'Lê Minh Quân', '2211922', 'MT22KH08', 'KH&KTMT', '2004-04-13'),
];

const Student = () => {
  
  return (
    <Box sx={{ marginTop: 3 }}>
      <Modal ModalContent={AddStudent} buttonDescription={'Thêm sinh viên'} modalTitle={'Nhập thông tin sinh viên'}/>
      <CustomizedTable ModalContent={EditStudent} headCells={headCells} rows={rows} modalTitle={'Sửa thông tin sinh viên'}/>
    </Box>
  );
}

export default Student