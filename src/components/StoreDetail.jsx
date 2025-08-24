// StoreDetail.jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchStoreData } from '../api/storeApi';
import backIcon from '../assets/back.svg';
import starIcon from '../assets/star.svg';

const StoreDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ StoreView.jsx와 통일
  const [resp, setResp] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchStoreData(1); // { message, stores }
        if (!mounted) return;
        setResp(data);
      } catch (e) {
        if (mounted) setErr(e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p>불러오는 중...</p>;
  if (err) return <p>데이터를 불러오지 못했습니다.</p>;
  if (!resp) return null;

  // ✅ 여기서 바로 resp.stores에서 id로 찾기
  const storeData = resp.stores.find(s => String(s.id) === String(id));
  if (!storeData) {
    navigate('/');
    return null;
  }

  const hasCoupon = Number(storeData.coupon_is) === 1;

  return (
    <div className='StoreDetail'>
      <div className='store-main-wrapper'>
        <button onClick={() => navigate('/')}>
          <img src={backIcon} alt='back' />
        </button>
        <img
          className='store-main-image'
          src={storeData.image}
          alt={storeData.name}
        />
      </div>

      <div className='store-detail-container'>
        <div className='store-detail-header'>
          <p className='store-detail-name'>{storeData.name}</p>
          <div className='store-detail__rating'>
            <img
              className='store-detail__star-icon'
              src={starIcon}
              alt='star'
            />
            <p className='store-detail__score'>{storeData.rating}</p>
          </div>
        </div>
        <p className='store-detail-info'>
          {storeData.category}
          {hasCoupon ? ' · 쿠폰 제공' : ' · 쿠폰 미제공'}
        </p>
      </div>

      <div className='store-info'>
        <p>{storeData.address}</p>
        <p>{storeData.hours}</p>
        <p>{storeData.phone}</p>
      </div>

      <div className='store-coupon'>
        <p>{hasCoupon ? storeData.coupon : '쿠폰이 존재하지 않습니다.'}</p>
      </div>

      <div>
        <p className='menu-header'>메뉴</p>
        <div className='menu-list'>
          {storeData.menu?.map((item, index) => {
            const imgSrc =
              item.menuImage ??
              item.menuimage ??
              'https://via.placeholder.com/300';
            return (
              <div key={index} className='menu-info'>
                <img src={imgSrc} alt={item.name} className='menu-image' />
                <p className='menu-name'>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
