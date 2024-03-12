import React from 'react';
import { createRoot } from 'react-dom/client';
import BookingWidget from "./components/BookingWidget";

const bookingWidgets = document.querySelectorAll('.test-booking-widget');

bookingWidgets.forEach((widget) => {
    const root = createRoot(widget);

    root.render(
        <React.StrictMode>
            <BookingWidget />
        </React.StrictMode>
    );
})
