import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import Cookies from 'universal-cookie';

function AdminBar({setView, pages}) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const cookies = new Cookies(null, { path: '/' });
  const handleSignOut = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('user');
    cookies.remove('session', { path: '/' });
    window.location.href = '/login';
  }

  return (
    <AppBar position="static" sx ={{ height: '100%' }}>
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Toolbar disableGutters sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 0,
          margin: 0,
          height: '100%',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AdbIcon sx={{ display: 'flex', mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DEF
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', width: '50%', height: '100%', justifyContent: 'space-around' }}>
            <Button
              key={'student'}
              href='/admin/student'
              sx={{ padding: '5% 0 5% 0', color: 'white', display: 'block', width: '50%', height: '100%', borderRadius: 0}}
            >
              Sinh viên
            </Button>
            <Button
              key={'lecturer'}
              href='/admin/lecturer'
              sx={{ padding: '5% 0 5% 0', color: 'white', display: 'block', width: '50%', height: '100%', borderRadius: 0}}
            >
              Giảng viên
            </Button>
            <Button
              key={'courses'}
              href='/admin/courses'
              sx={{ padding: '5% 0 5% 0', color: 'white', display: 'block', width: '50%', height: '100%', borderRadius: 0}}
            >
              Khóa học
            </Button>
          </Box>

          <Button
              sx={{ color: 'white', display: 'block', width: '40px', height: '100%', borderRadius: 0}}
              onClick={handleSignOut}
            >
              Đăng xuất
            </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AdminBar;