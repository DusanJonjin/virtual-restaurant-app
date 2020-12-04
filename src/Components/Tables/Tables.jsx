import { Table } from './Table';

export function Tables({ tables, handleGuestWhoOrders, removeOrderedItem, removeTable }) {

    const tableList = tables.map(table => 
        <li key={table.id}>
            <Table 
                table={table}
                handleGuestWhoOrders={handleGuestWhoOrders}
                removeOrderedItem={removeOrderedItem}
                removeTable={removeTable}
            />
        </li>
    );

    return (
        <section>
            <p>New table +</p>
            <div>
                <p>Table number:</p>
                <p>Add table</p>
            </div>
            <ul>
                {tableList}
            </ul>
        </section>
    )
}
