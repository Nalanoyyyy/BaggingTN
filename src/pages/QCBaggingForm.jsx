// pages/QCBagging.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import QCTableSection from '../components/QC/QCTableSection';
import SearchMenuButton from '../components/QC/SearchMenuButton';
import QCTopBar from '../components/QC/QCTopBar';

const PageWrapper = styled.div`
  padding: 40px;
  font-family: 'IBM Plex Sans Thai', sans-serif;
  background-color: #fff;
    padding: 40px;
    min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #f7f7f7;
  font-family: 'IBM Plex Sans Thai', sans-serif;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

function QCBaggingForm() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [rawData] = useState([
    { id: 'QC-001', product: 'ถุง 5 กก.', result: 'ผ่าน', date: '2025-06-25' },
    { id: 'QC-002', product: 'ถุง 10 กก.', result: 'ไม่ผ่าน', date: '2025-06-24' },
    { id: 'QC-003', product: 'ถุง 1 กก.', result: 'ผ่าน', date: '2025-06-23' },
  ]);

  useEffect(() => {
    document.title = 'QC - Bagging | ThaiNam';
  }, []);

  const handleSearch = ({ keyword, year }) => {
    const filtered = rawData.filter(
      (item) =>
        (!keyword || item.id.toLowerCase().includes(keyword.toLowerCase())) &&
        (!year || item.date.startsWith(year))
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <ContentWrapper>
        <Sidebar isOpen={sidebarOpen} />
        <MainContent>
          <QCTopBar onSearch={handleSearch} />

          <QCTableSection
            tableTitle="รายการตรวจสอบ QC (Bagging)"
            data={filteredData}
          />
        </MainContent>
      </ContentWrapper>
    </>
  );
}

export default QCBaggingForm;