import { Collapse } from 'antd';
import '../styles/TalentsTraits.css';
import { useEffect, useState } from 'react';
import { returnTextBody } from '../db/dexieDB';
import { handleDynamicTextChange } from '../utilities/helperFunction';

const CharInfo = () => {

  // To make this fully dynamic for notes section, move labels to the database and fetch them dynamically as well.
  // Make a function in dexieDB to fetch labels

  const labels = [
    'Character Name',
    'Role',
    'Home World',
    'Background',
    'Elite Advances',
    'Divination',
    'Age',
    'Build',
    'Complexion',
    'Hair',
    'Gender',
    'Quirks',
    'Allies',
    'Enemies',
    'Superstitions',
    'Mementos'
  ];

  const [charText, setCText] = useState<string[]>(Array(labels.length).fill(''));

  const onCChange = (index: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  const newText = e.target.value;

  // Update local state
  setCText(prev => {
    const updated = [...prev];
    updated[index] = newText;
    return updated;
  });

  // Update database (index + 1 to match your DB keys)
  handleDynamicTextChange(e, index, "charInfo", setCText);
};

  useEffect(() => {
  const fetchData = async () => {
    const newTextArray: string[] = [];
    for (let i = 0; i < labels.length; i++) {
      const text = await returnTextBody("charInfo", i);
      newTextArray.push(text ?? '');
    }
    setCText(newTextArray);
  };

  fetchData();
}, []);

  return (
    <div className='sub-widget-content'>
      {labels.map((label, index) => {
        const key = (index + 1);
        const textareaId = `charInfoTextarea-${key}`;
        const textAreaValue = charText[index] || '';
        return (
          <Collapse
            key={key}
            collapsible="header"
            items={[
              {
                key,
                label, // This will display as the collapse header
                children: (
                  <textarea id={textareaId} name={label} className="talents-traits-textarea" value={textAreaValue} onChange={onCChange(index)} />
                ),
              },
            ]}
          />
        );
      })}
    </div>
  )

};

export default CharInfo;