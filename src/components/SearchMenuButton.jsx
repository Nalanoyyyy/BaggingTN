import React, { useState } from 'react';
import styled from 'styled-components';


const MenuButton = styled.button`
  background-color: #fff;
  border: 2px solid #333;
  font-size: 20px;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
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
  display: flex;
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

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-family: 'IBM Plex Sans Thai', sans-serif;
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
  const [type, setType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const handleSearch = () => {
    onSearch?.({ keyword, type,date: selectedDate, year, month });
    setOpen(false);
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <MenuButton onClick={() => setOpen(!open)}>🔍</MenuButton>
      {open && (
        <SearchBox>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="เลขที่ใบสั่งขาย"
          />
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">ประเภทงาน</option>
            <option value="No print">ไม่มีพิมพ์</option>
            <option value="Gravure">กราเวีย</option>
            <option value="Digital">ดิจิตอล</option>
          </Select>
          <Select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">ปี</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </Select>
          <Select value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">เดือน</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                {i + 1}
              </option>
            ))}
          </Select>
          <SearchBtn onClick={handleSearch}>ค้นหา</SearchBtn>
        </SearchBox>
      )}
    </div>
  );
}

export default SearchMenuButton;