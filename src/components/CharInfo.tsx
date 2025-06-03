import { Collapse } from 'antd';
import '../styles/TalentsTraits.css';
import { useEffect } from 'react';
// import { returnTextBody } from '../db/dexieDB';

// const ids = [
//   'charName',
//   'charRole',
//   'charHomeWorld',
//   'charBackground',
//   'charEliteAdvances',
//   'charDivination',
//   'charAge',
//   'charBuild',
//   'charComplexion',
//   'charHair',
//   'charGender',
//   'charQuirks',
//   'charAllies',
//   'charEnemies',
//   'charSuperstitions',
//   'charcharMementos'
// ];

const CharInfo = () => {

  // const [charText, setCText] = useState<string[]>(['', '']);

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

  useEffect(() => {
      const fetchData = async () => {
  
        // for (let i = 1; i <= Object.keys(labels).length; i++) {
        //   const text = await returnTextBody("talTraBon", i);
        //   titleMap[i](text ?? '');
        // }
        
      };
  
      fetchData();
    }, []);

  return (
    <div className='sub-widget-content'>
      {labels.map((label, index) => {
        const key = (index + 1);
        const textareaId = `charInfoTextarea-${key}`;
        return (
          <Collapse
            key={key}
            collapsible="header"
            items={[
              {
                key,
                label, // This will display as the collapse header
                children: (
                  <textarea id={textareaId} name={label} className="talents-traits-textarea" />
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