import React from 'react';
import '../styles/Widget.css';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import TalentsTraits from './TalentsTraits';
import MenMalMut from './MenMalMut';


const items: TabsProps['items'] = [
  {
    // Characteristics and Skills
    key: '1',
    label: 'Talent, Traits, Bonuses',
    children: <TalentsTraits />,
  },
  {
    // Armor
    key: '2',
    label: 'MenMalMut',
    children: <MenMalMut />,
  },
];

const ThreeMsTwoTs: React.FC = () => {
    return(
        <div className='sub-tab-center'>
            <Tabs className='sub-widget-content' defaultActiveKey="1" items={items} />
        </div>
        
    )
};


export default ThreeMsTwoTs;