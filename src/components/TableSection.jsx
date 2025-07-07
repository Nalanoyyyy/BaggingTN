import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AddModal from './AddModal';
import SearchMenuButton from './SearchMenuButton'; // นำเข้าปุ่มค้นหา


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
  { id: '23012', date: '12-06-2025',duaDate: '06-07-2025', sale: '23-5211', jobtype: 'กราเวีย',customer: 'บริษัท Goodtimer จำกัด', job: 'งานซองตั้งซิป ขนมอบกรอบ ขนาด 300 กรัม', orderQty: '20,000 Piece', productionQty: '12,400 เมตร', jobDetail: 'พิมพ์ล่าง', jobFormat: '-', status: 'finish', },
  { id: '23011', date: '12-06-2025',duaDate: '09-07-2025', sale: '23-5210', jobtype: 'ดิจิตอล',customer: 'บริษัท BlingBling จำกัด', job: 'ม้วนมันฝรั่งอบกรอบ รสสาหร่าย 20 กรัม (Dry)', orderQty: '90 Roll', productionQty: '5,000 เมตร', jobDetail: 'พิมพ์ล่าง', jobFormat: 'Trun Bar', status: 'finish',},
  { id: '23009', date: '11-06-2025',duaDate: '04-07-2025', sale: '23-5209', jobtype: 'กราเวีย',customer: 'บริษัท อยู่ดีมีสุข จำกัด', job: 'ม้วนฟิล์ม MNET 14 Mic', orderQty: '120 Roll', productionQty: '6500 เมตร', jobDetail: 'พิมพ์ล่าง', jobFormat: '-', status: 'approve',},
  { id: '23005', date: '11-06-2025',duaDate: '04-07-2025', sale: '23-5208', jobtype: 'ดิจิตอล',customer: 'บริษัท ทิพย์รัตน์ จำกัด', job: 'ม้วนแป้งข้าวสาลี ตราทิพย์ 800 กรัม', orderQty: '70 Roll', productionQty: '8,000 เมตร', jobDetail: 'พิมพ์บน', jobFormat: 'Turn Bar', status: 'finish',},
  { id: '23001', date: '11-06-2025',duaDate: '07-07-2025', sale: '23-5207', jobtype: 'ไม่มีพิมพ์',customer: 'บริษัท Sharked จำกัด', job: 'ซองแวคคัมใส ซีล 3 ด้าน', orderQty: '43,000 Piece', productionQty: '24,000 เมตร', jobDetail: '-', jobFormat: '-', status: 'approve',},
  { id: '22987', date: '10-06-2025',duaDate: '08-07-2025', sale: '23-5206', jobtype: 'กราเวีย',customer: 'บริษัท GoodCoffee จำกัด', job: 'ม้วนฟิล์มครีมเทียม 500 กรัม', orderQty: '80 Roll', productionQty: '9,500 เมตร',jobDetail: 'พิมพ์ล่าง', jobFormat: 'ระเบิดผิว', status: 'finish',},
  { id: '22960', date: '10-06-2025',duaDate: '10-07-2025', sale: '23-5205', jobtype: 'ดิจิตอล',customer: 'บริษัท Goodtimer จำกัด', job: 'ม้วนยาแก้ไอ ตราสิงโต', orderQty: '100 Roll', productionQty: '10,000 เมตร', jobDetail: 'พิมพ์บน', jobFormat: '-', status: 'approve',},
];

function TableSection({ filters }) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filtered = orders.filter((order) => {
    if (!filters) return true;

    const matchKeyword = filters.keyword
      ? order.id.includes(filters.keyword) || order.sale.includes(filters.keyword)
      : true;
    const matchType = filters.type ? order.jobtype === filters.type : true;
    const matchYear = filters.year ? order.date.endsWith(filters.year) : true;
    const matchMonth = filters.month
      ? order.date.split('-')[1] === filters.month
      : true;

    return matchKeyword && matchType && matchYear && matchMonth;
  });

  return (
    <>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>รายการ</Th>
              <Th>วันที่</Th>
              <Th>กำหนดส่ง</Th>
              <Th>เลขที่ใบสั่งขาย</Th>
              <Th>ประเภทงาน</Th>
              <Th>ชื่องาน</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <Row key={item.id} onClick={() => setSelectedOrder(item)}>
                <Td>{item.id}</Td>
                <Td>{item.date}</Td>
                <Td>{item.duaDate}</Td>
                <Td>{item.sale}</Td>
                <Td>{item.jobtype}</Td>
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
export default TableSection;