export const apiResponse = {
  message:
    '카페에서 아늑한 오후를 보내고, 맛있는 한식으로 저녁을 즐겨보세요. ☕️',
  stores: [
    {
      id: 19,
      name: '카페 사흘',
      image: 'https://i.imgur.com/ykIrPhm.jpeg',
      rating: 4.59,
      address: '서울특별시 종로구 혜화로 16-1 (혜화동) 1층',
      phone: '0507-1324-1227',
      hours: '월요일 12:00-22:00, 화-일요일 12:00-24:00',
      category: '카페',
      payment: '서울 페이',
      coupon_is: 1,
      coupon: '음료/디저트 세트 구매 시 1000원 할인',
      menu: [
        { name: '오미자차', menuImage: 'https://i.imgur.com/cXkpqOn.jpeg' },
        { name: '더치라떼', menuImage: 'https://i.imgur.com/ykIrPhm.jpeg' },
        {
          name: '로레아 샹그리아',
          menuImage: 'https://i.imgur.com/OWiOtAq.jpeg',
        },
      ],
    },
    {
      id: 20,
      name: '브라운 에비뉴 (Brown Avenue)',
      image: 'https://i.imgur.com/l5xgDKW.jpeg',
      rating: 4.61,
      address: '서울시 종로구 혜화로3길 5 301동 112호',
      phone: '0507-1444-8334',
      hours: '월-토요일 09:00-16:00, 매주 일요일 휴무',
      category: '카페',
      payment: '서울 페이',
      coupon_is: 0,
      coupon: null,
      menu: [
        {
          name: '프렌치토스트 브런치',
          menuImage: 'https://i.imgur.com/abnQAE2.jpeg',
        },
        {
          name: '클래식 브런치',
          menuImage: 'https://i.imgur.com/ykIrPhm.jpeg',
        },
        {
          name: '아보카도살몬 브런치',
          menuImage: 'https://i.imgur.com/wTIJMaU.jpeg',
        },
      ],
    },
    {
      id: 21,
      name: '핏어팻',
      image: 'https://i.imgur.com/JlOHaFR.jpeg',
      rating: 4.49,
      address:
        '서울특별시 종로구 혜화로3길 5 (명륜2가, 명륜동주상복합아남아파트) 1층 108호',
      phone: '070-8820-6195',
      hours: '월-금요일 07:30-22:00, 토요일 07:10-23:00, 일요일 07:10-22:00',
      category: '카페',
      payment: '서울 페이',
      coupon_is: 0,
      coupon: null,
      menu: [
        {
          name: '블루베리복분자 쉐이크',
          menuImage: 'https://i.imgur.com/rPCbSKD.jpeg',
        },
        {
          name: '연어크림치즈 샌드위치',
          menuImage: 'https://i.imgur.com/ykIrPhm.jpeg',
        },
        { name: '쑥샷라떼', menuImage: 'https://i.imgur.com/sEZ1GGg.jpeg' },
      ],
    },
    {
      id: 25,
      name: '한성본가',
      image: 'https://i.imgur.com/S941hkP.jpeg',
      rating: 4.56,
      address: '서울 종로구 혜화로 46-1 (혜화동)',
      phone: '02-766-7661',
      hours: '월, 수-일요일 12:00-22:00, 매주 화요일 휴무',
      category: '한식',
      payment: '서울 페이',
      coupon_is: 1,
      coupon: '3인 이상 방문 시 사이드메뉴 1개 무료 제공',
      menu: [
        {
          name: '도드람한돈 가족세트',
          menuImage: 'https://i.imgur.com/Tdr3Q9w.jpeg',
        },
        {
          name: '소고기 가족세트',
          menuImage: 'https://i.imgur.com/ykIrPhm.jpeg',
        },
        {
          name: '돼지왕갈비 3인',
          menuImage: 'https://i.imgur.com/rlCC4gl.jpeg',
        },
      ],
    },
    {
      id: 26,
      name: '명동도면',
      image: 'https://i.imgur.com/5hE5jMq.jpeg',
      rating: 4.36,
      address: '서울시 종로구 혜화로3길 5 1층(명륜1가)',
      phone: '02-741-6466',
      hours: '10:00-21:00',
      category: '한식',
      payment: '서울 페이',
      coupon_is: 0,
      coupon: null,
      menu: [
        { name: '제육비빔밥', menuImage: 'https://i.imgur.com/Sz1HVsT.jpeg' },
        {
          name: '뚝배기얼큰김치도면',
          menuImage: 'https://i.imgur.com/ykIrPhm.jpeg',
        },
        { name: '김치말이도면', menuImage: 'https://i.imgur.com/K6z1vrx.jpeg' },
      ],
    },
    {
      id: 27,
      name: '골목냉면(골목냉면 혜화점)',
      image: 'https://i.imgur.com/MVcJT6Y.jpeg',
      rating: 4.27,
      address: '서울특별시 종로구 혜화로 2(혜화동) 1층(혜화동)',
      phone: '02-765-6580',
      hours: '11:00-21:00',
      category: '한식',
      payment: '서울 페이',
      coupon_is: 0,
      coupon: null,
      menu: [
        { name: '명태회냉면', menuImage: 'https://i.imgur.com/axF11NZ.jpeg' },
        {
          name: '살얼음동동물냉면',
          menuImage: 'https://i.imgur.com/ykIrPhm.jpeg',
        },
        {
          name: '매콤달콤비빔냉면',
          menuImage: 'https://i.imgur.com/OpHBnXS.jpeg',
        },
      ],
    },
  ],
};

// ID로 가게 찾기
export const getStoreById = id => {
  return apiResponse.stores.find(store => store.id === parseInt(id));
};
