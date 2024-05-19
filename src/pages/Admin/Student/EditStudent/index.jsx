import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
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
import { doc, updateDoc } from "firebase/firestore"; 

// id, name, mssv, group, major, dob, gender, email, password
const EditStudent = ({ data }) => {

  const [fullName, setFullName] = React.useState(data[1]);
  const [studentId, setStudentId] = React.useState(data[2]);
  const [group, setGroup] = React.useState(data[3]);
  const [major, setMajor] = React.useState(data[4]);
  const [dob, setDob] = React.useState(data[5]);
  console.log(dob)
  const [gender, setGender] = React.useState(data[6]);
  const [email, setEmail] = React.useState(data[7]);
  const [password, setPassword] = React.useState(data[8]);
  
  const handleChangeFullName = (event) => {
    setFullName(event.target.value);
  }

  const handleChangeStudentId = (event) => {
    setStudentId(event.target.value);
  }

  const handleChangeGroup = (event) => {
    setGroup(event.target.value);
  }

  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  }

  const handleChangeDob = (date) => {
    setDob(date.format('DD-MM-YYYY'))
  }
  
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async () => {
    const student = {
      name: fullName,
      mssv: studentId,
      group,
      major,
      dob,
      gender,
      email,
      password
    }
    // Handle submit
    const userRef =  doc(db, 'users', data[0]);
    const docRef = await updateDoc(doc(db, "users", data[0]), {
      ...student
    });
    alert('Cập nhật thông tin thành công')
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
          id="email"
          label="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <TextField
          required
          id="password"
          label="Mật khẩu"
          value={password}
          onChange={handleChangePassword}
        />
        <TextField
          required
          id="name"
          label="Họ & tên"
          value={fullName}
          onChange={handleChangeFullName}
        />
        <TextField
          required
          id="mssv"
          label="MSSV"
          value={studentId}
          onChange={handleChangeStudentId}
        />
        <TextField
          required
          id="group"
          label="Lớp"
          value={group}
          onChange={handleChangeGroup}
        />
        <Box sx={{ minWidth: 230, maxWidth: 230, marginTop: 1}}>
          <FormControl fullWidth>
            <InputLabel id="major-label">Khoa</InputLabel>
            <Select
              labelId="major-label"
              id="major-select"
              value={major}
              label="Major"
              onChange={handleChangeMajor}
            >
              <MenuItem value={'Khoa học và kỹ thuật máy tính'}>Khoa học và kỹ thuật máy tính</MenuItem>
              <MenuItem value={'Kỹ thuật hóa học'}>Kỹ thuật hóa học</MenuItem>
              <MenuItem value={'Kỹ thuật ô tô'}>Kỹ thuật ô tô</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker defaultValue={dayjs(dob)} format="DD-MM-YYYY" id = 'dob' label="Ngày sinh" onChange={handleChangeDob}/>
          </DemoContainer>
        </LocalizationProvider>
        <Box sx={{ minWidth: 230, maxWidth: 230, marginTop: 2}}>
          <FormControl fullWidth>
            <InputLabel id="gender-label">Giới tính</InputLabel>
            <Select
              labelId="gender-label"
              id="gender-select"
              value={gender}
              label="Gender"
              onChange={handleChangeGender}
            >
              <MenuItem value={'Nam'}>Nam</MenuItem>
              <MenuItem value={'Nữ'}>Nữ</MenuItem>
              <MenuItem value={'Khác'}>Khác</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Button sx={{marginTop: 2, position: 'relative', left: 500}} variant="contained" onClick={handleSubmit}>Lưu</Button>
    </div>
  )
}

export default EditStudent;