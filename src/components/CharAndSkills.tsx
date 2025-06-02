import React from 'react';
import '../styles/Widget.css';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import Characteristics from './Characteristics';
import Skills from './Skills';


const items: TabsProps['items'] = [
  {
    // Characteristics and Skills
    key: '1',
    label: 'Characteristics',
    children: <Characteristics />,
  },
  {
    // Armor
    key: '2',
    label: 'Skills',
    children: <Skills />,
  },
];

const CharAndSkills: React.FC = () => {
  return (
    <div>
      <Tabs className='sub-widget-content' defaultActiveKey="1" items={items} />
    </div>

  )
}



export default CharAndSkills;