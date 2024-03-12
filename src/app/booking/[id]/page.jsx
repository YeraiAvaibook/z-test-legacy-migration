import React from "react";
import getBookingData from "@/services/booking/getBookingData";
import BookingInfo from "@/components/BookingInfo/BookingInfo";

export default async function BookingPage(
    { params: { id: bookingId } }
) {
    const bookingData = await getBookingData();

    return (
        <>
            <h1>Reserva {bookingId}!</h1>
            <br/>
            <BookingInfo bookingData={bookingData} />
        </>
    )
}
