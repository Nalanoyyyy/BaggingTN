// components/QC/GorTopBar.jsx
import React from 'react';
import styled from 'styled-components';
import SearchMenuButton from './SearchMenuButton';

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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


const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: 'IBM Plex Sans Thai', sans-serif;
`;

function GorTopBar({ onSearch }) {
  return (
    <TopBarContainer>
      <Title>กรอพิมพ์ BAGGING</Title>
      <SearchMenuButton onSearch={onSearch} />
    </TopBarContainer>
  );
}

export default GorTopBar;