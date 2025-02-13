import { useEffect } from 'react';
import Places from './Places.jsx';
import { useState } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {

    async function fetchPlaces() {
      const res = await fetch('http://localhost:3000/places')
      const data = await res.json();
      setAvailablePlaces(data.places);
    }

    fetchPlaces();
  }, []);


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
