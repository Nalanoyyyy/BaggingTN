import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 20px;
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
  transition: background 0.2s ease;

  &:hover {
    background-color: #e2e2e2;
  }
`;

const SearchBox = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: #e0e4fa;
  padding: 24px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  width: 260px;
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  flex-direction: column;
  gap: 14px;
  z-index: 1000;
`;

const Input = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-family: 'IBM Plex Sans Thai', sans-serif;

  &:focus {
    outline: none;
    border-color: #4a4fc4;
    box-shadow: 0 0 0 2px rgba(74, 79, 196, 0.2);
  }
`;

const SearchBtn = styled.button`
  padding: 10px;
  background-color: #4a4fc4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  font-family: 'IBM Plex Sans Thai', sans-serif;
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
      <IconButton onClick={() => setOpen(!open)}>
        <FaSearch />
      </IconButton>

      <SearchBox $show={open}>
        <label>เลขที่ใบสั่ง:</label>
        <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />

        <SearchBtn onClick={handleSearch}>ค้นหา</SearchBtn>
      </SearchBox>
    </Wrapper>
  );
}

export default SearchMenuButton;