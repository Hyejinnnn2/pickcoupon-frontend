import Map from '../assets/map.png';
import FilterTabs from './FilterTabs';
import MapStore from './MapStore';
import Searchbar from './Searchbar';

const MapView = () => {
  return (
    <div className='MapView'>
      <Searchbar />
      <FilterTabs />
      <img className='Map' src={Map} alt='지도' />
      <MapStore />
    </div>
  );
};

export default MapView;
