import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { db } from '../../../../firebase/client';
import { collection, addDoc, doc, updateDoc, arrayUnion } from "firebase/firestore"; 


const AddCourse = (props) => {
  const courseId = props.data.id;
  const [classID, setClassID] = React.useState('');
  const [className, setClassName] = React.useState('');
  const [lecturer, setLecturer] = React.useState('');
  const [room, setRoom] = React.useState('');

  const handleChangeClassID = (event) => {
    setClassID(event.target.value);
  }

  const handleChangeClassName = (event) => {
    setClassName(event.target.value);
  }

  const handleChangeLecturer = (event) => {
    setLecturer(event.target.value);
  };

  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  }

  const handleSubmit = async () => {
    const classData = {
      courseId: courseId,
      classID,
      className,
      lecturer,
      room,
      studentList: []
    }
    // Handle submit
    if (!classData.classID || !classData.className || !classData.room) {
      alert('Vui lòng điền đầy đủ thông tin')
      return
    }
    const docRef = await addDoc(collection(db, "class"), {
      ...classData
    });
    const courseRef = doc(db, "courses", courseId);
    await updateDoc(courseRef, {
      classList: arrayUnion(docRef.id)
    });
    if(!docRef.id) alert('Thêm lớp thất bại')
    else alert('Thêm lớp học thành công')
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'space-around',
        }}
        noValidate
        autoComplete="off"
      >
        
        <TextField
          required
          id="classID"
          label="Mã lớp"
          onChange={handleChangeClassID}
        />
        <TextField
          required
          id="className"
          label="Tên Lớp"
          onChange={handleChangeClassName}
        />
        <TextField
          required
          id="lecturer"
          label="Giảng Viên"
          onChange={handleChangeLecturer}
        />
        <TextField
          required
          id="room"
          label="Phòng Học"
          onChange={handleChangeRoom}
        />
      </Box>
      <Button sx={{marginTop: 2, position: 'relative', left: 200}} variant="contained" onClick={handleSubmit}>Thêm lớp học</Button>
    </div>
  )
}

export default AddCourse;