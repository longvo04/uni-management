import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCourse from './AddCourse';
import Modal from '@mui/material/Modal';
import MyModal from '../../../components/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function createData(courseId, courseName, courseCredit, major, classList) {
  return {
    courseId,
    courseName,
    courseCredit,
    major,
    classList: classList
  };
}

function createClassData(classId, className, classRoom, lecturer) {
  return {
    classId,
    className,
    classRoom,
    lecturer
  };
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const handleEditClass = (data) => {
    console.log('Sửa lớp', data)
  }

  const handleDeleteClass = (data) => {
    const answer = confirm('Bạn có chắc chắn muốn xóa lớp này không?')
    if (!answer) return
    console.log('Xóa lớp', data)
  }

  const handleEditCourse = (data) => {
    console.log('Sửa lớp', data)
  }

  const handleDeleteCourse = (data) => {
    const answer = confirm('Bạn có chắc chắn muốn xóa khóa học này không?')
    if (!answer) return
    console.log('Xóa lớp', data)
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.courseId}</TableCell>
        <TableCell align="left">{row.courseName}</TableCell>
        <TableCell align="left">{row.courseCredit}</TableCell>
        <TableCell align="left">{row.major}</TableCell>
        <TableCell align='right'>
          <IconButton aria-label="editCourse" onClick={()=>handleEditCourse(row)}>
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell align='right'>
          <IconButton aria-label="deleteCourse" onClick={()=>handleDeleteCourse(row)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Danh sách lớp học
              </Typography>
              <Table size="small" aria-label="classList">
                <TableHead>
                  <TableRow>
                    <TableCell>Mã lớp</TableCell>
                    <TableCell>Tên Lớp</TableCell>
                    <TableCell>Giảng Viên</TableCell>
                    <TableCell>Phòng</TableCell>
                    <TableCell align='right'></TableCell>
                    <TableCell align='right'></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.classList.map((classRow) => (
                    <TableRow key={classRow.classId}>
                      <TableCell component="th" scope="row">
                        {classRow.classId}
                      </TableCell>
                      <TableCell>{classRow.className}</TableCell>
                      <TableCell>{classRow.lecturer || 'Chưa phân công'}</TableCell>
                      <TableCell>{classRow.classRoom}</TableCell>
                      <TableCell align='right'>
                        <IconButton aria-label="edit" onClick={()=>handleEditClass(classRow)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align='right'>
                        <IconButton aria-label="delete" onClick={()=>handleDeleteClass(classRow)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

//function createData(courseId, courseName, courseCredit, courseLecturer) {

const rows = [
  createData('CO2003', 'Lập trình nâng cao', 3, 'Máy tính',[createClassData('CO2003-01', 'CO2003-01', 'A1', 'Nguyễn Văn A'), createClassData('CO2003-02', 'CO2003-02', 'A2', 'Nguyễn Văn B')]),
  createData('CO1992', 'Mô hình hóa', 4, 'Máy tính', [createClassData('CO1992-01', 'CO1992-01', 'A1', 'Nguyễn Văn A'), createClassData('CO1992-02', 'CO1992-02', 'A2', 'Nguyễn Văn B')]),
  createData('MT2001', 'Giải Tích 2', 4, 'Toán ứng dụng', [createClassData('MT2001-01', 'MT2001-01', 'A1', 'Nguyễn Văn A'), createClassData('MT2001-02', 'MT2001-02', 'A2', 'Nguyễn Văn B')]),
  createData('CO2004', 'Cấu trúc dữ liệu và giải thuật', 4, 'Máy tính', [createClassData('CO2004-01', 'CO2004-01', 'A1', 'Nguyễn Văn A'), createClassData('CO2004-02', 'CO2004-02', 'A2', 'Nguyễn Văn B')]),
  createData('CO2004', 'Cấu trúc dữ liệu và giải thuật', 4, 'Máy tính', [createClassData('CO2004-01', 'CO2004-01', 'A1', 'Nguyễn Văn A'), createClassData('CO2004-02', 'CO2004-02', 'A2', 'Nguyễn Văn B')]),
  createData('CO2004', 'Cấu trúc dữ liệu và giải thuật', 4, 'Máy tính', [createClassData('CO2004-01', 'CO2004-01', 'A1', 'Nguyễn Văn A'), createClassData('CO2004-02', 'CO2004-02', 'A2', 'Nguyễn Văn B')]),
  createData('CO2004', 'Cấu trúc dữ liệu và giải thuật', 4, 'Máy tính', [createClassData('CO2004-01', 'CO2004-01', 'A1', 'Nguyễn Văn A'), createClassData('CO2004-02', 'CO2004-02', 'A2', 'Nguyễn Văn B')]),
  createData('CO2004', 'Cấu trúc dữ liệu và giải thuật', 4, 'Máy tính', [createClassData('CO2004-01', 'CO2004-01', 'A1', 'Nguyễn Văn A'), createClassData('CO2004-02', 'CO2004-02', 'A2', 'Nguyễn Văn B')]),
  createData('CO2004', 'Cấu trúc dữ liệu và giải thuật', 4, 'Máy tính', [createClassData('CO2004-01', 'CO2004-01', 'A1', 'Nguyễn Văn A'), createClassData('CO2004-02', 'CO2004-02', 'A2', 'Nguyễn Văn B')]),
  createData('CO2004', 'Cấu trúc dữ liệu và giải thuật', 4, 'Máy tính', [createClassData('CO2004-01', 'CO2004-01', 'A1', 'Nguyễn Văn A'), createClassData('CO2004-02', 'CO2004-02', 'A2', 'Nguyễn Văn B')]),
];

const headCells = [
  {
    id: 'courseId',
    numeric: false,
    disablePadding: true,
    label: 'Mã môn học',
  },
  {
    id: 'courseName',
    numeric: false,
    disablePadding: false,
    label: 'Tên môn học',
  },
  {
    id: 'courseCredit',
    numeric: false,
    disablePadding: false,
    label: 'Số tín chỉ',
  },
  {
    id: 'major',
    numeric: false,
    disablePadding: false,
    label: 'Khoa quản lý',
  },
];

const Courses = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState('Sửa thông tin khóa học');
  const [data, setData] = React.useState({});
  const [ModalContent, setModalContent] = React.useState(null);
  console.log(rows)
  return (
    <Box sx={{ marginTop: 2 }}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={()=>setOpenModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        
        <Fade in={openModal}>
          <Box sx={style}>
            <h2>{modalTitle}</h2>
            {ModalContent && <ModalContent data={data} />}
          </Box>
        </Fade>
      </Modal>
      <MyModal ModalContent={AddCourse} buttonDescription={'Thêm khóa học'} modalTitle={'Nhập thông tin khóa học'}/>
      <TableContainer component={Paper} sx={{ maxHeight: 500, marginTop: 2 }}>
        <Table aria-label="collapsible table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell />
              {headCells.map((headCell) => <TableCell align="left">{headCell.label}</TableCell>)}
              <TableCell align='right' />
              <TableCell align='right' />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.courseName} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Courses