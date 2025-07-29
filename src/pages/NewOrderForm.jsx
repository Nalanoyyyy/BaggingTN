// pages/NewOrderForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SizeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20x;
`;

const HorizontalGroup = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;
  `;

const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: 'IBM Plex Sans Thai', sans-serif;
  font-size: 14px;
  width: 150px;
  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

const InputLong = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: 'IBM Plex Sans Thai', sans-serif;
  font-size: 14px;
  width: 800px;
`; 

const Container = styled.div`
  padding: 40px;
  font-family: 'IBM Plex Sans Thai', sans-serif;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const FactoryRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`;

const FactoryButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1.5px solid #4f46e5;
  background-color: ${({ active }) => (active ? '#c7d2fe' : '#ffffff')};
  color: #000;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    background-color: #e0e7ff;
  }
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 24px 0 8px 0;
  color: #333;
`;



const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
const FormRowFourColumn = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  min-width: 100px;
`;

const XMark = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  width: 180px;
  font-family: inherit;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
`;

const NavButton = styled.button`
  padding: 10px 18px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    background-color: #4338ca;
  }

  &:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const checkboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  font-family: 'IBM Plex Sans Thai', sans-serif;

    input[type="checkbox"] {
    margin-right: 6px;
  }
    label {
    display: flex;
    align-items: center;
    gap: 16px;
  `;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  accent-color: #4f46e5;
  font-family: 'default';
`;


function NewOrderForm() {
  const navigate = useNavigate();
  const factoryList = ['PL', 'PT/DT', 'DL1', 'DL2', 'DL3', 'EL1', 'EL2', 'SL', 'BG'];
  const [index, setIndex] = useState(0);
  const [orderAmount, setOrderAmount] = useState('');
  const [unit, setState] = useState('');
  const [bagType, setBagType] = useState('');
  const [selected, setSelected] = useState([]);
  const [vcutOptions, setVcutOptions] = useState([]);
  const [multiSelect, setMultiSelect] = useState([]);
  const [singleSelect, setSingleSelect] = useState('');
  const [hasCap, setHasCap] = useState(false);
  const [showVcut, setShowVcut] = useState(false);
  const [glueSeal, setGlueSeal] = useState(false);
  const [vcutLeft, setVcutLeft] = useState(false);
  const [vcutRight, setVcutRight] = useState(false);
  const [vcutTop, setVcutTop] = useState(false);
  const [vcutBottom, setVcutBottom] = useState(false);
  
  const [formData, setFormData] = useState({
    PL: '',
    BG: '',
    bagType: '',
    productCode: '',
    productionQty: '',
    lossPercent: '',
    jobName: '',
    costumerName: '',
    deliveryDate:'',
    deliveryLocation: '',
    thickness: '',
    length: '',
    rawMaterial: '',
    totalThickness: '',
    stock: '',
    printDepartment: '',
    jobCharacteristic: '',
    jobFormat: '',
    orderType: '',
    colorCount:'',
    width:'',
    multiplySymbol:'',
    rowCount:'',
    moldCycle:'',
    moldCharacteristic:'',
    moldProcess:'',
    remark:'',
    bgStatusChecked: false,
    bgSequence:'',

  });

  const activeFactory = factoryList[index];

  const handleFinish = () => {
    const newOrder = {
      id: Date.now().toString(),
      date: new Date().toISOString().slice(0, 10),
      pl: formData.PL,
      bg: formData.BG,
      bagType: formData.bagType,
    };

    const toggleOption = (option) => {
      setSelected((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option]
      );      
    };

    const handleMultiChange = (item) => {
      setMultiSelect((prev) =>
        prev.includes(item) 
          ? prev.filter((i) => i !== item)
          : [...prev, item] 
      );
    };  

    const handleSingleChange = (item) => {
      setSingleSelect(item);
    };

    navigate('/orders', { state: { newOrder } });
  };

  return (
    <Container>
      <Title>ใบสั่งผลิตทั่วไป</Title>

      <FactoryRow>
        {factoryList.map((factory, i) => (
          <FactoryButton
            key={factory}
            active={i === index}
            onClick={() => setIndex(i)}
          >
            {factory}
          </FactoryButton>
        ))}
      </FactoryRow>

      {activeFactory === 'PL' && (
  <>
   <FormRowFourColumn>
  <FormRow>
    <Label>วันที่ :</Label>
    <Input
      type="date"
      value={formData.date}
      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
    />
  </FormRow>

  <FormRow>
    <Label>รหัสสินค้า :</Label>
    <Input
      type="text"
      value={formData.productCode}
      onChange={(e) =>
        setFormData({ ...formData, productCode: e.target.value })
      }
      placeholder="กรอกรหัสสินค้า"
    />
  </FormRow>
  <FormRow>
    
      <Label>จำนวนสั่งผลิต :</Label>
      <Input
        type="text"
        value={formData.productionQty}
        onChange={(e) =>
          setFormData({ ...formData, productionQty: e.target.value })
        }
        placeholder="0.00....."
      />
    </FormRow>

    <FormRow>
      <Label>เปอร์เซ็นสูญเสีย :</Label>
      <Input
        type="text"
        value={formData.lossPercent}
        onChange={(e) =>
          setFormData({ ...formData, lossPercent: e.target.value })
        }
        placeholder="0.00....."
      />
    </FormRow>
  </FormRowFourColumn>

  <FormRow>
      <Label>ชื่องาน :</Label>
      <InputLong
        type="text"
        value={formData.jobName}
        onChange={(e) =>
          setFormData({ ...formData, jobName: e.target.value })
        }
        placeholder="ชื่องาน"
      />
    </FormRow>

     <FormRow>
      <Label>ชื่อลูกค้า :</Label>
      <InputLong
        type="text"
        value={formData.costumerName}
        onChange={(e) =>
          setFormData({ ...formData,costumerName: e.target.value })
        }
        placeholder="ชื่อลูกค้า"
      />
    </FormRow>

    <FormRowFourColumn>
      <FormRow>
        <Label>กำหนดส่ง :</Label>
       <Input
      type="date"
      value={formData.deliveryDate}
      onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
    />
      </FormRow>

      <FormRow>
        <Label>สถานที่ส่งสินค้า :</Label>
      <Input
        type="text"
        value={formData.deliveryLocation}
        onChange={(e) =>
          setFormData({ ...formData, deliveryLocation: e.target.value })
        }
        placeholder="..."
      />
      </FormRow>

       <FormRow>
      <Label>จำนวนสั่งขาย :</Label>
      <Input
        type="number"
        value={orderAmount}
        onChange={(e) => setOrderAmount(e.target.value)}
        placeholder="ระบุจำนวน"
      />
      <Select value={formData.count} onChange={(e) => setFormData({...formData, count:gie.target.value})}>
        <option value="Piece">ชิ้น</option>
        <option value="Kg">กิโลกรัม</option>
        <option value="Roll">ม้วน</option>
        <option value="Meter">เมตร</option>
      </Select>
    </FormRow>
    </FormRowFourColumn>

    <FormRowFourColumn>
      <SizeRow>
      <Label>ขนาด :</Label>
    <Input
      type="text"
      placeholder="หนา....."
      value={formData.thickness}
      onChange={(e) => setFormData({ ...formData, thickness: e.target.value })}
    />
    <XMark>X</XMark>
    <Input
      type="text"
      placeholder="ยาว....."
      value={formData.length}
      onChange={(e) => setFormData({ ...formData, length: e.target.value })}
    />
    </SizeRow>

    <FormRow>
      <Label>วัตถุดิบ :</Label>
      <Input
        type="text"
        value={formData.rawMaterial}
        onChange={(e) =>
          setFormData({ ...formData,rawMaterial: e.target.value })
        }
        placeholder="...."
      />
    </FormRow>

    <FormRow>
      <Label>หนารวม :</Label>
      <Input
        type="text"
        value={formData.totalThickness}
        onChange={(e) =>
          setFormData({ ...formData,totalThickness: e.target.value })
        }
        placeholder="0.00..."
      />
    </FormRow>
    </FormRowFourColumn>
  
    <FormRow>
      <Label>สต็อก :</Label>
      <Input
        type="text"
        value={formData.stock}
        onChange={(e) =>
          setFormData({ ...formData,stock: e.target.value })
        }
        placeholder="0.00..."
      />
    </FormRow>

  <FormRowFourColumn>
    <FormRow>
      <Label>แผนกพิมพ์: </Label>
      <Select
        value={formData.printDepartment}
        onChange={(e) => setFormData({...formData, printDepartment: e.target.value})}
        >
          <option value="">-- เลือก --</option>
          <option value="พิมพ์ใหญ่">พิมพ์ใหญ่</option>
          <option value="พิมพ์เล็ก">พิมพ์เล็ก</option>
          <option value="พิมพ์ใหญ่ + พิมพ์เล็ก">พิมพ์ใหญ่ + พิมพ์เล็ก</option>
        </Select>
    </FormRow>

    <FormRow>
  <Label>ลักษณะงาน :</Label>
  <RadioGroup>
    <RadioLabel>
      <input
        type="radio"
        name="jobCharacteristic"
        value="งานม้วน"
        checked={formData.jobCharacteristic === 'งานม้วน'}
        onChange={(e) => setFormData({ ...formData, jobCharacteristic: e.target.value })}
      />
      งานม้วน
    </RadioLabel>

    <RadioLabel>
      <input
        type="radio"
        name="jobCharacteristic"
        value="งานซอง"
        checked={formData.jobCharacteristic === 'งานซอง'}
        onChange={(e) => setFormData({ ...formData, jobCharacteristic: e.target.value })}
      />
      งานซอง
    </RadioLabel>
  </RadioGroup>
    </FormRow>
  </FormRowFourColumn>

  <FormRow>
      <Label>รูปแบบงาน: </Label>
      <Select
        value={formData.printDepartment}
        onChange={(e) => setFormData({...formData, printDepartment: e.target.value})}
        >
          <option value="">-- เลือก --</option>
          <option value="testingWork">งานทดลอง</option>
          <option value="sampleWork">งานตัวอย่าง</option>
          <option value="oldWork">งานเก่า</option>
          <option value="newWork">งานใหม่</option>
          <option value="revisedOldWork">งานเก่าแก้ไขแบบ</option>
          <option value="proof">PROOF</option>
        </Select>
    </FormRow>

<FormRow>
  <Label>ประเภทใบสั่ง :</Label>
  <RadioGroup>
    {['งาน ISCC', 'งานทั่วไป', 'งาน GRS'].map((item) => (
      <RadioLabel key={item}>
        <input
          type="radio"
          name="orderType"
          value={item}
          checked={formData.orderType === item}
          onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
        />
        {item}
      </RadioLabel>
    ))}
  </RadioGroup>
</FormRow>
  
<SectionTitle>แผนกกราฟิก</SectionTitle>
<FormRow>
  <Label>ประเภทงานพิมพ์ :</Label>
  <RadioGroup>
    {['ดิจิตอล', 'กราเวีย', 'ไม่มีพิมพ์'].map((item) => (
      <RadioLabel key={item}>
        <input
          type="radio"
          name="printType"
          value={item}
          checked={formData.printType === item}
          onChange={(e) => setFormData({ ...formData, printType: e.target.value })}
        />
        {item}
      </RadioLabel>
    ))}
  </RadioGroup>
</FormRow>

<FormRow>
  <Label>ลักษณะ :</Label>
  <RadioGroup>
    {['พิมพ์บน', 'พิมพ์ล่าง'].map((item) => (
      <RadioLabel key={item}>
        <input
          type="radio"
          name="surface"
          value={item}
          checked={formData.surface === item}
          onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
        />
        {item}
      </RadioLabel>
    ))}
  </RadioGroup>
</FormRow>

<FormRow>
  <Label>ลักษณะรูปงาน :</Label>
  <RadioGroup>
    {['โค้ดน้ำยา', 'ระเบิดผิว', 'Turn Bar'].map((item) => (
      <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
      </RadioLabel>
    ))}
  </RadioGroup>
</FormRow>

  <FormRow>
        <Label>จำนวนสี :</Label>
      <Input
        type="text"
        value={formData.colorCount}
        onChange={(e) =>
          setFormData({ ...formData, colorCount: e.target.value })
        }
        placeholder="..."
      />
      </FormRow>

      <FormRowFourColumn>
        <FormRow>
        <Label>ขนาดแบบกว้าง :</Label>
      <Input
        type="text"
        value={formData.width}
        onChange={(e) =>
          setFormData({ ...formData, width: e.target.value })
        }
        placeholder="0.00..."
      />
      </FormRow>

      <FormRow>
        <Label>คูณ :</Label>
      <Input
        type="text"
        value={formData.multiplySymbol}
        onChange={(e) =>
          setFormData({ ...formData, multiplySymbol: e.target.value })
        }
        placeholder="0.00..."
      />
      </FormRow>

      <FormRow>
        <Label>แถว :</Label>
      <Input
        type="text"
        value={formData.rowCount}
        onChange={(e) =>
          setFormData({ ...formData, rowCount: e.target.value })
        }
        placeholder="0.00..."
      />
      </FormRow>
      </FormRowFourColumn>

      <FormRowFourColumn>
        <FormRow>
        <Label>รอบแม่พิมพ์ :</Label>
      <Input
        type="text"
        value={formData.moldCycle}
        onChange={(e) =>
          setFormData({ ...formData, moldCycle: e.target.value })
        }
        placeholder="0.00..."
      />
      </FormRow>

      <FormRow>
        <Label>คูณ :</Label>
      <Input
        type="text"
        value={formData.multiplySymbol1}
        onChange={(e) =>
          setFormData({ ...formData, multiplySymbol1: e.target.value })
        }
        placeholder="0.00..."
      />
      </FormRow>

      <FormRow>
        <Label>แถว :</Label>
      <Input
        type="text"
        value={formData.rowCount1}
        onChange={(e) =>
          setFormData({ ...formData, rowCount1: e.target.value })
        }
        placeholder="0.00..."
      />
      </FormRow>
      </FormRowFourColumn>

      <SectionTitle>แผนกแม่พิมพ์</SectionTitle>
      <FormRow>
        <Label>ลักษณะ :</Label>
      <RadioGroup>
    {['ตรวจ / เตรียม', 'งานเก่าแก้ไขแบบ', 'ทำใหม่'].map((item) => (
      <RadioLabel key={item}>
        <input
          type="radio"
          name="moldCharacteristic"
          value={item}
          checked={formData.moldCharacteristic === item}
          onChange={(e) =>
            setFormData({ ...formData, moldCharacteristic: e.target.value })
          }
        />
        {item}
      </RadioLabel>
    ))}
  </RadioGroup>
  </FormRow>

  <FormRow>
        <Label>ทำแม่พิมพ์ :</Label>
      <Input
        type="text"
        value={formData.moldProcess}
        onChange={(e) =>
          setFormData({ ...formData, moldProcess: e.target.value })
        }
        placeholder="0.00..."
      />
      </FormRow>

   <FormRow>
      <Label>หมายเหตุ :</Label>
      <InputLong
        type="text"
        value={formData.remark}
        onChange={(e) =>
          setFormData({ ...formData, remark: e.target.value })
        }
        placeholder="หมายเหตุ...."
      />
    </FormRow>

   </>
    )}

       {activeFactory === 'BG' && (
  <>
   <FormRow>
        <label>
        <input
          type="checkbox"
          checked={formData.bgStatusChecked}
          onChange={(e) =>
          setFormData({ ...formData, bgStatusChecked: e.target.checked })
      }
       />
        สถานี BG
      </label>
          <Select
            value={formData.BG}
            onChange={(e) => setFormData({ ...formData, BG: e.target.value })}
          >
            <option value="">-- ลำดับ --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>

          </Select>
        </FormRow>

        <FormRow>
          <Label>ประเภทงานพิมพ์ :</Label>
        <RadioGroup>
           {['พิมพ์เล็ก', 'พิมพ์ใหญ่'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
        </FormRow>
      
    
      <FormRowFourColumn>
      <FormRow>
        <Label>ขนาดซอง :</Label>
        <Label>กว้าง :</Label>
      <Input
        type="text"
        value={formData.wide}
        onChange={(e) =>
          setFormData({ ...formData, wide: e.target.value })
        }
        placeholder="...."
      />
      </FormRow>

      <FormRow>
        <Label>ยาว :</Label>
      <Input
        type="text"
        value={formData.long}
        onChange={(e) =>
          setFormData({ ...formData, long: e.target.value })
        }
        placeholder="..."
      />
      </FormRow>
      </FormRowFourColumn>

      {/* Dropdown for selecting bag type เลือกประเภทซอง */}
        <FormRow>
          <Label>ประเภทซอง :</Label>
          <Select value={bagType} onChange={(e) => setBagType(e.target.value)}>
            <option value="">-- เลือกประเภท --</option>
            <option value="sideSeal">ซีลข้าง</option>
            <option value="centerSeal">ซีลกลาง</option>
            <option value="3sideSeal">ซีล 3 ด้าน</option>
            <option value="4sideSeal">ซีล 4 ด้าน</option>
            <option value="dieCut">Die Cut</option>
            <option value="standupPouch">ซองตั้ง</option>
            <option value="softLoop">ถุงหูหิ้ว</option>
            <option value="glueLid">ถุงฝากาว</option>
          </Select>
        </FormRow>
        
        {/* เงื่อนไขแสดง input ตามประเภทซอง */}
        {bagType === 'sideSeal' && (
          <FormRow>
            <Label>พับข้าง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === 'sideSeal' && (
          <FormRow>
            <Label>ซีลบน :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ซีลข้าง :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ซีลล่าง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

         {bagType === 'sideSeal' && (
           <FormRow>
          <Label>เปิด :</Label>
        <RadioGroup>
           {['บน', 'ล่าง'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
        </FormRow>
        )}

        {bagType === 'sideSeal' && (
          <FormRow>
            <Label>Optional :</Label>
            <RadioGroup>
           {['ผีเสื้อ', 'รูกลม'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
            <Label>ขนาด :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>เจาะรูระบายอากาศ :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ระยะจากปากซอง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === 'sideSeal' && (
          <FormRow>
            <Label>ระยะติดซิปจากปากซอง :</Label>
            <Input type= 'text' placeholder='0.00'/>
            <Label>ขนาดซิป :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ติดวาวล์ :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === 'sideSeal' && (
           <FormRow>
            <Label>
              <input
                type="checkbox"
                checked={glueSeal}
                onChange={() => setGlueSeal(!glueSeal)}
                />
                : ฝากาว
              </Label>
          </FormRow>
        )}

        {bagType === 'centerSeal' && (
          <FormRow>
            <Label>ซีลกลาง :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ล้มซีล :</Label>
             <RadioGroup>
           {['ซ้าย', 'ขวา'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
          </FormRow>
        )}

        {bagType === 'centerSeal' && (
          <FormRow>
          <Label>V-Cut</Label>
           <Label>
              <input
                type="checkbox"
                checked={vcutLeft}
                onChange={() => setVcutLeft(!vcutLeft)}
                />
                : ซ้าย
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutRight}
                onChange={() => setVcutRight(!vcutRight)}
                />
                : ขวา
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutTop}
                onChange={() => setVcutTop(!vcutTop)}
                />
                : บน
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutBottom}
                onChange={() => setVcutBottom(!vcutBottom)}
                />
                : ล่าง
              </Label>
              <Label>ระยะจากปากซอง :</Label>
            <Input type='text' placeholder='0.00'/>
        </FormRow>
        )}


          {bagType === 'centerSeal' && (
          <FormRow>
            <Label>Optional :</Label>
            <RadioGroup>
           {['ผีเสื้อ', 'รูกลม'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
            <Label>ขนาด :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>เจาะรูระบายอากาศ :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ระยะจากปากซอง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
      
        )}
        

        {bagType ===  '3sideSeal' && (
          <FormRow>
            <Label>ซีลข้าง :</Label>
            <Input type='text' placeholder='0.00'/>
             <Label>V-Cut</Label>
           <Label>
              <input
                type="checkbox"
                checked={vcutLeft}
                onChange={() => setVcutLeft(!vcutLeft)}
                />
                : ซ้าย
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutRight}
                onChange={() => setVcutRight(!vcutRight)}
                />
                : ขวา
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutTop}
                onChange={() => setVcutTop(!vcutTop)}
                />
                : บน
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutBottom}
                onChange={() => setVcutBottom(!vcutBottom)}
                />
                : ล่าง
              </Label>
            </FormRow>
        )}



        {bagType === '3sideSeal' && (
          <FormRow>
            <Label>Optional :</Label>
            <RadioGroup>
           {['ผีเสื้อ', 'รูกลม'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
            <Label>ขนาด :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>เจาะรูระบายอากาศ :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ระยะจากปากซอง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === '3sideSeal' && (
           <FormRow>
            <Label>ระยะติดซิปจากปากซอง :</Label>
            <Input type= 'text' placeholder='0.00'/>
            <Label>ขนาดซิป :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ติดวาวล์ :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === '3sideSeal' && (
         <FormRow>
            <Label>
              <input
                type="checkbox"
                checked={glueSeal}
                onChange={() => setGlueSeal(!glueSeal)}
                />
                : ฝากาว
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={hasCap}
                onChange={() => setHasCap(!hasCap)}
                />
                : จุกเปิด
              </Label>
          </FormRow>
        )}
        
        {bagType === '4sideSeal' && (
          <FormRow>
            <Label>ซีลข้าง :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ซีลล่าง :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ซีลบน :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === '4sideSeal' && (
           <FormRow>
          <Label>เปิด :</Label>
        <RadioGroup>
           {['บน', 'ล่าง'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
        </FormRow>
        )}

      {bagType === '4sideSeal' && (
           <FormRow>
          <Label>งานตัดมุม :</Label>
        <RadioGroup>
           {['Side Seal (ฝากาว)', 'Side Seal', '4 Seal'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>

          <Label>ตัดมุม :</Label>
          <Input type='text' placeholder='0.00'/>
        </FormRow>
        )}

         {bagType === '4sideSeal' && (
        <FormRow>
          <Label>V-Cut</Label>
           <Label>
              <input
                type="checkbox"
                checked={vcutLeft}
                onChange={() => setVcutLeft(!vcutLeft)}
                />
                : ซ้าย
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutRight}
                onChange={() => setVcutRight(!vcutRight)}
                />
                : ขวา
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutTop}
                onChange={() => setVcutTop(!vcutTop)}
                />
                : บน
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutBottom}
                onChange={() => setVcutBottom(!vcutBottom)}
                />
                : ล่าง
              </Label>
        </FormRow>
      )}  

        {bagType === '4sideSeal' && (
          <FormRow>
            <Label>Optional :</Label>
            <RadioGroup>
           {['ผีเสื้อ', 'รูกลม'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
            <Label>ขนาด :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>เจาะรูระบายอากาศ :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ระยะจากปากซอง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

         {bagType === '4sideSeal' && (
           <FormRow>
            <Label>ระยะติดซิปจากปากซอง :</Label>
            <Input type= 'text' placeholder='0.00'/>
            <Label>ขนาดซิป :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ติดวาวล์ :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === 'dieCut' && (
          <FormRow>
            <Label>ซีลข้าง :</Label>
            <Input type='text' placeholder='0.00'/>
             <Label>V-Cut</Label>
           <Label>
              <input
                type="checkbox"
                checked={vcutLeft}
                onChange={() => setVcutLeft(!vcutLeft)}
                />
                : ซ้าย
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutRight}
                onChange={() => setVcutRight(!vcutRight)}
                />
                : ขวา
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutTop}
                onChange={() => setVcutTop(!vcutTop)}
                />
                : บน
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutBottom}
                onChange={() => setVcutBottom(!vcutBottom)}
                />
                : ล่าง
              </Label>
          </FormRow>
        )}

        {bagType === 'dieCut' && (
          <FormRow>
            <Label>Optional :</Label>
            <RadioGroup>
           {['ผีเสื้อ', 'รูกลม'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
            <Label>ขนาด :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>เจาะรูระบายอากาศ :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ระยะจากปากซอง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}
        
         {bagType === 'dieCut' && (
           <FormRow>
            <Label>ระยะติดซิปจากปากซอง :</Label>
            <Input type= 'text' placeholder='0.00'/>
            <Label>ขนาดซิป :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ติดวาวล์ :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === 'dieCut' && (
           <FormRow>
            <Label>
              <input
                type="checkbox"
                checked={glueSeal}
                onChange={() => setGlueSeal(!glueSeal)}
                />
                : ฝากาว
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={hasCap}
                onChange={() => setHasCap(!hasCap)}
                />
                : จุกเปิด
              </Label>
          </FormRow>
        )}


        {bagType === 'standupPouch' && (
          <FormRow>
             <Label>ซีลข้าง :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ก้นตั้งลึก :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === 'standupPouch' && (
        <FormRow>
          <Label>V-Cut</Label>
           <Label>
              <input
                type="checkbox"
                checked={vcutLeft}
                onChange={() => setVcutLeft(!vcutLeft)}
                />
                : ซ้าย
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutRight}
                onChange={() => setVcutRight(!vcutRight)}
                />
                : ขวา
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutTop}
                onChange={() => setVcutTop(!vcutTop)}
                />
                : บน
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={vcutBottom}
                onChange={() => setVcutBottom(!vcutBottom)}
                />
                : ล่าง
              </Label>
        </FormRow>
      )}  

        {bagType === 'standupPouch' && (
          <FormRow>
            <Label>Optional :</Label>
            <RadioGroup>
           {['ผีเสื้อ', 'รูกลม'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
            <Label>ขนาด :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>เจาะรูระบายอากาศ :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ระยะจากปากซอง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

         {bagType === 'standupPouch' && (
           <FormRow>
            <Label>ระยะติดซิปจากปากซอง :</Label>
            <Input type= 'text' placeholder='0.00'/>
            <Label>ขนาดซิป :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ติดวาวล์ :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === 'standupPouch' && (
           <FormRow>
            <Label>
              <input
                type="checkbox"
                checked={glueSeal}
                onChange={() => setGlueSeal(!glueSeal)}
                />
                : ฝากาว
              </Label>
               <Label>
              <input
                type="checkbox"
                checked={hasCap}
                onChange={() => setHasCap(!hasCap)}
                />
                : จุกเปิด
              </Label>
          </FormRow>
        )}

        

        {bagType === 'softLoop' && (
          <FormRow>
            <Label>พับข้าง :</Label>
            <Input type='text' placeholder='0.00'/>
             <Label>พับล่าง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

         {bagType === 'softLoop' && (
          <FormRow>
            <Label>Optional :</Label>
            <RadioGroup>
           {['ผีเสื้อ', 'รูกลม'].map((item) => (
        <RadioLabel key={item}>
        <input
          type="radio"
          name="layoutType"
          value={item}
          checked={formData.layoutType === item}
          onChange={(e) => setFormData({ ...formData, layoutType: e.target.value })}
        />
        {item}
        </RadioLabel>
         ))}
        </RadioGroup>
            <Label>ขนาด :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>ระยะจากปากซอง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

        {bagType === 'softLoop' && (
          <FormRow>
            <Label>ระยะติดซิปจากปากซอง :</Label>
            <Input type= 'text' placeholder='0.00'/>
            <Label>ขนาดซิป :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>
              <input
                type="checkbox"
                checked={hasCap}
                onChange={() => setHasCap(!hasCap)}
                />
                : ฝากาว
              </Label>
          </FormRow>
        )}

        {bagType === 'glueLid' && (
          <FormRow>
            <Label>พับข้าง :</Label>
            <Input type='text' placeholder='0.00'/>
            <Label>พับล่าง :</Label>
            <Input type='text' placeholder='0.00'/>
          </FormRow>
        )}

         {bagType === 'glueLid' && (
          <FormRow>
            <Label>
              <input
                type="checkbox"
                checked={glueSeal}
                onChange={() => setGlueSeal(!glueSeal)}
                />
                : ฝากาว
              </Label>
          </FormRow>
        )}
   </>
    )}

      <ButtonGroup>
        <NavButton onClick={() => setIndex((prev) => prev - 1)} disabled={index === 0}>
          ⬅ Back
        </NavButton>

        {index < factoryList.length - 1 ? (
          <NavButton onClick={() => setIndex((prev) => prev + 1)}>
            Next ➡
          </NavButton>
        ) : (
          <NavButton onClick={handleFinish}>
            Finish
          </NavButton>
        )}
      </ButtonGroup>
    </Container>
  );
}

export default NewOrderForm;