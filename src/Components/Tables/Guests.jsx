import { Guest } from './Guest';

export function Guests(props) {

    const { table, handleGuestWhoOrders, removeOrderedItem } = props;

    const { id, guests, orders } = table;

    const guestsList = guests.map(guestNum => 
        <li key={guestNum}>
            <Guest 
                tableID={id}
                guestID={guestNum}
                orders={orders}
                handleGuestWhoOrders={handleGuestWhoOrders}
                removeOrderedItem={removeOrderedItem}
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
