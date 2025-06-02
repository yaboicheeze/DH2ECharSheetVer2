import React from 'react';
import '../styles/Widget.css';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import CharAndSkills from './CharAndSkills';
import Armor from './Armor';
import InvAndWeap from './InvAndWeap';
import Psyker from './Psyker';
import ThreeMsTwoTs from './ThreeMsTwoTs';
import CharInfo from './CharInfo';
import Notes from './Notes';

import IconCharSkills from '../assets/charAndSkills.png';
import IconArmor from '../assets/armor.png';
import IconInventory from '../assets/inventory.png';
import IconPsyker from '../assets/magic-21-512.png';
import IconThreeMsTwoTs from '../assets/mmmtt.png';
import IconCharInfo from '../assets/profile.png';
import IconNotes from '../assets/notes.png';

const items: TabsProps['items'] = [
  {
    // Characteristics and Skills
    key: '1',
    label: <img src={IconCharSkills} alt="Characteristics and Skills" />,
    children: <CharAndSkills />,
  },
  {
    // Armor
    key: '2',
    label: <img src={IconArmor} alt="Armor" />,
    children: <Armor />,
  },
  {
    //Inventory and Weapons
    key: '3',
    label: <img src={IconInventory} alt="Inventory and Weapons" />,
    children: <InvAndWeap />,
  },
  {
    // Psyker Powers
    key: '4',
    label: <img src={IconPsyker} alt="Psyler Powers" />,
    children: <Psyker />,
  },
  {
    //Three Ms and Two Ts
    key: '5',
    label: <img src={IconThreeMsTwoTs} alt="Three Ms and Two Ts" />,
    children: <ThreeMsTwoTs />,
  },
  {
    // Character Information
    key: '6',
    label: <img src={IconCharInfo} alt="Character Information" />,
    children: <CharInfo />,
  },
  {
    // Notes
    key: '7',
    label: <img src={IconNotes} alt="Notes" />,
    children: <Notes />,
  },
];

const App: React.FC = () => {
  return (
    <div className="box-container">
      <Tabs className="widget-content" defaultActiveKey="1" items={items} />
    </div>
  );
};

export default App;