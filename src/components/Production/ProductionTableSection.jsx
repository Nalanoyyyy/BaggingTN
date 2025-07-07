import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProductionAddModal from './ProductionAddModal';
import SearchMenubutton from './SearchMenuButton';
import ProductionTopBar from './ProductionTopBar';

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
  { id: '16952', prodDate: '12-06-2025',prodOrderNo: '25-2879', productCode: 'LP2621-01-02', jobtype: 'กราเวีย',customer: 'บริษัท BlingBling จำกัด', job: 'ซองปลาเส้น รสหมึกย่างสไปซี่ 350 กรัม', machineID: 'BG-12', productionQty: '1,300 เมตร', orderQty: '5,000 PIECE', jobDetail: 'พิมพ์ล่าง', jobFormat: '-', status: 'อนุมัติ', formatType: 'งานเก่าแก้ไขแบบ',},
  { id: '17485', prodDate: '12-06-2025',prodOrderNo: '25-2855', productCode: 'LP2611-02-03', jobtype: 'ดิจิตอล',customer: 'บริษัท BlingBling จำกัด', job: 'ซองปลาเส้น 200 กรัม รสดั้งเดิม', machineID: 'BG-11', productionQty: '7,000 เมตร', orderQty: '40,000 PIECE', jobDetail: 'พิมพ์ล่าง', jobFormat: 'Trun Bar', status: 'อนุมัติ', formatType: 'งานใหม่',},
  { id: '18596', prodDate: '11-06-2025',prodOrderNo: '25-2840', productCode: 'LP2578-02-02', jobtype: 'กราเวีย',customer: 'บริษัท อยู่ดีมีสุข จำกัด', job: 'ซองลูกอมรสโคล่า', machineID: 'BG-13', productionQty: '6500 เมตร', orderQty: '34,000 PIECE', jobDetail: 'พิมพ์ล่าง', jobFormat: '-', status: 'อนุมัติ', formatType: 'งานเก่า',},
  { id: '16698', prodDate: '11-06-2025',prodOrderNo: '25-2824', productCode: 'LP2428-03-02', jobtype: 'ดิจิตอล',customer: 'บริษัท ทิพย์รัตน์ จำกัด', job: 'ซองก๋วยเตี๋ยวเรือ 350 กรัม', machineID: 'BG-2', productionQty: '3,100 เมตร', orderQty: '100,000 PIECE', jobDetail: 'พิมพ์บน', jobFormat: 'Turn Bar', status: 'อนุมัติ', formatType: 'งานใหม่',},
  { id: '17584', prodDate: '11-06-2025',prodOrderNo: '25-2815', productCode: 'DP2589-01-04', jobtype: 'ไม่มีพิมพ์',customer: 'บริษัท Sharked จำกัด', job: 'ซองซีล 3 ด้าน ปลาหมึกอบกรอบ', machineID: 'BG-7', productionQty: '3,500 เมตร', orderQty: '10,000 PIECE', jobDetail: '-', jobFormat: '-', status: 'อนุมัติ', formatType: 'งานเก่าแก้ไขแบบ',},
  { id: '17149', prodDate: '10-06-2025',prodOrderNo: '25-2806', productCode: 'DP2546-01-01', jobtype: 'กราเวีย',customer: 'บริษัท GoodCoffee จำกัด', job: 'ซองถั่วลิสงป่น ตราทิพย์', machineID: 'BG-5', productionQty: '7,500 เมตร', orderQty: '50,000 PIECE', jobDetail: 'พิมพ์ล่าง', jobFormat: '-', status: 'อนุมัติ', formatType: 'งานเก่า',},
  { id: '17127', prodDate: '10-06-2025',prodOrderNo: '25-2801', productCode: 'LP2127-02-01', jobtype: 'ดิจิตอล',customer: 'บริษัท Goodtimer จำกัด', job: 'ซองตั้งติดจุกครีมกันแดด', machineID: 'BG-8', productionQty: '1,500 เมตร', orderQty: '15,000 PIECE', jobDetail: 'พิมพ์บน', jobFormat: 'Turn Bar', status: 'อนุมัติ', formatType: 'งานใหม่',},
];

function ProductionTableSection({ filters }) {
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
              <Th>เลขที่ใบสั่งผลิต</Th>
              <Th>รหัสสินค้า</Th>
              <Th>ชื่องาน</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <Row key={item.id} onClick={() => setSelectedOrder(item)}>
                <Td>{item.id}</Td>
                <Td>{item.prodOrderNo}</Td>
                <Td>{item.productCode}</Td>
                <Td>{item.job}</Td>

              </Row>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
      <ProductionAddModal
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        data={selectedOrder}
      />
    </>
  );
}
export default ProductionTableSection;
