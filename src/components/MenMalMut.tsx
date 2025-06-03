import { Collapse } from 'antd';
import { InsanityCorrCard } from './InsanityCorrCard';
import { useEffect, useState } from 'react';
import { returnTextBody } from '../db/dexieDB';
import { handleTextChange } from '../utilities/helperFunction';

import '../styles/TalentsTraits.css';


const MenMalMut = () => {

  const [menDisText, setMenDisText] = useState('');
  const [malignanceText, setMalignanceText] = useState('');
  const [mutationText, setMutationText] = useState('');

  const titleMap: Record<number, React.Dispatch<React.SetStateAction<string>>> = {
    1: setMenDisText,
    2: setMalignanceText,
    3: setMutationText,
  };

  useEffect(() => {
    const fetchData = async () => {

      for (let i = 1; i <= Object.keys(titleMap).length; i++) {
        const text = await returnTextBody("menMalMut", i);
        titleMap[i](text ?? '');
      }
    };

    fetchData();
  }, []);


  const onMChange = (index: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleTextChange(e, index, "menMalMut", titleMap);
  };


  return (
    <div>
      <div className='inscor-card-conatiner'>
        <InsanityCorrCard label="Corruption" bigNumber={0} smallNumber={0} />
        <InsanityCorrCard label="Insanity" bigNumber={0} smallNumber={0} />
      </div>
      <Collapse
        collapsible="header"
        items={[
          {
            key: '1',
            label: 'Mental Disorders',
            children: <textarea id="menDis-text" className='talents-traits-textarea' value={menDisText} onChange={onMChange(1)} />,
          },
        ]}
      />
      <Collapse
        collapsible="header"
        items={[
          {
            key: '2',
            label: 'Malignancies',
            children: <textarea id="malignancy-text" className='talents-traits-textarea' value={malignanceText} onChange={onMChange(2)} />,
          },
        ]}
      />
      <Collapse
        collapsible="header"
        items={[
          {
            key: '3',
            label: 'Mutations',
            children: <textarea id="mutatation-text" className='talents-traits-textarea' value={mutationText} onChange={onMChange(3)} />,
          },
        ]}
      />
    </div>
  )

};

export default MenMalMut;
