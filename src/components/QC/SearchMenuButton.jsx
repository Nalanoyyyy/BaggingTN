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
   z-index: 1001;
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
  z-index: 1002;
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
  position: relative;
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
    <Wrapper>
      <IconButton onClick={() => setOpen(!open)} style={{ position: 'relative', zIndex: 1001}}>
        <FaSearch />
      </IconButton>

      {open && (
        <SearchBox>
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
        </SearchBox>
      )}
    </Wrapper>
  );
}


export default SearchMenuButton;