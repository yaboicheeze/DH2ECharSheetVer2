import { Collapse } from 'antd';
import { InsanityCorrCard } from './InsanityCorrCard';
import '../styles/TalentsTraits.css';


const MenMalMut = () => (
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
          children: <textarea id="menDis-text" className='talents-traits-textarea' />,
        },
      ]}
    />
    <Collapse
      collapsible="header"
      items={[
        {
          key: '2',
          label: 'Malignancies',
          children: <textarea id="malignancy-text" className='talents-traits-textarea' />,
        },
      ]}
    />
    <Collapse
      collapsible="header"
      items={[
        {
          key: '3',
          label: 'Mutations',
          children: <textarea id="mutatation-text" className='talents-traits-textarea' />,
        },
      ]}
    />
  </div>
);

export default MenMalMut;
