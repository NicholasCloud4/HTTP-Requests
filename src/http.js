export async function fetchAvailablePlaces() {
    const res = await fetch('http://localhost:3000/places')
    const data = await res.json();

    if (!res.ok) {
        throw new Error('Something went wrong! Failed to fetch places.');
    }

    return data.places;
}

export async function fetchUserPlaces() {
    const res = await fetch('http://localhost:3000/user-places')
    const data = await res.json();

    if (!res.ok) {
        throw new Error('Something went wrong! Failed to fetch user places.');
    }

    return data.places;
}

export async function updateUserPlaces(places) {
    const res = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({ places: places }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error('Something went wrong! Failed to update user places.');
    }

    return data.message

}

