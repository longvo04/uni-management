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



//id, name, lecturerId, major, dob, gender, address, degree, email, password
const EditLecturer = ({ data }) => {
  console.log(data)

  const [fullName, setFullName] = React.useState(data[1]);
  const [lecturerId, setLecturerId] = React.useState(data[2]);
  const [major, setMajor] = React.useState(data[3]);
  const [dob, setDob] = React.useState(data[4]);
  const [gender, setGender] = React.useState(data[5]);
  const [address, setAddress] = React.useState(data[6]);
  const [degree, setDegree] = React.useState(data[7]);
  const [email, setEmail] = React.useState(data[8]);
  const [password, setPassword] = React.useState(data[9]);

  const handleChangeFullName = (event) => {
    setFullName(event.target.value);
  }
  
  const handleChangeLecturerId = (event) => {
    setLecturerId(event.target.value);
  }

  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  };

  const handleChangeDob = (date) => {
    const day = `${date.$D}`
    const month = `${date.$M+1}`
    const year = `${date.$y}`
    const dob = `${day}/${month}/${year}`
    setDob(dob)
    console.log(dob)
  }

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  }

  const handleChangeDegree = (event) => {
    setDegree(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

//id, name, lecturerId, major, dob, gender, address, degree, email, password

  const handleSubmit = () => {
    const student = {
      id: data[0],
      fullName,
      lecturerId,
      major,
      dob,
      gender,
      address,
      degree,
      email,
      password
    }
    // Handle submit
    console.log(student)
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
          id="name"
          label="Họ & tên"
          value={fullName}
          onChange={handleChangeFullName}
        />
        <TextField
          required
          id="lecturerId"
          label="Mã giảng viên"
          value={lecturerId}
          onChange={handleChangeLecturerId}
        />
        <Box sx={{ minWidth: 200, maxWidth: 230, marginTop: 1}}>
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
        <Box sx={{ minWidth: 230, maxWidth: 230}}>
          <FormControl fullWidth>
            <InputLabel id="gender-label">Giới tính</InputLabel>
            <Select
              labelId="gender-label"
              id="gender-select"
              value={gender || ''}
              label="Gender"
              onChange={handleChangeGender}
            >
              <MenuItem value={'Nam'}>Nam</MenuItem>
              <MenuItem value={'Nữ'}>Nữ</MenuItem>
              <MenuItem value={'Khác'}>Khác</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          required
          id="address"
          label="Địa chỉ"
          value={address}
          onChange={handleChangeAddress}
        />
        <TextField
          required
          id="degree"
          label="Bằng cấp"
          value={degree || ''}
          onChange={handleChangeDegree}
        />
        <TextField
          required
          id="email"
          label="Email"
          value={email || ''}
          onChange={handleChangeEmail}
        />
        <TextField
          required
          id="password"
          label="Mật khẩu"
          value={password || ''}
          onChange={handleChangePassword}
        />
      </Box>
      <Button sx={{marginTop: 2, position: 'relative', left: 500}} variant="contained" onClick={handleSubmit}>Lưu</Button>
    </div>
  )
}

export default EditLecturer;