import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles.css';

import Headers from './components/Header';
import MapView from './components/MapView';
import StoreDetail from './components/StoreDetail';
import StoreView from './components/StoreView';

function App() {
  return (
    <Router>
      <div className='App'>
        <Headers />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <MapView />
                <StoreView />
              </>
            }
          />
          <Route path='/store/:id' element={<StoreDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
