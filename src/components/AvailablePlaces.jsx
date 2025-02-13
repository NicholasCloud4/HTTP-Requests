import { useEffect } from 'react';
import Places from './Places.jsx';
import { useState } from 'react';
import ErrorPage from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const res = await fetch('http://localhost:3000/places')
        const data = await res.json();

        if (!res.ok) {
          throw new Error('Something went wrong! Failed to fetch places.');
        }

        setAvailablePlaces(data.places);

      } catch (error) {
        setError({ message: error.message || 'Failed to fetch places.' });
        return;
      }
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);

  if (error) {
    return (
      <ErrorPage title="Error" message={error.message} />
    )
  }


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
