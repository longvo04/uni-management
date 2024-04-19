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

const sampleData = {
  '2024': {
    '04': {
      '15': [
        { event: 'Sự kiện 1', link: '' },
        { event: 'Sự kiện 2', link: 'https://example.com' },
        { event: 'Sự kiện 2', link: 'https://example.com' },
        { event: 'Sự kiện 3', link: '' },
        { event: 'Sự kiện 2', link: 'https://example.com' },
      ],
      '17': [{ event: 'Sự kiện 4', link: '' }],
      '19': [{ event: 'Sự kiện 6', link: '' }],
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
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState((new Date().getMonth() + 1).toString());
  const [data, setData] = useState(sampleData);

  const handleOpen = (date) => {
    setSelectedDate(date);
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
      <ul>
        {data[year][month][date].map((item, i) => (
          <li key={i}>
            <a href={item.link}>{item.event}</a>
          </li>
        ))}
      </ul>
    );
  };

  const renderWeek = () => {
    const startDay = new Date(year, month - 1, 1).getDay() || 7;
    const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
    return days.map((day, index) => (
      <Grid item xs={1} key={day}>
        <Paper elevation={3} style={{ height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '8px' }}>
          <Typography variant="h7">{day}</Typography>
          {data[year]?.[month]?.[index + 1] && (
            <ul>
              {data[year][month][index + 1].map((item, i) => (
                <li key={i}>
                  <a href={item.link}>{item.event}</a>
                </li>
              ))}
            </ul>
          )}
        </Paper>
      </Grid>
    ));
  };

  const renderMonth = () => {
    const totalDays = new Date(year, month, 0).getDate();
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);

    return days.map((date) => (
      <Grid item xs={1} key={date}>
        <Paper elevation={3} style={{ height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '8px' }}>
          <Typography variant="h7">{date}</Typography>
          {renderEvents(date)}
        </Paper>
      </Grid>
    ));
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

      <Box>
        <Button onClick={() => handleOpen()} color="primary" variant="outlined">Thêm sự kiện</Button>
      </Box>

      <Box>
        <Typography sx={{ display: 'flex', }} variant="h5">Lịch</Typography>
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
