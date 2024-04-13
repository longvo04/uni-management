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



const EditStudent = ({ data }) => {
  console.log(data)

  const [gender, setGender] = React.useState('Nam');
  const [fullName, setFullName] = React.useState(data[1]);
  const [studentId, setStudentId] = React.useState(data[2]);
  const [group, setGroup] = React.useState(data[3]);
  const [major, setMajor] = React.useState('Khoa học và kỹ thuật máy tính');
  const [dob, setDob] = React.useState(data[5]);
  console.log(dob)

  const handleChangeGroup = (event) => {
    setGroup(event.target.value);
  }

  const handleChangeDob = (date) => {
    const day = `${date.$D}`
    const month = `${date.$M+1}`
    const year = `${date.$y}`
    const dob = `${day}/${month}/${year}`
    setDob(dob)
    console.log(dob)
  }

  const handleChangeStudentId = (event) => {
    setStudentId(event.target.value);
  }

  const handleChangeFullName = (event) => {
    setFullName(event.target.value);
  }

  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }

  const handleSubmit = () => {
    const student = {
      fullName: fullName,
      studentId: studentId,
      dob: dob,
      group: group,
      major
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
            <InputLabel id="gender-label">Khoa</InputLabel>
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