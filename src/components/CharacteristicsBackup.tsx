



// import { Collapse, Table, Form, InputNumber } from 'antd';
// import React, { useState, useContext, useEffect, useRef } from 'react';
// import '../styles/Characteristics.css';



// const Characteristics = ({ dataSource, handleSave }) => {
//   // Editable context to share form instance
//   const EditableContext = React.createContext(null);

//   const EditableRow = ({ index, ...props }) => {
//     const [form] = Form.useForm();
//     return (
//       <Form form={form} component={false}>
//         <EditableContext.Provider value={form}>
//           <tr {...props} />
//         </EditableContext.Provider>
//       </Form>
//     );
//   };

//   const EditableCell = ({
//     title,
//     editable,
//     children,
//     dataIndex,
//     record,
//     handleSave,
//     ...restProps
//   }) => {
//     const [editing, setEditing] = useState(false);
//     const inputRef = useRef(null);
//     const form = useContext(EditableContext);

//     useEffect(() => {
//       if (editing) {
//         inputRef.current?.focus();
//       }
//     }, [editing]);

//     const toggleEdit = () => {
//       setEditing(!editing);
//       form.setFieldsValue({ [dataIndex]: record[dataIndex] });
//     };

//     const save = async () => {
//       try {
//         const values = await form.validateFields();
//         toggleEdit();
//         handleSave({ ...record, ...values });
//       } catch (errInfo) {
//         console.log('Save failed:', errInfo);
//       }
//     };

//     let childNode = children;

//     if (editable) {
//       childNode = editing ? (
//         <Form.Item
//           style={{ margin: 0 }}
//           name={dataIndex}
//           rules={[{ required: true, message: `${title} is required.` }]}
//         >
//           <InputNumber className='score-input-number' ref={inputRef} onPressEnter={save} onBlur={save} />
//         </Form.Item>
//       ) : (
//         <div className="editable-cell-value-wrap" style={{ paddingInlineEnd: 8 }} onClick={toggleEdit}>
//           {children}
//         </div>
//       );
//     }

//     return <td {...restProps}>{childNode}</td>;
//   };

//   const columns = [
//     {
//       title: 'Characteristic',
//       dataIndex: 'characteristic',
//       key: 'characteristic',
//     },
//     {
//       title: 'Score',
//       dataIndex: 'score',
//       key: 'score',
//       editable: true,
//     },
//     {
//       title: 'Add.',
//       dataIndex: 'add',
//       key: 'add',
//       editable: true,
//     },
//     {
//       title: 'Mod',
//       dataIndex: 'mod',
//       key: 'mod',
//     },
//   ];

//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         editable: col.editable,
//         dataIndex: col.dataIndex,
//         title: col.title,
//         handleSave,
//       }),
//     };
//   });

  

//   return (
//     <div>
//       <Collapse
//         className='small-collapse'
//         collapsible="header"
//         items={[
//           {
//             key: '1',
//             label: 'Aptitudes',
//             children: <textarea id="talent-text" className='talents-traits-textarea' />,
//           },
//         ]}
//       />
//       <Table
//         components={{
//           body: {
//             row: EditableRow,
//             cell: EditableCell,
//           },
//         }}
//         rowClassName={() => 'editable-row'}
//         pagination={false}
//         dataSource={dataSource}
//         columns={mergedColumns}
//       />
//     </div>
//   );
// };

// export default Characteristics;