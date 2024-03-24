import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Auth() {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      gap: 2,
      width: 600,
      height: 400,
      margin: 'auto',
      padding: 2,
      border: '1px solid #ccc',
      borderRadius: 4,
      boxShadow: '0 0 5px rgba(0,0,0,0.1)'
    
    }}>
      <Typography variant="h4" component="h4">
        Đăng nhập
      </Typography>
      <Container>
      <Stack direction="row" spacing={2} justifyContent="center">
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" aria-describedby="email-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" aria-describedby="password-text" />
        </FormControl>
      </Stack>
      </Container>

      <Stack direction="row" spacing={2}>
        <Button variant="contained">Đăng nhập</Button>
        <Button variant="contained" disabled>
          Quên mật khẩu
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Đăng ký
        </Button>
      </Stack>
    </Container>
  );
}

export default Auth;