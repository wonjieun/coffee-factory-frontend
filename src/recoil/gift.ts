import { atom, selector } from 'recoil';

export const giftList = atom({
  key: 'giftList',
  default: [
    {
      id: 1,
      type: 'coffee',
      name: '아이스 아메리카노',
    },
  ],
});

export const giftDetail = selector({
  key: 'giftDetail',
  get: async () => {
    // api 호출
    return {
      id: 1,
      type: 'coffee',
      name: '아이스 아메리카노',
    };
  },
});
