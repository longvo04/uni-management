import React from 'react';
import Box from '@mui/material/Box';
import { db } from "../../../firebase/client.js";
import { doc, getDocFromServer } from "firebase/firestore";

const LecturerInfor = () => {
  const [data, setData] = React.useState({})
  const uid = JSON.parse(localStorage.getItem('uid'))

  const fetchData = async () => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDocFromServer(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const handleDelete = async (idList) => {
    console.log(idList)
    idList.forEach(async (id) => {
      await deleteDoc(doc(db, "users", id));
    })
  }


  React.useEffect(() => {
    fetchData()
  }
    , [])

  return (
    <Box sx={{ paddingY: '40px' }}>
      <Box className="personal-info" sx={{ backgroundColor: '#efefefef' }}>
        <table>
          <tbody>
            <tr>
              <td>Họ và tên:</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Giới tính:</td>
              <td>{data.gender}</td>
            </tr>
            <tr>
              <td>Ngày sinh:</td>
              <td>{data.dob}</td>
            </tr>
            <tr>
              <td>Địa chỉ:</td>
              <td>{data.address}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>Số điện thoại:</td>
              <td>{data.phoneNumber}</td>
            </tr>
            <tr>
              <td>Mã giảng viên:</td>
              <td>{data.lecturerId}</td>
            </tr>
            <tr>
              <td>Phụ trách môn:</td>
              <td>{data.major}</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default LecturerInfor;
