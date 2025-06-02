
import { Collapse } from 'antd';
import '../styles/TalentsTraits.css';


const TalentsTraits = () => (
  <div>
    <Collapse
      collapsible="header"
      items={[
        {
          key: '1',
          label: 'Talents',
          children: <textarea id="talent-text" className='talents-traits-textarea' />,
        },
      ]}
    />
    <Collapse
      collapsible="header"
      items={[
        {
          key: '2',
          label: 'Traits',
          children: <textarea id="trait-text" className='talents-traits-textarea' />,
        },
      ]}
    />
  </div>
);

export default TalentsTraits;
