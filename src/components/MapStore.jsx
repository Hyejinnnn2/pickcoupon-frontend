import { useNavigate } from 'react-router-dom';
import starIcon from '../assets/star.svg';
//import { storeData } from '../data/storeData';
import { apiResponse } from '../data/apiResponse';

const MapStore = () => {
  const { message, stores } = apiResponse;

  const navigate = useNavigate();
  const store = stores[0]; // 첫 번째 가게 데이터 사용

  const handleStoreClick = () => {
    navigate(`/store/${store.id}`);
  };

  return (
    <section className='MapStore'>
      <img className='store-icon' src={store.image} alt='메인' />
      <div className='MapStore_container'>
        <div>
          <div className='MapStore__header'>
            <h2 className='store-name'>{store.name}</h2>
            <div className='store__rating'>
              <img className='star-icon' src={starIcon} alt='별점' />
              <p className='store__score'>{store.rating}</p>
            </div>
          </div>

          <p className='store-meta'>
            {store.category}
            {store.coupon_is === 1 ? ' · 쿠폰 제공 ' : ' · 쿠폰 미제공'}
          </p>
        </div>

        <button className='coupon-btn' onClick={handleStoreClick}>
          매장 바로가기
        </button>
      </div>
    </section>
  );
};

export default MapStore;
