import React from 'react';
import '../../../assets/css/style.css';
import '../../../assets/css/templatemo.css';

const StudentInfor = () => {
  return (
    <div className="personal-info" id="inforBody">
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
            <td>Mã sinh viên:</td>
            <td>GV0000000</td>
          </tr>
          <tr>
            <td>Khoa:</td>
            <td>MT22</td>
          </tr>
          <tr>
            <td>Lớp:</td>
            <td>KH01</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentInfor;
