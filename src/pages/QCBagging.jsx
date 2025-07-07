import { useState, useEffect } from 'react';
import styled from 'styled-components';
import QCTopBar from '../components/QC/QCTopBar';
import QCTableSection from '../components/QC/QCTableSection';
import SearchMenuButton from '../components/QC/SearchMenuButton';

const PageContainer = styled.div`
  background-color: #f8f8f8;
  min-height: 100vh;
  padding: 24px;
`;

function QCBagging() {
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    document.title = 'QC - Bagging | ThaiNam';
  }, []);

  return (
    <PageContainer>
      <QCTopBar searchButton={<SearchMenuButton onSearch={setFilters} />} />
      <QCTableSection filters={filters} />
    </PageContainer>
  );
}

export default QCBagging;