import React from 'react';
import styled from 'styled-components';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #4a4fc4;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #2f34b0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  min-width: 300px;
  max-width: 500px;
`;
const CloseButton = styled.button`
  background: #d9534f;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  float: right;
`;

const Row = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  background: ${({ color }) => color || '#4a4fc4'};
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  color: white;
  font-weight: bold;
  background-color: ${({ status }) => {
    switch (status) {
      case 'Approved':
        return '#2196f3'; // น้ำเงิน
      case 'Cancelled':
        return '#f44336'; // แดง
      case 'finish':
        return '#4caf50'; // เขียว
      default:
        return '#9e9e9e'; // เทา สำหรับ "รอดำเนินการ" หรืออื่นๆ
    }
  }};
`;

function AddModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>รายละเอียดใบสั่งผลิต</h2>

        <Row><Bold>เลขที่ใบสั่ง:</Bold> {data.id}</Row>
        <Row><Bold>วันที่:</Bold> {data.date}</Row>
        <Row><Bold>กำหนดส่ง:</Bold> {data.duaDate}</Row>
        <Row><Bold>เลขที่ใบสั่งขาย:</Bold> {data.sale}</Row>
        <Row><Bold>ประเภทงาน:</Bold> {data.jobtype}</Row>
        <Row><Bold>ชื่องาน:</Bold> {data.job}</Row>
        <Row><Bold>ชื่อลูกค้า:</Bold> {data.customer || '-'}</Row>
        <Row><Bold>จำนวนสั่งขาย:</Bold> {data.orderQty || '-'}</Row>
        <Row><Bold>จำนวนสั่งผลิต:</Bold> {data.productionQty || '-'}</Row>
        <Row><Bold>ลักษณะงาน:</Bold> {data.jobDetail || '-'}</Row>
        <Row><Bold>ลักษณะรูปแบบงาน:</Bold> {data.jobStyle || '-'}</Row>
        <Row><Bold>สถานะ:</Bold>{''}
        <StatusBadge status={data.status}>{data.status || 'รอดำเนินการ'}</StatusBadge> 
        </Row>
        
        <ButtonGroup>
          <Button color="#e51c23" onClick={() => window.open(data.pdfLink, '_blank')}>📄 PDF</Button>
          <Button color="#f5a623">✏️ แก้ไข</Button>
          <Button color="#7986cb">📋 คัดลอก</Button>
          <Button color="#e84e40" onClick={onClose}>❌ ปิด</Button>
        </ButtonGroup>
      </ModalContent>
    </Overlay>
  );
}

export default AddModal;