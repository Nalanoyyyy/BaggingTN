import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/ThaiNamLogo.png'; // เปลี่ยน path ตามที่เก็บโลโก้

const NavbarContainer = styled.div`
  height: 64px;
  background-color: #cfd1f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
`;

const MenuToggle = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-right: 16px;
`;

const Logo = styled.img`
  height: 36px;
`;

const AvatarWrapper = styled.div`
  position: relative;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background: #aa3355;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 160px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  & > div {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background: #f2f2f2;
    }
  }
`;

function Navbar({ onToggleSidebar }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <NavbarContainer>
      <LeftGroup>
        <MenuToggle onClick={onToggleSidebar}>☰</MenuToggle>
        <Logo src={logo} alt="Logo" />
      </LeftGroup>

      <AvatarWrapper ref={ref}>
        <Avatar onClick={() => setOpen(!open)}>A</Avatar>
        {open && (
          <Dropdown>
            <div>ผู้ใช้งาน : Admin</div>
            <div>ออกจากระบบ</div>
          </Dropdown>
        )}
      </AvatarWrapper>
    </NavbarContainer>
  );
}

export default Navbar;