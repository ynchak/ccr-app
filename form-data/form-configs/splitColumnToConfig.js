import { addToClipboard } from '@/utils';

const action = (column, rows) => {
  const lines = column.split('\n').filter((line) => line !== '');
  const countColumns = Math.ceil(lines.length / rows);
  const columns = [...lines.splice(0, rows)];

  for (let i = 1; i < countColumns; i++) {
    const peice = lines.splice(0, rows);
    for (let j = 0; j < peice.length; j++) {
      columns[j] = `${columns[j]}\t${peice[j]},`;
    }
  }
  addToClipboard(columns.join('\n'));
};

export const splitColumnConfig = {
  buttonColor: 'secondary',
  buttonIcon: 'split',
  buttonTitle: 'Розбити на стовпчики',
  placeholder: 'Встав з excel стовпчик з Id товарів',
  radioGroup: {
    defaultValue: '500',
    values: [
      { type: '50', value: '50' },
      { type: '100', value: '100' },
      { type: '150', value: '150' },
      { type: '500', value: '500' },
      { type: '10000', value: '10 000' },
    ],
  },
  action,
};
