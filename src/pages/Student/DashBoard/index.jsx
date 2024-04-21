import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

const sampleData = {
  '2024': {
    '04': {
      '01': [{ event: '1', link: '' }],
      '02': [{ event: '2', link: '' }],
      '03': [{ event: '3', link: '' }],
      '04': [{ event: '4', link: '' }],
      '05': [{ event: '5', link: '' }],
      '06': [{ event: '6', link: '' }],
      '07': [{ event: '7', link: '' }],
      '08': [{ event: '8', link: '' }],
      '09': [{ event: '9', link: '' }],
      '10': [{ event: '10', link: '' }],
      '11': [{ event: '11', link: '' }],
      '12': [{ event: '12', link: '' }],
      '13': [{ event: '13', link: '' }],
      '14': [{ event: '14', link: '' }],
      '15': [{ event: '15', link: '' }],
      '16': [{ event: '16', link: '' }],
      '17': [{ event: '17', link: '' }],
      '18': [{ event: '18', link: '' }],
      '19': [{ event: '19', link: '' }],
      '20': [{ event: '20', link: '' }],
      '21': [
        { event: 'Sự kiện 111111111', link: '' },
        { event: 'Sự kiện 2', link: '' },
        { event: 'Sự kiện 2', link: '' },
        { event: 'Sự kiện 3', link: '' },
        { event: 'Sự kiện 4', link: '' },
      ],
      '22': [{ event: 'Sự kiện 4', link: '' }],
      '25': [{ event: 'Sự kiện 6', link: '' }],
    },
    '05': {
      '12': [{ event: 'Sự kiện 10', link: '' }],
      '14': [{ event: 'Sự kiện 12', link: '' }],
    },
  },
  '2025': {
    '01': {
      '05': [{ event: 'Sự kiện 18', link: '' }],
    },
    '02': {
      '22': [{ event: 'Sự kiện 22', link: '' }],
    },
  },
};

const DashBoard = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedLink, setSelectedLink] = useState('');
  const [addEventError, setAddEventError] = useState(null);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [data, setData] = useState(sampleData);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    setYear(year);
    setMonth(month);
    setCurrentYear(year);
    setCurrentMonth(month);
    setCurrentDay(day);
    setSelectedDate(day);
  }, []); // Chỉ chạy một lần khi component được tạo ra

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddEvent = () => {
    if (!selectedEvent) {
      setAddEventError('Vui lòng nhập sự kiện');
      return;
    }
    const newEvent = { event: selectedEvent, link: selectedLink || '' };
    setData(prevData => ({
      ...prevData,
      [year]: {
        ...prevData[year],
        [month]: {
          ...prevData[year]?.[month],
          [selectedDate]: [
            ...(prevData[year]?.[month]?.[selectedDate] || []),
            newEvent
          ]
        }
      }
    }));
    setSelectedEvent('');
    setSelectedLink('');
    setAddEventError(null);
    handleClose();
  };

  const checkHasData = (date) => {
    return data[year]?.[month]?.[date];
  };

  const renderEvents = (date) => {
    if (!checkHasData(date)) return null;
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflowX: 'hidden',
        maxWidth: '100%'
      }}>
        {data[year][month][date].map((item, i) => (
          <Box key={i}>
            <Link
              href={item.link}
              underline="hover"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                display: 'block',
                maxWidth: '100%'
              }}
            >
              {item.event}
            </Link>
          </Box>
        ))}
      </Box>
    );
  };

  const renderWeek = () => {
    const totalDays = new Date().getDate();
    const totalMonths = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const startDay = new Date(year, month - 1, 0).getDay();
    let firstDayOfWeek;
    if (startDay === 0) {
      firstDayOfWeek = totalDays - 6;
    } else {
      firstDayOfWeek = totalDays - startDay + 1;
    }
    const weekDays = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật',];

    return weekDays.map((day, index) => (
      <Grid item xs={1} key={day}>
        <Paper elevation={3} style={{ height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '8px' }}>
          <Typography variant="h7">{day} - {index + firstDayOfWeek}/{totalMonths}</Typography>
          {renderEvents((index + firstDayOfWeek).toString().padStart(2, '0'))}
        </Paper>
      </Grid>
    ));
  };

  const renderMonth = () => {
    const totalDays = new Date(year, month, 0).getDate();
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);

    return days.map((date) => (
      <Grid item xs={1} key={date}>
        <Paper elevation={3} style={{
          height: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '8px',
        }}>
          <Typography variant="h7">{date.toString().padStart(2, '0')}</Typography>
          {renderEvents(date.toString().padStart(2, '0'))}
        </Paper>
      </Grid>
    ));
  };

  const handleCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    setYear(year);
    setMonth(month);
    setSelectedDate(day);
  };

  const handleNextMonth = () => {
    let nextMonth = parseInt(month) + 1;
    let nextYear = parseInt(year);

    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear = nextYear + 1;
    }

    const nextMonthString = nextMonth.toString().padStart(2, '0');
    setMonth(nextMonthString);
    setYear(nextYear.toString());
    setCurrentMonth(nextMonthString); // Cập nhật currentMonth
    setCurrentYear(nextYear.toString()); // Cập nhật currentYear
  };


  const handlePreviousMonth = () => {
    let previousMonth = parseInt(month) - 1;
    let previousYear = parseInt(year);

    if (previousMonth === 0) {
      previousMonth = 12;
      previousYear = previousYear - 1;
    }

    const previousMonthString = previousMonth.toString().padStart(2, '0');
    setMonth(previousMonthString);
    setYear(previousYear.toString());
    setCurrentMonth(previousMonthString); // Cập nhật currentMonth
    setCurrentYear(previousYear.toString()); // Cập nhật currentYear
  };


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      p: '40px',
      gap: 4
    }}>
      <Typography sx={{ display: 'flex', }} variant="h4">Bảng điều khiển</Typography>

      <Box>
        <Typography sx={{ display: 'flex', }} variant="h5">Thời gian biểu</Typography>
        <Grid container spacing={0.5} columns={7}>
          {renderWeek()}
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box></Box>
        <Button sx={{ width: '150px' }} onClick={handleOpen} color="primary" variant="outlined">Thêm sự kiện</Button>
        <Box></Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button sx={{ width: '150px' }} onClick={handlePreviousMonth} color="primary" variant="outlined">Tháng trước</Button>
        <Button sx={{ width: '150px' }} onClick={handleCurrentDate} color="primary" variant="outlined">Tháng hiện tại</Button>
        <Button sx={{ width: '150px' }} onClick={handleNextMonth} color="primary" variant="outlined">Tháng sau</Button>
      </Box>

      <Box>
        <Typography sx={{ display: 'flex', }} variant="h5">Lịch của tháng {currentMonth} năm {currentYear}</Typography>
        <Grid container spacing={0.5} columns={7}>
          {renderMonth()}
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thêm sự kiện</DialogTitle>
        <DialogContent>
          <TextField
            select
            margin="dense"
            label="Ngày"
            fullWidth
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            {Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) => i + 1).map((date) => (
              <MenuItem key={date} value={date.toString()}>
                {date}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            margin="dense"
            label="Tháng"
            fullWidth
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <MenuItem key={m} value={m.toString().padStart(2, '0')}>
                {m.toString().padStart(2, '0')}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            margin="dense"
            label="Năm"
            fullWidth
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i).map((y) => (
              <MenuItem key={y} value={y.toString()}>
                {y}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="dense"
            label="Sự kiện"
            fullWidth
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Link (tùy chọn)"
            fullWidth
            value={selectedLink}
            onChange={(e) => setSelectedLink(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Hủy</Button>
          <Button onClick={handleAddEvent} color="primary">Thêm</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DashBoard;
