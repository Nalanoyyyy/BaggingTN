import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import TableSection from '../components/TableSection';
import SearchMenuButton from '../components/SearchMenuButton';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column; 
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: #f8f8f8;
  overflow: auto;
`;

function ProductionOrders() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    document.title = 'ใบสั่งผลิตทั่วไป | ThaiNam';
  }, []);

  const handleAddClick =() => {
    navigate('/new-order-form');
  };
  return (
    <PageContainer>
      <Sidebar />
      <ContentWrapper>
        <TopBar
          onAdd={() => navigate('/new-order-form')}
          searchButton={
            <SearchMenuButton onSearch={setFilters} />
          }
        />
        <TableSection filters={filters} />
      </ContentWrapper>
    </PageContainer>
  );
}

export default ProductionOrders;