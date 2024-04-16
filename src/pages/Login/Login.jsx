import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log('Role:', role);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/path-to-your-logo.png" alt="Logo" className="school-logo" />

        <select value={role} onChange={handleRoleChange} className="role-select">
          <option value="">Chọn vai trò</option>
          <option value="student">Sinh viên/Giáo viên</option>
          <option value="admin">Quản trị viên</option>
        </select>

        {role === 'student' && (
          <>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={handleUsernameChange}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={handlePasswordChange}
              className="input-field"
            />
          </>
        )}

        <button onClick={handleSubmit} className="login-button">Đăng nhập</button>
      </div>
    </div>
  );
};

export default Login;
