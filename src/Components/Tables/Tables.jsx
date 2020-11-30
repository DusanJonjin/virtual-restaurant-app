import { Table } from './Table';

export function Tables({ tables }) {

    const tableList = tables.map(table => 
        <li key={table.id}>
            <Table table={table} />
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
