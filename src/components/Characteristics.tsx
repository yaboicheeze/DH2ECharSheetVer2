import { Collapse, Table, Form, InputNumber } from 'antd';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { db, updateCharacteristic } from '../db/dexieDB';
import type { FormInstance } from 'antd/es/form';
import '../styles/Characteristics.css';


interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: string;
  record: any;
  handleSave: (record: any) => void;
  [key: string]: any;
}

interface CharacteristicRow {
  key: string;
  id: string;
  characteristic?: string;
  score: number;
  add: number;
  mod: number;
}

const Characteristics = () => {
  // Editable context to share form instance
  const EditableContext = React.createContext<FormInstance<any> | null>(null);

  const EditableRow = ({ ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
      if (editing) {
        inputRef.current?.focus();
      }
    }, [editing]);

    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({ ...record, ...values });
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    };

    let childNode = children;

    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{ margin: 0 }}
          name={dataIndex}
          rules={[{ required: true, message: `${title} is required.` }]}
        >
          <InputNumber className='score-input-number' ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div className="editable-cell-value-wrap" style={{ paddingInlineEnd: 8 }} onClick={toggleEdit}>
          {children}
        </div>
      );
    }

    return <td {...restProps}>{childNode}</td>;
  };

  const columns = [
    {
      title: 'Characteristic',
      dataIndex: 'characteristic',
      key: 'characteristic',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      editable: true,
    },
    {
      title: 'Add.',
      dataIndex: 'add',
      key: 'add',
      editable: true,
    },
    {
      title: 'Mod',
      dataIndex: 'mod',
      key: 'mod',
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const [dataSource, setDataSource] = useState<CharacteristicRow[]>([]);

  const characteristicOrder = [
    'weaponScore',
    'ballisticScore',
    'strengthScore',
    'toughScore',
    'agilityScore',
    'intellScore',
    'percepScore',
    'willScore',
    'fellowScore',
    'influenceScore',
  ];

  useEffect(() => {
    const fetchData = async () => {
      const storeData = await db.characteristics.toArray();
      const sortedData = storeData.sort(
        (a, b) =>
          characteristicOrder.indexOf(a.id) - characteristicOrder.indexOf(b.id)
      );
      const tableData = sortedData.map((item, index) => ({
        key: (index + 1).toString(),
        id: item.id,
        characteristic: item.charName,
        score: item.charScore ?? 10,
        add: item.charModBonus ?? 0,
        mod: item.charMod ?? 1,
      }));
      setDataSource(tableData);
    };

    fetchData();
  }, []);

  const handleSave = async (row: any) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    const updatedRow = { ...item, ...row };
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);

    const charId = updatedRow.id;
    const value = parseInt(updatedRow.score);
    const add = parseInt(updatedRow.add);

    updateCharacteristic(charId, value, add)

    const store = await db.characteristics.get(charId);

    console.log("Value before assigned: [" + charId + "] - [" + updatedRow.score + "] - [" + updatedRow.add + "] - [" + updatedRow.mod + "]");

    updatedRow.score = store?.charScore ?? 10;
    updatedRow.add = store?.charModBonus ?? 0;
    updatedRow.mod = store?.charMod ?? 1;

    console.log("Value from database: [" + charId + "] - [" + store?.charScore + "] - [" + store?.charModBonus + "] - [" + store?.charMod + "]");
    console.log("Value once assigned: [" + charId + "] - [" + updatedRow.score + "] - [" + updatedRow.add + "] - [" + updatedRow.mod + "]");

    // newData.splice(index, 1, updatedRow);
    // setDataSource(newData);
  };

  return (
    <div>
      <Collapse
        className='small-collapse'
        collapsible="header"
        items={[
          {
            key: '1',
            label: 'Aptitudes',
            children: <textarea id="talent-text" className='talents-traits-textarea' />,
          },
        ]}
      />
      <Table
        id='characteristicsTable'
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        rowClassName={() => 'editable-row'}
        pagination={false}
        dataSource={dataSource}
        columns={mergedColumns}
      />
    </div>
  );
};

export default Characteristics;