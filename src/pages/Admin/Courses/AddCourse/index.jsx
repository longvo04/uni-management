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
import { collection, addDoc, doc } from "firebase/firestore"; 


const AddCourse = () => {
  const [major, setMajor] = React.useState('Khoa học và kỹ thuật máy tính');
  const [courseName, setCourseName] = React.useState('');
  const [courseId, setCourseId] = React.useState('');
  const [credit, setCredit] = React.useState(0);


  const handleChangeCourseId = (event) => {
    setCourseId(event.target.value);
  }

  const handleChangeCoursename = (event) => {
    setCourseName(event.target.value);
  }

  const handleChangeCredit = (event) => {
    setCredit(event.target.value);
  };

  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  }

  const handleSubmit = async () => {
    const course = {
      courseId,
      courseName,
      credit,
      major,
      classList: []
    }
    // Handle submit
    const docRef = await addDoc(collection(db, "courses"), {
      ...course
    });
    if(!docRef.id) alert('Thêm khóa học thất bại')
    else alert('Thêm khóa học thành công')
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
          id="courseId"
          label="Mã môn học"
          onChange={handleChangeCourseId}
        />
        <TextField
          required
          id="name"
          label="Tên môn học"
          onChange={handleChangeCoursename}
        />
        <TextField
          required
          id="credit"
          label="Số tín chỉ"
          onChange={handleChangeCredit}
        />
        <TextField
          required
          id="major"
          label="Khoa quản lý"
          onChange={handleChangeMajor}
        />
      </Box>
      <Button sx={{marginTop: 2, position: 'relative', left: 200}} variant="contained" onClick={handleSubmit}>Thêm khóa học</Button>
    </div>
  )
}

export default AddCourse;