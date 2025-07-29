import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/ThaiNamLogo.png';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? '220px' : '0')}; 
  overflow-x: hidden;
  transition: width 0.3s ease;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid #ccc;
  position: fixed;
  top: 64px;
  left: 0;
  z-index: 900;
`;

const Logo = styled.img`
  width: 80px;
  margin: 24px auto;
  display: block;
`;

const Section = styled.div`
  font-weight: bold;
  padding: 12px 20px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const SubMenu = styled.div`
  padding-left: 32px;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const SubItem = styled(NavLink)`
  display: block;
  padding: 8px 0;
  color: #333;
  text-decoration: none;

  &.active {
    font-weight: bold;
    color: #4a4fc4;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Overlay = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  top: 0;
  left: 0;
  z-index: 998;

  @media (min-width: 768px) {
    display: none;
  }
`;

function Sidebar({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState('วางแผน');

  const toggleSection = (key) => {
    setOpenSection(openSection === key ? '' : key);
  };

  return (
    <>
      <Overlay show={isOpen} onClick={onClose} />
      <SidebarContainer isOpen={isOpen}>
        {isOpen && (
          <>
            <Logo src={logo} alt="Logo" />
            <Section onClick={() => toggleSection('วางแผน')}>
              วางแผน <span>{openSection === 'วางแผน' ? '▾' : '▸'}</span>
            </Section>
            <SubMenu open={openSection === 'วางแผน'}>
              <SubItem to="/orders">ใบสั่งผลิตทั่วไป</SubItem>
              <SubItem to="/trial">ใบสั่งผลิตงานทดลอง</SubItem>
              <SubItem to="/schedule">ลำดับการผลิต</SubItem>
              <SubItem to="/stock">ใบสั่งคงค้างการผลิต</SubItem>
            </SubMenu>

            <Section onClick={() => toggleSection('QC')}>
              QC <span>{openSection === 'QC' ? '▾' : '▸'}</span>
            </Section>
            <SubMenu open={openSection === 'QC'}>
              <SubItem to="/qc/printing">Printing</SubItem>
              <SubItem to="/qc/drylaminate1">Dry 1</SubItem>
              <SubItem to="/qc/drylaminate2">Dry 2</SubItem>
              <SubItem to="/qc/drylaminate3">Dry 3</SubItem>
              <SubItem to="/qc/extrusion1">Ext 1</SubItem>
              <SubItem to="/qc/extrusion2">Ext 2</SubItem>
              <SubItem to="/qc/slitting">Slitting</SubItem>
              <SubItem to="/qc/bagging">Bagging</SubItem>
            </SubMenu>

            <Section onClick={() => toggleSection('กรอพิมพ์ใหญ่')}>
              กรอพิมพ์ใหญ่ <span>{openSection === 'กรอพิมพ์ใหญ่' ? '▾' : '▸'}</span>
            </Section>
            <SubMenu open={openSection === 'กรอพิมพ์ใหญ่'}>
              <SubItem to="/gor/digital">Digital</SubItem>
              <SubItem to="/gor/printing">Printing</SubItem>
              <SubItem to="/gor/drylaminate1">Dry 1</SubItem>
              <SubItem to="/gor/drylaminate2">Dry 2</SubItem>
              <SubItem to="/gor/drylaminate3">Dry 3</SubItem>
              <SubItem to="/gor/extrusion1">Ext 1</SubItem>
              <SubItem to="/gor/extrusion2">Ext 2</SubItem>
              <SubItem to="/gor/slitting">Slitting</SubItem>
              <SubItem to="/gor/bagging">Bagging</SubItem>
            </SubMenu>

            <Section onClick={() => toggleSection ('ฝ่ายผลิต')}>
              ฝ่ายผลิต <span>{openSection === 'ฝ่ายผลิต'? '▾' : '▸'}</span>
            </Section>
            <SubMenu open={openSection === 'ฝ่ายผลิต'}>
              <SubItem to="/production/digital">Digital</SubItem>
              <SubItem to="/production/printing">Printing</SubItem>
              <SubItem to="/production/drylaminate1">Dry 1</SubItem>
              <SubItem to="/production/drylaminate2">Dry 2</SubItem>
              <SubItem to="/production/drylaminate3">Dry 3</SubItem>
              <SubItem to="/production/extrusion1">Ext 1</SubItem>
              <SubItem to="/production/extrusion2">Ext 2</SubItem>
              <SubItem to="/production/slitting">Slitting</SubItem>
              <SubItem to="/production/bagging">Bagging</SubItem>
            </SubMenu>

            <Section onClick={() => toggleSection('ข้อมูล')}>
              ข้อมูล <span>{openSection === 'ข้อมูล'? '▾' : '▸'}</span>
            </Section>
            <SubMenu open={openSection === 'ข้อมูล'}>
              <SubItem to="/ข้อมูล/productionMapping">ผังติดตามการผลิต</SubItem>
            </SubMenu>
          
            <Section onClick={() => toggleSection('ใบสั่งจบการผลิต')}>
              ใบสั่งจบการผลิต <span>{openSection === 'ใบสั่งจบการผลิต'? '▾' : '▸'}</span>
            </Section>
            <SubMenu open={openSection === 'ใบสั่งจบการผลิต'}>
              <SubItem to="/ใบสั่งจบการผลิต/digital">Digital</SubItem>
              <SubItem to="/ใบสั่งจบการผลิต/printing">Printing</SubItem>
              <SubItem to="/ใบสั่งจบการผลิต/drylaminate1">Dry 1</SubItem>
              <SubItem to="/ใบสั่งจบการผลิต/drylaminate2">Dry 2</SubItem>
              <SubItem to="/ใบสั่งจบการผลิต/drylaminate3">Dry 3</SubItem>
              <SubItem to="/ใบสั่งจบการผลิต/extrusion1">Ext 1</SubItem>
              <SubItem to="/ใบสั่งจบการผลิต/extrusion2">Ext 2</SubItem>
              <SubItem to="/ใบสั่งจบการผลิต/siltting">Slitting</SubItem>
              <SubItem to="/ใบสั่งจบการผลิต/bagging">Bagging</SubItem>
            </SubMenu>
      
            <Section onClick={() => toggleSection('ของเสีย')}>
              ของเสีย <span>{openSection === 'ของเสีย'? '▾' : '▸'}</span>
            </Section>
            <SubMenu open={openSection === 'ของเสีย'}>
              <SubItem to="/ของเสีย/setupWaste">ของเสียตั้งงาน</SubItem>
              <SubItem to="/ของเสีย/processWaste">ของเสียกระบวนการ</SubItem>
              <SubItem to="/ของเสีย/returnedWaste">ของเสียส่งคืน</SubItem>
            </SubMenu>

            <Section onClick={() => toggleSection('รายงาน')}> 
              รายงาน <span>{openSection === 'รายงาน'? '▾' : '▸'}</span>
            </Section>
            <SubMenu open={openSection === 'รายงาน'}>
              <SubItem to="/รายงาน/monthlyReport">ประจำเดือน</SubItem>
              <SubItem to="/รายงาน/monthlyStats">สถิติ</SubItem>
              <SubItem to="/รายงาน/processWaste">ของเสียกระบวนการ</SubItem>
              <SubItem to="/รายงาน/returnedWaste">ของเสียส่งคืน</SubItem>
            </SubMenu>
          </>
        )}
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
