// import { Collapse } from 'antd';
// import { InsanityCorrCard } from './InsanityCorrCard';
// import { useEffect, useState } from 'react';
// import { returnTextBody, updateTextBody } from '../db/dexieDB';
// import '../styles/TalentsTraits.css';


// const MenMalMut = () => {

//   // const titleMap = {
//   //   1: ,
//   //   2: ,
//   //   3: ,
//   // };

//   const [mDisText, setMText] = useState('');

//   // const [menDisText, setMenDisText] = useState('');
//   // const [malignanceText, setMalignanceText] = useState('');
//   // const [mutationText, setMutationText] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {

//       const text1 = await returnTextBody("menMalMut");
//       setMenDisText(text1 ?? '');

//       const text2 = await returnTextBody("menMalMut");
//       setMalignanceText(text2 ?? '');

//       const text3 = await returnTextBody("menMalMut");
//       setMutationText(text3 ?? '');
//     };

//     fetchData();
//   }, []);

//   const onMentalChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const bodyToUpdate = e.target.value;
//     setMenDisText(bodyToUpdate); // <-- Update state to keep input responsive
//     await updateTextBody("menMalMut", 1, bodyToUpdate);
//   };

//   const onMalignanceChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const bodyToUpdate = e.target.value;
//     setMalignanceText(bodyToUpdate); // Update local state
//     await updateTextBody("menMalMut", 2, bodyToUpdate); // Update database
//   };

//   const onMutationChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const bodyToUpdate = e.target.value;
//     setMutationText(bodyToUpdate); // Update local state
//     await updateTextBody("menMalMut", 3, bodyToUpdate); // Update database
//   };

//   // const onMentalChange = async () => {
//   //   const element = document.getElementById("menDis-text") as HTMLTextAreaElement;
//   //   const bodyToUpdate = element.value;
//   //   updateTextBody("menMalMut", 1, bodyToUpdate);
//   // }

//   // const onMalignanceChange = async () => {
//   //   const element = document.getElementById("malignancy-text") as HTMLTextAreaElement;
//   //   const bodyToUpdate = element.value;
//   //   updateTextBody("menMalMut", 2, bodyToUpdate);
//   // }

//   // const onMutationChange = async () => {
//   //   const element = document.getElementById("mutatation-text") as HTMLTextAreaElement;
//   //   const bodyToUpdate = element.value;
//   //   updateTextBody("menMalMut", 3, bodyToUpdate);
//   // }

//   return (
//     <div>
//       <div className='inscor-card-conatiner'>
//         <InsanityCorrCard label="Corruption" bigNumber={0} smallNumber={0} />
//         <InsanityCorrCard label="Insanity" bigNumber={0} smallNumber={0} />
//       </div>
//       <Collapse
//         collapsible="header"
//         items={[
//           {
//             key: '1',
//             label: 'Mental Disorders',
//             // children: <textarea id="menDis-text" className='talents-traits-textarea' onChange={onMentalChange} />,
//             children: <textarea id="menDis-text" className='talents-traits-textarea' value={menDisText} onChange={onMentalChange} />,

//           },
//         ]}
//       />
//       <Collapse
//         collapsible="header"
//         items={[
//           {
//             key: '2',
//             label: 'Malignancies',
//             children: <textarea id="malignancy-text" className='talents-traits-textarea' value={malignanceText} onChange={onMalignanceChange} />,
//           },
//         ]}
//       />
//       <Collapse
//         collapsible="header"
//         items={[
//           {
//             key: '3',
//             label: 'Mutations',
//             children: <textarea id="mutatation-text" className='talents-traits-textarea' value={mutationText} onChange={onMutationChange} />,
//           },
//         ]}
//       />
//     </div>
//   )

// };

// export default MenMalMut;
