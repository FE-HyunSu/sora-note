import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import menuData from '@static/data/menuInfo.json';

const { persistAtom } = recoilPersist();
export const dataListAtom = atom({
  key: 'dataListAtom',
  default: menuData.menuList,
  effects_UNSTABLE: [persistAtom],
});

export const pageModeAtom = atom({
  key: 'pageModeAtom',
  default: true,
});
