import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    'CO1005',
    'Nhập môn điện toán',
    3,
    7.7,
    'B',
  ),
  createData(
    1,
    'CO1023',
    'Hệ thống số',
    3,
    7.5,
    'B',
  ),
  createData(2, 'MT1003', 'Giải tích 1', 4,8.6, 'A'),
  createData(
    3,
    'PE1011',
    'Bóng chuyền (Học phần 1)',
    0,
    8.0,
    'B+',
  ),
  createData(
    4,
    'PH1003',
    'Vật lý 1	',
    4,
    7.9,
   'B',
  ),
];


export default function GradeTable() {
  return (
    <React.Fragment>
      <Title>Học kỳ 221</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Mã môn học</TableCell>
            <TableCell>Tên môn học</TableCell>
            <TableCell>Tín chỉ</TableCell>
            <TableCell>Điểm số</TableCell>
            <TableCell>Điểm chữ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell >{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );

}
