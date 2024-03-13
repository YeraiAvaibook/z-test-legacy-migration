import styles from './BookingInfo.module.css';
import SearchInput from "../SearchInput/SearchInput";

export default function BookingInfo({ bookingData }) {
    return (
        <section className={styles.bookingWidgetWrapper}>
            <section className={styles.bookingInfoWrapper}>
                <div className={styles.bookingInfoHeaderWrapper}>
                    <span>{bookingData.key}</span>
                    <span>{bookingData.type}</span>
                    <span>01/01/1990</span>
                </div>
                <div className={styles.bookingInfoConfigWrapper}>
                    <SearchInput />
                    <input id="bookingOrigin" type="text" placeholder="Origen de la reserva"/>
                    <input id="bookingTaxes" type="number" placeholder="Tasa"/>
                    <input id="bookingTags" type="text" placeholder="Etiquetas"/>
                </div>
            </section>
            <section className={styles.bookingAccommodationDataWrapper}>
                <div>
                    <span>Datos del alojamiento y fechas</span>
                </div>
            </section>
            <section className={styles.bookingPaymentWrapper}>
                <div>
                    <span>Información de los importes</span>
                </div>
            </section>
        </section>
    )
}
