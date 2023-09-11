import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const dataListAtom = atom({
  key: 'dataListAtom',
  default: [
    {
      id: '1',
      name: '초코우유',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '2',
      name: '딸기우유',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '3',
      name: '레드벨벳',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '4',
      name: '스윗드림',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '5',
      name: '바닐라',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '6',
      name: '레몬라임',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '7',
      name: '솔티드카라멜',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '8',
      name: '밀크쉐이크',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '9',
      name: '피치요거트',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '10',
      name: '크림브륄레',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '11',
      name: '말차라떼',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '12',
      name: '모카',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '12',
      name: '황치즈',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '13',
      name: '오레오',
      totalCount: 0,
      setCount: 18,
    },
    {
      id: '14',
      name: '블루베리',
      totalCount: 0,
      setCount: 18,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const pageModeAtom = atom({
  key: 'pageModeAtom',
  default: 'home',
});
