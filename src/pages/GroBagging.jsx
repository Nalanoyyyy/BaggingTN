// pages/GroBagging.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GorTopBar from '../components/Gor/GorTopbar';
import GorTableSection from '../components/Gor/GorTableSectionX';
import SearchMenuButton from '../components/Gor/SearchMenuButton';

const PageWrapper = styled.div`
  padding: 40px;
  font-family: 'IBM Plex Sans Thai', sans-serif;
  background-color: #fff;
    padding: 40px;
    min-height: 100vh;
`;


function GroBagging() {
  const [filters, setFilters] = useState(null);

useEffect(() => {
    document.title = 'กรอพิมพ์ - Bagging | ThaiNam';
    console.log('Loaded: GroBagging');
  }, []);

  return (
    <PageWrapper>
      <GorTopBar onSearch={setFilters} />
      <GorTableSection filters={filters} />
    </PageWrapper>
  );
}

export default GroBagging;