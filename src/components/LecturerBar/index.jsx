import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import React from 'react';

import logo from '../../assets/img/logo.jpg';

const LecturerBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorNotiEl, setAnchorNotiEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const openNoti = Boolean(anchorNotiEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleNotiClick = (event) => setAnchorNotiEl(event.currentTarget);
  const handleNotiClose = () => setAnchorNotiEl(null);

  const handleSignOut = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  const notiId = openNoti ? 'notifications-popover' : undefined;

  return (
    <Box sx={{
      width: '100%',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
      paddingX: 8,
      overflowX: 'auto',
      bgcolor: '#399be2',
      color: 'white',
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={logo} className="icon-head" />
          <a>DEF</a><a>Uni</a>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Button href="/lecturer/home" sx={{ color: 'white', }}>Trang chủ</Button>
          <Button href="/lecturer/dashboard" style={{ color: 'white', }}>Bảng điều khiển</Button>
          <Button href="/lecturer/course-register" style={{ color: 'white', }}>Đăng ký nhận lớp</Button>
          <Button href="/lecturer/courses" style={{ color: 'white', }}>Khóa học</Button>
        </Box>

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
          <NotificationsNoneIcon onClick={handleNotiClick} />
        </Badge>
        <Popover
          id={notiId}
          open={openNoti}
          anchorEl={anchorNotiEl}
          onClose={handleNotiClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box sx={{ width: '300px', maxHeight: '400px', display: 'flex', flexDirection: 'column', padding: 1, gap: 1 }}>
            {/* Thông báo của bạn ở đây */}
            <Typography >Thông báo 1 1111111111111111 11111111111111111111111111111 11111111111111111111111111111 11111111111111111111111111111</Typography>
            <Divider />
            <Typography >Thông báo 2</Typography>
            <Divider />
            <Typography >Thông báo 2</Typography>
            <Divider />
            <Typography >Thông báo 2</Typography>
            <Divider />
            <Typography >Thông báo 2</Typography>
            <Divider />
            <Typography >Thông báo 2</Typography>
            <Divider />
            <Typography >Thông báo 2</Typography>
            <Divider />
            <Typography >Thông báo 2</Typography>
            <Divider />
            <Typography >Thông báo 2</Typography>
            <Divider />
            <Typography >Thông báo 2</Typography>
          </Box>
        </Popover>
        <Box>
          <Button
            sx={{ color: 'white', }}
            id="basic-button-workspaces"
            aria-controls={open ? 'basic-menu-workspaces' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<ExpandMoreIcon />}
          >
            <AccountCircleIcon />
          </Button>
          <Menu
            id="basic-menu-workspaces"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-workspaces'
            }}
          >
            <MenuItem>
              <a className="dropdown-item" href="/lecturer/infor" >Thông tin cá nhân</a>
            </MenuItem>
            <Divider />
            <MenuItem>
              <a className="dropdown-item" href="" >Cài đặt</a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-item" href="" onClick={handleSignOut} >Đăng xuất</a>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default LecturerBar;
