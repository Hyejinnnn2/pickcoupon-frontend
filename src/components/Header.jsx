import bellIcon from '../assets/f7_bell-fill.svg'; // 필요 없으면 삭제

const Header = () => {
  return (
    <div className='Header'>
      <h1>Pickoo</h1>
      <div className='Icon'>
        <img src={bellIcon} alt='알림' />
      </div>
    </div>
  );
};

export default Header;
