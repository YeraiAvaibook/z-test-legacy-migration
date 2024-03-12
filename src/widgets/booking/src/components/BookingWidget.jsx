import { useEffect, useState } from 'react';
import BookingInfo from "../../../../components/BookingInfo/BookingInfo";
import getBookingData from "../../../../services/booking/getBookingData";

export default function BookingWidget() {
    const [bookingData, setBookingData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const bookingData = await getBookingData();
            setBookingData(bookingData);
            setIsLoading(false);
        })();
    }, []);

    return !isLoading ? (
        <BookingInfo bookingData={bookingData}/>
    ) : <span>Is loading...</span>
}