import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Cookies from 'universal-cookie'
import logo from '../../assets/img/logo.jpg';

const buttonStyle = {
  color: 'white',
};

const StudentBar = () => {
  const cookies = new Cookies(null, { path: '/' });
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const handleSignOut = () => {
    console.log('sign out')
    localStorage.removeItem('uid');
    localStorage.removeItem('user');
    cookies.remove('session', { path: '/' });
    window.location.href = '/login';
  }

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
          <Button href="/student/home" style={buttonStyle}>Trang chủ</Button>
          <Button href="/student/dashboard" style={buttonStyle}>Bảng điều khiển</Button>
          <Button href="/student/course-register" style={buttonStyle}>Đăng ký môn học</Button>
          <Button href="/student/courses" style={buttonStyle}>Khóa học</Button>
        </Box>

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
          <NotificationsNoneIcon />
        </Badge>
        <Box>
          <Button
            style={buttonStyle}
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
              <a className="dropdown-item" href="/student/infor" >Thông tin cá nhân</a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-item" href="/student/progress" >Tiến trình học tập</a>
            </MenuItem>
            <Divider />
            <MenuItem>
              <a className="dropdown-item" href="" >Cài đặt</a>
            </MenuItem>
            <MenuItem>
              <div onClick={handleSignOut} className="dropdown-item" href="" >Đăng xuất</div>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default StudentBar;
