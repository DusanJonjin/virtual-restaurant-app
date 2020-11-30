import { Guest } from './Guest';

export function Guests({ guests, orders }) {

    const guestsList = guests.map(guestNum => 
        <li key={guestNum}>
            <Guest 
                guestNum={guestNum}
                orders={orders}
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
