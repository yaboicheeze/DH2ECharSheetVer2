import { InputNumber } from 'antd';

import '../styles/InsanityCorrupstion.css';

type StatCardProps = {
  label: string;
  bigNumber: number;
  smallNumber: number;
};

export const InsanityCorrCard = ({ label, bigNumber, smallNumber }: StatCardProps) => (
  <div className="inscor-individual">
    <label>{label}</label>
    <InputNumber className="insanity-input" defaultValue={bigNumber} />
    <p>{smallNumber}</p>
  </div>
);