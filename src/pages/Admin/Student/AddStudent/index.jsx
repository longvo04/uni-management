import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [group, setGroup] = useState('');
  const [major, setMajor] = useState('Khoa học và kỹ thuật máy tính');
  const [dob, setDob] = React.useState('');
  const [address, setAddress] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
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

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  }

  const handleChangeDob = (date) => {
    const day = `${date.$D}`
    const month = `${date.$M+1}`
    const year = `${date.$y}`
    const dob = `${day}/${month}/${year}`
    setDob(dob)
    console.log(dob)
  }

  const handleSubmit = () => {
    if (name === '' || studentId === '' || group === '' || major === '' || dob === '' || address === '') alert('Vui lòng nhập đầy đủ thông tin')
    const student = {
      name: name,
      studentId: studentId,
      dob: dob,
      group: group,
      major,
      address
    }
    console.log(student)
  }

  return (
    <Box
      component="form"
      sx={{ m: 1, width: '100%'}}
      noValidate
      autoComplete="off"
    >
      <h2>Nhập thông tin sinh viên</h2>
      <Box width={'100%'}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              required
              onChange={handleChangeName}
              id="outlined-required"
              label="Họ và tên"
              defaultValue=""
            />  
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              required
              onChange={handleChangeStudentId}
              id="outlined-required"
              label="MSSV"
              defaultValue=""
            />  
          </Grid>
          
          <Grid item xs={2}>
            <TextField
              fullWidth
              required
              onChange={handleChangeGroup}
              id="outlined-required"
              label="Lớp"
              defaultValue=""
            />  
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="major-label">Khoa</InputLabel>
                <Select
                  align="left"
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
          </Grid>
          <Grid item xs={3}> 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker format="DD-MM-YYYY" id = 'dob' label="Ngày sinh" onChange={handleChangeDob}/>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4}> 
            <TextField
              fullWidth
              required
              onChange={handleChangeAddress}
              id="outlined-required"
              label="Địa chỉ"
              defaultValue=""
            />  
          </Grid>
        </Grid>
      </Box>
      <Button onClick={handleSubmit} variant="contained">Thêm sinh viên</Button>
    </Box>
  );
}

export default AddStudent;
