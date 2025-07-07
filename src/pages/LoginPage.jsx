import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/ThaiNamLogo.png';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ccd0f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  background-color: #ffffff;
  padding: 48px 36px;
  border-radius: 18px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Logo = styled.img`
  width: 56px;
  margin-bottom: 18px;
`;

const Title = styled.h2`
  font-size: 22px;
  color: #222;
  font-weight: 600;
  margin-bottom: 28px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  padding-right: 48px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  font-family: 'IBM Plex Sans Thai', sans-serif;

  &:focus {
    border-color: #4a4fc4;
    outline: none;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: 14px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #555;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #4a4fc4;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #2f34b0;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 12px;
`;

function LoginPage({setIsLoggedIn}) {
  useEffect(() => {
    document.title = 'เข้าสู่ระบบ | ThaiNam';
  },[]);

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();
  console.log('กด login แล้ว');

  if (username === 'admin' && password === '1234') {
    console.log('เข้าสู่ระบบสำเร็จ');
    setIsLoggedIn(true);
    navigate('/orders');
  } else {
    console.log('รหัสผ่านผิด');
    setErrorMsg('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
  }
};

  return (
    <Container>
      <LoginBox>
        <Logo src={logo} alt="logo" />
        <Title>เข้าสู่ระบบ</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <PasswordWrapper>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleButton onClick={() => setShowPassword(!showPassword)}>
            </ToggleButton>
          </PasswordWrapper>

          {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

          <Button type="submit">LOGIN</Button>
        </form>
      </LoginBox>
    </Container>
  );
}

export default LoginPage;