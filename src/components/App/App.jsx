import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../Header/Header';
import Container from '../Container/Container';

import { fetchGeocodedLocation } from '../../redux/checkoutSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchGeocodedLocation()), [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Container />
      </main>
    </>
  );
};

export default App;
