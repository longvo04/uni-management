import React from 'react';
import Box from '@mui/material/Box';

const LecturerInfor = () => {
  return (
    <Box sx={{ paddingY: '40px' }}>
      <Box className="personal-info" sx={{ backgroundColor: '#efefefef' }}>
        <table>
          <tbody>
            <tr>
              <td>Họ và tên:</td>
              <td>Nguyễn Văn A</td>
            </tr>
            <tr>
              <td>Ngày sinh:</td>
              <td>01/01/1990</td>
            </tr>
            <tr>
              <td>Địa chỉ:</td>
              <td>123 Đường ABC, Quận XYZ, TP HCM</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>nguyenvana@email.com</td>
            </tr>
            <tr>
              <td>Số điện thoại:</td>
              <td>0123456789</td>
            </tr>
            <tr>
              <td>Mã giảng viên:</td>
              <td>GV0000000</td>
            </tr>
            <tr>
              <td>Phụ trách môn:</td>
              <td>LTNC</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default LecturerInfor;
