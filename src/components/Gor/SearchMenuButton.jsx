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

  const handleSearch = () => {
    onSearch?.({ keyword, type,date: selectedDate,});
    setOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <MenuButton onClick={() => setOpen(!open)}>🔍</MenuButton>
      {open && (
        <SearchBox>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="เลขที่ใบสั่งผลิต"
          />

          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">ประเภทงาน</option>
            <option value="กราเวีย">กราเวีย</option>
            <option value="ดิจิตอล">ดิจิตอล</option>
          </Select>

          <Select value={type} onChange={(e) => setMachineType(e.target.value)}>
            <option value="">เครื่อง</option>
            <option value="DP">DP</option>
            <option value="PT-03 TW2">PT-03 TW2</option>
            <option value="PT-04 (TOSHIBA)">PT-04 (TOSHIBA)</option>
            <option value="PT-05 TW3">PT-05 TW3</option>
            <option value="PL-01TW1">PL-01TW1</option>
            <option value="SR-1">SR-1</option>
            <option value="SR-2">SR-2</option>
            <option value="SR-3">SR-3</option>
          </Select>

          <Select value={type} onChange={(e) => setDepartmentType(e.target.value)}>
            <option value="Department">แผนก</option>
            <option value="Digital">ดิจิตอล</option>
            <option value="Printing Department">พิมพ์ใหญ่</option>
            <option value="Dry 1">Dry 1</option>
            <option value="Dry 2">Dry 2</option>
            <option value="Dry 3">Dry 3</option>
            <option value="Ext 1">Ext 1</option>
            <option value="Ext 2">Ext 2</option>
            <option value="Slitting">สลิต</option>
            <option value="Bagging">ทำซอง</option>
          </Select>

          <Select value={type} onChange={(e) => setgorPrintType(e.target.value)}>
            <option value="Printwork">ประเภทงานพิมพ์</option>
            <option value="blast">ระเบิดผิว</option>
          </Select>

          <SearchBtn onClick={handleSearch}>ค้นหา</SearchBtn>
        </SearchBox>
      )}
    </div>
  );
}

export default SearchMenuButton;