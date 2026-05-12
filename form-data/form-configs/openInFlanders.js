import { openInNewTab } from '@/utils';

const action = (column) => {
  const links = column
    .split('\n')
    .filter((line) => line !== '')
    .map((id) => `https://gomer.rozetka.company/goods/item/update?id=${id}/`);
  setCountLines(links.length);
  openInNewTab(links.join('\n'));
};
export const openInFlanders = {
  buttonColor: 'secondary',
  buttonTitle: 'Відкрити',
  buttonIcon: 'open',
  placeholder: 'Сюди треба ввести id товарів',
  radioGroup: null,
  action,
};
