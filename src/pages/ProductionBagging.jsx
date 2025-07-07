import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DepartmentTopBar from '@/components/Production/ProductionTopBar';
import DepartmentTableSection from '@/components/Production/ProductionTableSection';
import SearchMenuButton from '../components/Production/SearchMenuButton';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: #f8f8f8;
  overflow: auto;
`;

function ProductionBagging() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    document.title = 'ฝ่ายผลิต - Bagging | ThaiNam';
    console.log('Loaded: ProductionBagging');
  }, []);

  return (
    <PageContainer>
      <ContentWrapper>
        <DepartmentTopBar
          onAdd={() => navigate('/production/Abagging')}
          searchButton={<SearchMenuButton onSearch={setFilters} />}
        />
        <DepartmentTableSection filters={filters} />
      </ContentWrapper>
    </PageContainer>
  );
}

export default ProductionBagging;