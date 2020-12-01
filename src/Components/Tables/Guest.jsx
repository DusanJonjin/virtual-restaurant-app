export function Guest({ tableID, guestID, orders, handleGuestWhoOrders }) {
    
    const guestOrders = orders.reduce((acc, order, i) => 
        order.guestID === guestID ? 
            [
                ...acc, 
                <li 
                    key={i}
                    
                >
                    {order.name}
                </li>
            ] 
         :  acc
    , []);

    return (
        <div>
            <h5>Guest {guestID}</h5>
            <button
                onClick={() => handleGuestWhoOrders(tableID, guestID)}
            >
                Order
            </button>
            <ul>{guestOrders}</ul>
        </div>
    )
}
