import { chunk } from 'lodash';
import { useSettingsStore } from '@/store/zustand';
import { openInNewTab } from '@/utils';
import { MAX_GOODS_IN_SOURCE, MAX_LINES } from '@/configs/app-config';

const url = 'https://gomer.rozetka.company/gomer/items/source/';
const attr = '?rz_category_id=';

const createLink = (source, idCategory) =>
  `${url}${source}${attr}${idCategory}`;

const action = (data) => {
  const { settingsBy, value } = useSettingsStore.getState();
  if (!value || settingsBy !== 'category') {
    throw `❌ Форма нижче ☝️ не налаштована`;
  }
  const lines = data.split('\n').filter((line) => line !== '');
  if (lines.length > MAX_LINES) {
    throw `Введено більше ${MAX_LINES} джерел`;
  }
  const links = lines.map((line) => createLink(line, value));

  openInNewTab(links);
};

export const openSourceWithSelectCategory = {
  buttonColor: 'primary',
  buttonTitle: 'Відкрити джерела',
  buttonIcon: 'open',
  placeholder:
    'Відкриває джерела з заданою категорією на вкладці Всі товари\nВстав джерела',
  radioGroup: null,
  action,
};
