import { Table } from './Table';

export function Tables({ tables, handleGuestWhoOrders }) {

    const tableList = tables.map(table => 
        <li key={table.id}>
            <Table 
                table={table}
                handleGuestWhoOrders={handleGuestWhoOrders}
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
