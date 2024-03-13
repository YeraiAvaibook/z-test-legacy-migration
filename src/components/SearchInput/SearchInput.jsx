'use client'

import getBookingData from "../../services/booking/getBookingData";

export default function SearchInput() {
    const handleChange = (value) => {
        (async () => {
            console.log(value)
            const bookingData = await getBookingData();
            console.log(bookingData);
        })();
    };

    return (
        <input id="bookingIdentifier" type="text" onBlur={(e) => handleChange(e.target.value)} placeholder="Identificador de la reserva"/>
    )
}
