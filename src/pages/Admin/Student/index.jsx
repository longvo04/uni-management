import * as React from 'react';
import CustomizedTable from '../../../components/CustomizedTable';
import Modal from '../../../components/Modal';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import Box from '@mui/material/Box';
import { db } from "../../../firebase/client.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { auth, createUserWithEmailAndPassword, deleteUser } from '../../../firebase/client';
function createData(id, name, mssv, group, major, dob, gender, email, password) {
  return [
    id,
    name,
    mssv,
    group,
    major,
    dob,
    gender,
    email,
    password,
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
    id: 'gender',
    numeric: false,
    disablePadding: false,
    label: 'Giới tính',
  },
];

// id, name, mssv, group, major, dob) {


// const rows = [
//   createData('1', 'Nguyễn Văn A', '2211522', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'test@gmail.com', '123456'),
//   createData('2', 'Nguyễn Văn B', '22116922', 'MT22KH08', 'Kỹ Thuật hóa học', '2004-04-13', 'Nữ', 'test@gmail.com', '123456'),
//   createData('3', 'Nguyễn Văn C', '2211222', 'MT22KH08', 'Kỹ Thuật hóa học', '2004-04-13', 'Nam', 'test@gmail.com', '123456'),
//   createData('4', 'Nguyễn Văn D', '2212922', 'MT22KH08', 'Kỹ Thuật hóa học', '2004-04-13', 'Nam', 'test@gmail.com', '123456'),
//   createData('5', 'Nguyễn Văn E', '2215922', 'MT22KH08', 'Kỹ Thuật hóa học', '2004-04-13', 'Nam', 'test@gmail.com', '123456'),
//   createData('6', 'Nguyễn Văn F', '2211622', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nữ', 'test@gmail.com', '123456'),
//   createData('7', 'Nguyễn Văn G', '2211972', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nữ', 'test@gmail.com', '123456'),
//   createData('8', 'Nguyễn Văn H', '2211972', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'test@gmail.com', '123456'),
//   createData('9', 'Nguyễn Văn S', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'test@gmail.com', '123456'),
//   createData('10', 'Nguyễn Văn BV', '2211922', 'MT22KH08', 'Kỹ thuật hóa học', '2004-04-13', 'Nam', 'test@gmail.com', '123456'),
//   createData('11', 'Nguyễn Văn AA', '2211922', 'MT22KH08', 'Kỹ thuật hóa học', '2004-04-13', 'Nữ', 'test@gmail.com', '123456'),
//   createData('12', 'Võ Tá Thắng', '2211922', 'MT22KH08', 'Kỹ thuật hóa học', '2004-04-13', 'Nữ', 'test@gmail.com', '123456'),
//   createData('13', 'Nguyện Bùi', '2211922', 'MT22KH08', 'Kỹ thuật hóa học', '2004-04-13', 'Khác', 'test@gmail.com', '123456'),
//   createData('14', 'Lê Bảo', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nữ', 'test@gmail.com', '123456'),
//   createData('15', 'Võ Tá Luân', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nữ', 'test@gmail.com', '123456'),
//   createData('16', 'Lê Minh Quân', '2211922', 'MT22KH08', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nữ', 'test@gmail.com', '123456'),
// ];



const renderCols = headCells.length

const Student = () => {
  const [ rows, setRows ] = React.useState([])
  const [ loading, setLoading ] = React.useState(true)
  const uid = JSON.parse(localStorage.getItem('uid'))

  // id, name, mssv, group, major, dob, gender, email, password

  const fetchData = async () => {
    const q = query(collection(db, "users"), where("role", "==", 'student'));
    const temp = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      temp.push(createData(doc.id, doc.data().name, doc.data().mssv, doc.data().group, doc.data().major, doc.data().dob, doc.data().gender, doc.data().email, doc.data().password))
    });
    temp && (setLoading(false) || setRows(temp))
  }

  const handleDelete = async (idList) => {
      console.log(idList)
      idList.forEach(async (id) => {
        fetch(`http://localhost:3000/api/user/delete/`, {
          method: 'POST',
          credentials: "include",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({uid: id})
        });
      })
    }


  React.useEffect(() => {
    fetchData()
  }
  , [])

  return (
    <Box sx={{ marginTop: 3 }}>
      <Modal ModalContent={AddStudent} buttonDescription={'Thêm sinh viên'} modalTitle={'Nhập thông tin sinh viên'}/>
      {loading ? <>Loading...</> : <CustomizedTable fetchData={fetchData} handleDelete={handleDelete} ModalContent={EditStudent} headCells={headCells} renderCols={renderCols} rows={rows} modalTitle={'Sửa thông tin sinh viên'}/>}
    </Box>
  );
}

export default Student