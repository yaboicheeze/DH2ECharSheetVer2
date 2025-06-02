// const InvAndWeap = () => {
//   return <div>This is Tab 1 content</div>;
// };

// export default InvAndWeap;

import React from 'react';
import '../styles/Widget.css';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import Inventory from './Inventory';
import Weapons from './Weapons';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    // Characteristics and Skills
    key: '1',
    label: 'Inventory',
    children: <Inventory />,
  },
  {
    // Armor
    key: '2',
    label: 'Weapons',
    children: <Weapons />,
  },
];

const InvAndWeap: React.FC = () => 
<Tabs className='sub-widget-content' defaultActiveKey="1" items={items} onChange={onChange} />;

export default InvAndWeap;