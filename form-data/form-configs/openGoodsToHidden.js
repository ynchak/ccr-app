import { chunk } from 'lodash';
import { openInNewTab } from '@/utils';

const MAX_GOODS_IN_CONSTRUCT = 150;

const addres = `https://gomer.rozetka.company/gomer/smart-folders/next-page?searchParams[0][field]=goods_id&searchParams[0][condition]=%3D&searchParams[0][value]=`;

const params = {
  all: `&pageCondition=all&page=0&pageSize=50&size=${MAX_GOODS_IN_CONSTRUCT}`,
  active: `&searchParams[1][field]=upload_status&searchParams[1][condition]=equal-value&searchParams[1][value]=2&pageCondition=all&page=0&pageSize=50&size=${MAX_GOODS_IN_CONSTRUCT}`,
};

const action = (column) => {

  const lines = column.split('\n').filter((line) => line !== '');
  const links = chunk(lines, MAX_GOODS_IN_CONSTRUCT).map(
    (part) => `${addres}${part.join('+')}${params['all']}`
  );
  console.log(links);
//   openInNewTab(links);
};

export const openGoodsToHidden = {
  buttonColor: 'primary',
  buttonIcon: 'open',
  buttonTitle: 'До конструктора умов для приховання',
  placeholder:
    'Відкриє товари в конструкторі умов по 150 од на сторінці. Потрібно для приховання\nВстав з excel стовпчик з Id товарів ',
  radioGroup: null,
  action,
};
