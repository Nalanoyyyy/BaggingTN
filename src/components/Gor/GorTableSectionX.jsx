import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GorAddModal from './GorAddModal';
import SearchMenuButton from './SearchMenuButton';


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
  { id: '14598', date: '12-06-2025',duaDate: '06-07-2025', prodOrderNo: '22-896_5', printType: 'กราเวีย',gorPrintType: '-', job: 'ซองซีล 3 ด้าน ยาแก้ไอรสบ๊วย', machineType: 'DP', department: 'ดิจิตอล', jobDetail: 'พิมพ์ล่าง', jobFormat: '-', status: 'finish', },
  { id: '14589', date: '12-06-2025',duaDate: '09-07-2025',prodOrderNo: '24-8956', printType: 'ดิจิตอล',gorPrintType: 'ระเบิดผิว', job: 'ฟิล์มขนมอบกรอบ 50 กรัม (สาหร่าย)', machineType: 'PT-03 TW2', department: 'พิมพ์ใหญ่', jobDetail: 'พิมพ์ล่าง', jobFormat: 'Trun Bar', status: 'finish',},
  { id: '14780', date: '11-06-2025',duaDate: '04-07-2025', prodOrderNo: '23-59_7Proof', printType: 'กราเวีย',gorPrintType: '-', job: 'ซองน้ำตาลทรายขาว 500 กรัม', machineType: 'PT-04 (TOSHIBA)', department: 'Dry 1', jobDetail: 'พิมพ์ล่าง', jobFormat: '-', status: 'approve',},
  { id: '14658', date: '11-06-2025',duaDate: '04-07-2025', prodOrderNo: '22-8923', printType: 'ดิจิตอล',gorPrintType: '-', job: 'ซองสาหร่าย 350 กรัม รสซีฟู๊ด', machineType: 'PT-05 TW3', department: 'Dry 2', jobDetail: 'พิมพ์บน', jobFormat: 'Turn Bar', status: 'finish',},
  { id: '14621', date: '11-06-2025',duaDate: '07-07-2025', prodOrderNo: '22-4589_Corona', printType: 'ดิจิตอล',gorPrintType: 'ระเบิดผิว', job: 'ซองสาหร่าย 350 กรัม รสดั้งเดิม', machineType: 'PL-01TW1', department: 'Dry 3', jobDetail: '-', jobFormat: '-', status: 'approve',},
  { id: '14236', date: '10-06-2025',duaDate: '08-07-2025', prodOrderNo: '24-5022_3', printType: 'กราเวีย',gorPrintType: '-', job: 'ซองมาส์กซีล 3 ด้าน My Face Baby', machineType: 'SR-1', department: 'Ext 1',jobDetail: 'พิมพ์ล่าง', jobFormat: 'ระเบิดผิว', status: 'finish',},
  { id: '14025', date: '10-06-2025',duaDate: '10-07-2025', prodOrderNo: '24-4545', printType: 'ดิจิตอล',gorPrintType: '-', job: 'ม้วนฟิล์มแป้งข้าวเหนียว 500 กรัม', machineType: 'SR-2', department: 'Ext 2', jobDetail: 'พิมพ์บน', jobFormat: '-', status: 'approve',},
  {id: '14020', date: '09-06-2025',duaDate: '10-07-2025', prodOrderNo: '24-4523', printType: 'ดิจิตอล',gorPrintType: '-', job: 'ซองครีมเซรั่ม 250 กรัม', machineType: 'SR-2', department: 'Ext 2', jobDetail: 'พิมพ์บน', jobFormat: '-', status: 'approve',},
  {id: '14012', date: '09-06-2025',duaDate: '10-07-2025', prodOrderNo: '24-4489', printType: 'กราเวีย',gorPrintType: 'ระเบิดผิว', job: 'ซองขนมอบกรอบ 300 กรัม', machineType: 'SR-2', department: 'Ext 2', jobDetail: 'พิมพ์บน', jobFormat: '-', status: 'approve',},
];

function GorTableSectionX({ filters }) {
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
              <Th>ลำดับ</Th>
              <Th>เลขที่ใบสั่งผลิต</Th>
              <Th>ชื่อสินค้า</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <Row key={item.id} onClick={() => setSelectedOrder(item)}>
                <Td>{item.id}</Td>
                <Td>{item.prodOrderNo}</Td>
                <Td>{item.job}</Td>
              </Row>
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      <GorAddModal
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        data={selectedOrder}
      />
    </>
  );
}
export default GorTableSectionX;