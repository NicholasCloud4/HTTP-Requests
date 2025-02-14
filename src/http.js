async function fetchAvailablePlaces() {
    const res = await fetch('http://localhost:3000/places')
    const data = await res.json();

    if (!res.ok) {
        throw new Error('Something went wrong! Failed to fetch places.');
    }

    return data.places;
}

export { fetchAvailablePlaces }