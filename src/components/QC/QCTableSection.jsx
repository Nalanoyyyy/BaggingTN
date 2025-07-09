import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AddModal from './QCAddModal';
import SearchMenuButton from '../SearchMenuButton';
import TopBar from './QCTopBar';
import Sidebar from '../Sidebar';

const TableWrapper = styled.div`
  padding: 24px 32px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #f0f0f0;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Row = styled.tr`
  &:hover {
    background-color: #f9f9f9;
  }
`;

const orders = [
  { id: '53211', prodDate: '12-06-2025',prodOrderNo: '24-5007', productCode: 'LP621-01-02', jobtype: 'กราเวีย',customer: 'บริษัท Goodtimer จำกัด', job: 'ซองถุงมือ Winny Black Size L', machineID: 'BG-12', productionQty: '12,400 เมตร', jobDetail: 'พิมพ์ล่าง', jobFormat: '-', status: 'รอดำเนินการ', },
  { id: '53210', prodDate: '12-06-2025',prodOrderNo: '24-5006', productCode: 'LP631-02-02', jobtype: 'ดิจิตอล',customer: 'บริษัท BlingBling จำกัด', job: 'ซองปลาเส้น 40 บาท รสดั้งเดิม', machineID: 'BG-11', productionQty: '5,000 เมตร', jobDetail: 'พิมพ์ล่าง', jobFormat: 'Trun Bar', status: 'รอดำเนินการ',},
  { id: '53209', prodDate: '11-06-2025',prodOrderNo: '24-5005_2', productCode: 'LP615-01-02', jobtype: 'กราเวีย',customer: 'บริษัท อยู่ดีมีสุข จำกัด', job: 'ซองถั่วแดง Jead Dragon 400 g.', machineID: 'BG-13', productionQty: '6500 เมตร', jobDetail: 'พิมพ์ล่าง', jobFormat: '-', status: 'รอดำเนินการ',},
  { id: '53208', prodDate: '11-06-2025',prodOrderNo: '24-5004', productCode: 'LP628-03-02', jobtype: 'ดิจิตอล',customer: 'บริษัท ทิพย์รัตน์ จำกัด', job: 'ซองก๋วยเตี๋ยวเรือ Golden Hour', machineID: 'BG-2', productionQty: '8,000 เมตร', jobDetail: 'พิมพ์บน', jobFormat: 'Turn Bar', status: 'รอดำเนินการ',},
  { id: '53207', prodDate: '11-06-2025',prodOrderNo: '24-5003', productCode: 'LP3435-03-04', jobtype: 'ไม่มีพิมพ์',customer: 'บริษัท Sharked จำกัด', job: 'ซองซีล 3 ด้าน ปลาหมึกอบกรอบ', machineID: 'BG-7', productionQty: '24,000 เมตร', jobDetail: '-', jobFormat: '-', status: 'รอดำเนินการ',},
  { id: '53206', prodDate: '10-06-2025',prodOrderNo: '24-5002', productCode: 'LP789-01-02', jobtype: 'กราเวีย',customer: 'บริษัท GoodCoffee จำกัด', job: 'ซองถั่วลิสงป่น ตราทิพย์', machineID: 'BG-5', productionQty: '9,500 เมตร',jobDetail: 'พิมพ์ล่าง', jobFormat: 'ระเบิดผิว', status: 'รอดำเนินการ',},
  { id: '53205', prodDate: '10-06-2025',prodOrderNo: '24-5001', productCode: 'LP127-01-01', jobtype: 'ดิจิตอล',customer: 'บริษัท Goodtimer จำกัด', job: 'ซองสาหร่ายอบกรอบ', machineID: 'BG-8', productionQty: '10,000 เมตร', jobDetail: 'พิมพ์บน', jobFormat: '-', status: 'รอดำเนินการ',},
];

function QCTableSection({ filters }) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filtered = orders.filter((order) => {
    if (!filters) return true;

    const matchKeyword = filters.keyword
      ? order.prodOrderNo.includes(filters.keyword) 
      : true;
    const matchYear = filters.year ? order.prodDate.startsWith(filters.year) : true;

    return matchKeyword && matchYear;

  });

  return (
    <>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>ลำดับ</Th>
              <Th>วันที่ผลิต</Th>
              <Th>เลขที่ใบสั่งผลิต</Th>
              <Th>รหัสสินค้า</Th>
              <Th>ชื่องาน</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <Row key={item.id} onClick={() => setSelectedOrder(item)}>
                <Td>{item.id}</Td>
                <Td>{item.prodDate}</Td>
                <Td>{item.prodOrderNo}</Td>
                <Td>{item.productCode}</Td>
                <Td>{item.job}</Td>
              </Row>
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      <AddModal
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        data={selectedOrder}
      />
    </>
  );
}
export default QCTableSection;
