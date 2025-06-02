import { Collapse } from 'antd';
import '../styles/TalentsTraits.css';

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

const CharInfo = () => (
  <div className='sub-widget-content'>
    {labels.map((label, index) => {
      const key = (index + 1).toString();
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
);

export default CharInfo;