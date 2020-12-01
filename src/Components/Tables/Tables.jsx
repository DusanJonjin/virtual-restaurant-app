import { Table } from './Table';

export function Tables({ tables, handleGuestWhoOrders, removeOrderedItem }) {

    const tableList = tables.map(table => 
        <li key={table.id}>
            <Table 
                table={table}
                handleGuestWhoOrders={handleGuestWhoOrders}
                removeOrderedItem={removeOrderedItem}
            />
        </li>
    );

    return (
        <div>
            <ul>
                {tableList}
            </ul>
        </div>
    )
}
