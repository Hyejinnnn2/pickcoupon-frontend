//import { storeData } from '../data/storeData';
//import { apiResponse } from '../data/apiResponse';
import { useEffect, useState } from 'react';
import { fetchStoreData } from '../api/storeApi';
import Store from './Store';

export default function StoreView() {
  const [resp, setResp] = useState(null);
  const [err, setErr] = useState(null);
  const userId = 1;

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await fetchStoreData(userId);
        if (mounted) setResp(data);
      } catch (e) {
        if (mounted) setErr(e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [userId]);

  if (!resp && !err) return <p>불러오는 중…</p>;
  // 에러 처리
  if (err) return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;

  const { message = '', stores = [] } = resp;

  // 데이터가 비어있을 경우 처리
  if (!stores.length) {
    // 임시 디버깅: 실제 응답을 잠깐 확인해보려면 아래 한 줄 주석 해제
    console.log('resp:', resp);
    return <p>표시할 매장이 없습니다.</p>;
  }

  return (
    <div className='StoreView'>
      <p className='Ai'>{message}</p>
      <div className='PayList'>
        <p className='fixedMent'>
          {stores[0].payment}로 결제 가능한 {stores[0].category}
        </p>
        <div className='StoreList'>
          {stores.slice(0, 3).map(store => (
            <Store key={store.id} store={store} />
          ))}
        </div>
      </div>
      <div className='CouponList'>
        <p className='fixedMent'>
          {stores[3].payment}로 결제 가능한 {stores[3].category}
        </p>
        <div className='StoreList'>
          {stores.slice(3, 6).map(store => (
            <Store key={store.id} store={store} />
          ))}
        </div>
      </div>
    </div>
  );
}
