import { Collapse } from 'antd';
import { returnTextBody } from '../db/dexieDB';
import { useEffect, useState } from 'react';
import { handleTextChange } from '../utilities/helperFunction';

import '../styles/TalentsTraits.css';


const TalentsTraits = () => {

  const [talentsText, setTalentsText] = useState('');
  const [traitsText, setTraitsText] = useState('');
  const [bonusesText, setBonusesText] = useState('');

  const titleMap: Record<number, React.Dispatch<React.SetStateAction<string>>> = {
    1: setTalentsText,
    2: setTraitsText,
    3: setBonusesText,
  };

  useEffect(() => {
    const fetchData = async () => {

      for (let i = 1; i <= Object.keys(titleMap).length; i++) {
        const text = await returnTextBody("talTraBon", i);
        titleMap[i](text ?? '');
      }
      
    };

    fetchData();
  }, []);


  const onTChange = (index: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleTextChange(e, index, "talTraBon", titleMap);
  };

  return (
    <div>
      <Collapse
        collapsible="header"
        items={[
          {
            key: '1',
            label: 'Talents',
            children: <textarea id="talent-text" className='talents-traits-textarea' value={talentsText} onChange={onTChange(1)} />,
          },
        ]}
      />
      <Collapse
        collapsible="header"
        items={[
          {
            key: '2',
            label: 'Traits',
            children: <textarea id="trait-text" className='talents-traits-textarea' value={traitsText} onChange={onTChange(2)} />,
          },
        ]}
      />
      <Collapse
        collapsible="header"
        items={[
          {
            key: '3',
            label: 'Bonuses',
            children: <textarea id="trait-text" className='talents-traits-textarea' value={bonusesText} onChange={onTChange(3)} />,
          },
        ]}
      />
    </div>
  )
};



export default TalentsTraits;
