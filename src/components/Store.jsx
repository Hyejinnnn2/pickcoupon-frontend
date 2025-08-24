import { useNavigate } from 'react-router-dom';
import starIcon from '../assets/star.svg';

export default function Store({ store }) {
  const navigate = useNavigate();

  const handleStoreClick = () => {
    navigate(`/store/${store.id}`);
  };

  return (
    <section className='Store' onClick={handleStoreClick}>
      <img className='Store__image' src={store.image} alt='가게이미지' />
      <div>
        <div className='Store__header'>
          <p className='Store__name'>{store.name}</p>
          <div className='Store__rating'>
             <img className='Store__star-icon' src={starIcon} alt='별점' />
             <p className='Store__score'>{store.rating}</p>
          </div>
  
        </div>
        <p className='Store__meta'>
          {store.category}
          {store.coupon_is === 1 ? ' · 쿠폰 제공 ' : ' · 쿠폰 미제공'}
        </p>
      </div>
    </section>
  );
}
