import * as React from 'react';
import CustomizedTable from '../../../components/CustomizedTable';
import Modal from '../../../components/Modal';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function createData(id, name, mssv, group, major, dob, gender, address, email, password) {
  return [
    id,
    name,
    mssv,
    group,
    major,
    dob,
    gender,
    address,
    email,
    password
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
  {
    id: 'Giới tính',
    numeric: false,
    disablePadding: false,
    label: 'Giới tính',
  }
];

// id, name, mssv, group, major, dob) {


const rows = [
  createData('41234', 'Nguyễn Văn A', '2211522', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nữ', 'TP Hồ Chí Minh', 'txt@gmail.com','123456'),
  createData('12342', 'Nguyễn Văn B', '22116922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội', 'efef@gmail.com','123456'),
  createData('41234', 'Nguyễn Văn C', '2211222', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội', 'efgdfgef@gmail.com','123456'),
  createData('4123423', 'Nguyễn Văn D', '2212922', 'MT22KH08', 'Kỹ thuật hóa học', '2004-04-13', 'Nam', 'Hà Nội', 'ege@gmail.com','123456'),
  createData('41234', 'Nguyễn Văn E', '2215922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'TP Hồ Chí Minh', 'df@gmail.com','123456'),
  createData('12234', 'Nguyễn Văn F', '2211622', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nữ', 'Hà Nội', 'dfgh@gmail.com','123456'),
  createData('6576234', 'Nguyễn Văn G', '2211972', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội', 'yhyh@gmail.com','123456'),
  createData('51345', 'Nguyễn Văn H', '2211972', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội', 'sdf@gmail.com','123456'),
  createData('51354', 'Nguyễn Văn S', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội', 'sdfg@gmail.com','123456'),
  createData('51345', 'Nguyễn Văn BV', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'TP Hồ Chí Minh', '3454@gmail.com','123456'),
  createData('1234324', 'Nguyễn Văn AA', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nữ', 'TP Hồ Chí Minh', 'gdfg@gmail.com','123456'),
  createData('554525', 'Võ Tá Thắng', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội', 'vbn@gmail.com','123456'),
  createData('51235', 'Nguyện Bùi', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nữ', 'Hà Nội', 'efef@gmail.com','123456'),
  createData('5656', 'Lê Bảo', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội', 'efef@gmail.com','123456'),
  createData('5435345', 'Võ Tá Luân', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'TP Hồ Chí Minh', 'vbn@gmail.com','123456'),
  createData('1234', 'Lê Minh Quân', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'TP Hồ Chí Minh', 'sdf@gmail.com','123456'),
];

const renderCols = headCells.length+1

const Student = () => {
  console.log(renderCols)
  return (
    <Box sx={{ marginTop: 3 }}>
      <Button variant="contained" href="student/add">Thêm sinh viên</Button>
      <CustomizedTable ModalContent={EditStudent} headCells={headCells} rows={rows} renderCols={renderCols} modalTitle={'Sửa thông tin sinh viên'}/>
    </Box>
  );
}

export default Student