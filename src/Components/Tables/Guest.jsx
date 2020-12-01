export function Guest(props) {

    const { 
        tableID, 
        guestID, 
        orders, 
        handleGuestWhoOrders, 
        removeOrderedItem 
    } = props;
    
    const guestOrders = orders.map((order, i) => 
        order.guestID === guestID &&
            <li key={i}>
                <span onClick={() => removeOrderedItem(tableID, i)}>&#x2717;</span>
                {order.name}
            </li>
    );

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
