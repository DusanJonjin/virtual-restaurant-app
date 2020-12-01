import { Guest } from './Guest';

export function Guests(props) {

    const { table, handleGuestWhoOrders } = props;

    const { id, guests, orders } = table;

    const guestsList = guests.map(guestNum => 
        <li key={guestNum}>
            <Guest 
                tableID={id}
                guestID={guestNum}
                orders={orders}
                handleGuestWhoOrders={handleGuestWhoOrders}
            />
        </li>
    );


    return (
        <div>
            <ul>
                {guestsList}
            </ul>
        </div>
    )
}
