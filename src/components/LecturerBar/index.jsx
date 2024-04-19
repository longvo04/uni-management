import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../assets/img/logo.jpg';

const LecturerBar = () => {
  return (
    <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand h1" href="/student">
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
