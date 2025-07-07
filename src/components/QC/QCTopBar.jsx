// components/TopBar.jsx
import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaSearch } from 'react-icons/fa';
import SearchMenuButton from './SearchMenuButton';
import { useNavigate } from 'react-router-dom';

const TopBarContainer = styled.div`
  background-color: #ffffff;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'IBM Plex Sans Thai', sans-serif;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
`;

const SearchBox = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
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

const AddButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 8px 14px;
  font-size: 14px;
   font-family: 'IBM Plex Sans Thai', sans-serif;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;

const SearchButton = styled.button`
  background-color: #e0e7ff;
  color: #1e1e1e;
  padding: 8px 14px;
  font-size: 14px;
   font-family: 'IBM Plex Sans Thai', sans-serif;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: #dbeafe;
  }
`;

export default function QCTopBar({ searchButton }) {
  return (
    <TopBarContainer>
        <Title>QC BAGGING</Title>
        <ButtonGroup>
          {searchButton} {/* ✅ ปุ่มค้นหาจริง */}
        </ButtonGroup>
    </TopBarContainer>
  );
}