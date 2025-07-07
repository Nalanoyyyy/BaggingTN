import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 20px;
  z-index: 9999;
`;

const IconButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: none;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;

const SearchBox = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: #d0d9ff;
  padding: 24px 20px;
  border-radius: 12px;
  border: 4px solidrgb(130, 182, 216);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 260px;
  min-height: 200px;
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  flex-direction: column;
  gap: 14px;
  z-index: 99999;
`;

const Input = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const SearchBtn = styled.button`
  padding: 10px;
  background-color: #4a4fc4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  position: relative; // ✅ สำคัญมาก!!
  z-index: 2;
`;

function SearchMenuButton({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [year, setYear] = useState('');

  const handleSearch = () => {
    onSearch?.({ keyword, year });
    setOpen(false);
  
  };

  return (
    <>
      <IconButton onClick={() => setOpen(!open)}>
        <FaSearch />
      </IconButton>

      {/* ย้าย SearchBox ออกมาแสดงท้ายสุดของหน้า */}
      {open && (
        <div style={{
          position: 'fixed',
          top: '80px',
          right: '40px',
          background: '#e0e4fa',
          padding: '24px 20px',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
          zIndex: 9999,
          width: '280px'
        }}>
          <label>เลขที่ใบสั่ง:</label>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="เลขที่ใบสั่ง"
          />
          <label>ปีที่ผลิต (25-):</label>
          <Input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="2025"
          />
          <SearchBtn onClick={handleSearch}>ค้นหา</SearchBtn>
        </div>
      )}
    </>
  );
}

export default SearchMenuButton;