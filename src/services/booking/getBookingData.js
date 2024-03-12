const getBookingData = async () => {
    const data = await fetch('https://www.boredapi.com/api/activity');
    return data.json();
}

export default getBookingData;