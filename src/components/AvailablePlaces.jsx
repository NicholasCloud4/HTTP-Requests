import { useEffect } from 'react';
import Places from './Places.jsx';
import { useState } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {

    async function fetchPlaces() {
      setIsFetching(true);
      const res = await fetch('http://localhost:3000/places')
      const data = await res.json();
      setAvailablePlaces(data.places);
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
