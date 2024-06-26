import * as React from 'react';
import CustomizedTable from '../../../components/CustomizedTable';
import Modal from '../../../components/Modal';
import AddLecturer from './AddLecturer';
import EditLecturer from './EditLecturer';
import Box from '@mui/material/Box';
import { db } from "../../../firebase/client.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";

function createData(id, name, lecturerId, major, dob, gender, address, degree, email, password) {
  return [
    id,
    name,
    lecturerId,
    major,
    dob,
    gender,
    address,
    degree,
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
    id: 'lecturerId',
    numeric: false,
    disablePadding: false,
    label: 'Mã giảng viên',
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
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Địa chỉ',
  }
];

//id, name, lecturerId, major, dob, gender, address


// const rows = [
//   createData('312', 'Nguyễn Minh Hiếu', '2211522', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'TP Hồ Chí Minh',),
//   createData('4234', 'Nguyễn Văn B', '22116922', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('65412', 'Ngọc Hoàng', '2211222', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('4123123', 'Nguyễn Văn D', '2212922', 'Kỹ thuật hóa học', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('45', 'Lê Trung Dũng', '2215922', 'Kỹ thuật hóa học', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('1', 'Nguyễn Văn F', '2211622', 'Kỹ thuật hóa học', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('6', 'Nguyễn Minh Hằng', '2211972', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('7', 'Nguyễn Văn H', '2211972', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('0', 'Nguyễn Văn S', '2211922', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('10', 'Nam Tào', '2211922', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('11', 'Nguyễn Văn AA', '2211922', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('12', 'Võ Tá Thắng', '2211922', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('13', 'Nguyện Bùi', '2211922', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('14', 'Lê Bảo', '2211922', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('15', 'Võ Tá Luân', '2211922', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
//   createData('16', 'Bắc Đẩu', '2211922', 'Khoa học và kỹ thuật máy tính', '2004-04-13', 'Nam', 'Hà Nội'),
// ];

const renderCols = headCells.length;

const Lecturer = () => {
  const [ rows, setRows] = React.useState([]);
  const [ loading, setLoading ] = React.useState(true);
  const uid = JSON.parse(localStorage.getItem('uid'))

  // id, name, lecturerId, major, dob, gender, address, degree, email, password

  const fetchData = async () => {
    const q = query(collection(db, "users"), where("role", "==", 'teacher'));
    const temp = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      temp.push(createData(doc.id, doc.data().name, doc.data().lecturerId, doc.data().major, doc.data().dob, doc.data().gender, doc.data().address, doc.data().degree, doc.data().email, doc.data().password))
    });
    temp && (setLoading(false) || setRows(temp))
  }

  const handleDelete = async (idList) => {
      console.log(idList)
      idList.forEach(async (id) => {
        fetch(`http://localhost:3000/api/user/delete/`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
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
      <Modal ModalContent={AddLecturer} buttonDescription={'Thêm Giảng viên'} modalTitle={'Nhập thông tin giảng viên'}/>
      {loading ? <>Loading...</> : 
      <CustomizedTable setLoading={setLoading} fetchData={fetchData} handleDelete={handleDelete} ModalContent={EditLecturer} headCells={headCells} rows={rows} renderCols={renderCols} modalTitle={'Sửa thông tin giảng viên'}/>}
    </Box>
  );
}

export default Lecturer