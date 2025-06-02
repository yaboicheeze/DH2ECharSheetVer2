

// import React from 'react';
// import '../styles/Widget.css';
// import { Tabs } from 'antd';
// import type { TabsProps } from 'antd';
// import { useState } from 'react';

// import Characteristics from './Characteristics';
// import Skills from './Skills';

// /////////////////////



// const CharAndSkills: React.FC = () => {
//   const [dataSource, setDataSource] = useState([
//     { key: '1', characteristic: 'Weapon Skill', score: 10, add: '0', mod: '1' },
//     { key: '2', characteristic: 'Ballistic Skill', score: 10, add: '0', mod: '1' },
//     { key: '3', characteristic: 'Strength', score: 10, add: '0', mod: '1' },
//     { key: '4', characteristic: 'Toughness', score: 10, add: '0', mod: '1' },
//     { key: '5', characteristic: 'Agility', score: 10, add: '0', mod: '1' },
//     { key: '6', characteristic: 'Intelligence', score: 10, add: '0', mod: '1' },
//     { key: '7', characteristic: 'Perception', score: 10, add: '0', mod: '1' },
//     { key: '8', characteristic: 'Willpower', score: 10, add: '0', mod: '1' },
//     { key: '9', characteristic: 'Fellowship', score: 10, add: '0', mod: '1' },
//     { key: '10', characteristic: 'Influence', score: 10, add: '0', mod: '1' },
//   ]);

//   const handleSave = (row) => {
//     const newData = [...dataSource];
//     const index = newData.findIndex((item) => row.key === item.key);
//     const item = newData[index];
//     newData.splice(index, 1, { ...item, ...row });
//     setDataSource(newData);
//   };

//   /////////////////////

//   const onChange = (key: string) => {
//     console.log(key);
//   };

//   const items: TabsProps['items'] = [
//     {
//       // Characteristics and Skills
//       key: '1',
//       label: 'Characteristics',
//       children: <Characteristics dataSource={dataSource} handleSave={handleSave} />,
//     },
//     {
//       // Armor
//       key: '2',
//       label: 'Skills',
//       children: <Skills />,
//     },
//   ];


//   return (
//     <div>
//       <Tabs className='sub-widget-content' defaultActiveKey="1" items={items} onChange={onChange} />
//     </div>

//   )
// }



// export default CharAndSkills;