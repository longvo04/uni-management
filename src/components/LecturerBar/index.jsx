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

import logo from '../../assets/img/logo.jpg';

const buttonStyle = {
  color: 'white',
};

const LecturerBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

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
          <Button href="/lecturer/home" style={buttonStyle}>Trang chủ</Button>
          {/* <Button href="/lecturer/dashboard" style={buttonStyle}>Bảng điều khiển</Button> */}
          <Button href="/lecturer/course-register" style={buttonStyle}>Đăng ký nhận lớp</Button>
          <Button href="/lecturer/courses" style={buttonStyle}>Khóa học</Button>
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
              <a className="dropdown-item" href="/lecturer/infor" >Thông tin cá nhân</a>
            </MenuItem>
            <Divider />
            <MenuItem>
              <a className="dropdown-item" href="" >Cài đặt</a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-item" href="" >Đăng xuất</a>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default LecturerBar;
