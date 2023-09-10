import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const darkThemeAtom = atom({
  key: 'darkThemeAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const pageModeAtom = atom({
  key: 'pageModeAtom',
  default: 'home',
});
