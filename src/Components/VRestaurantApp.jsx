import React, { useState } from 'react';
import { Menu } from './Menu/Menu';
import { Tables } from './Tables/Tables';
import { Bills } from './Bills/Bills';
import { table } from '../Data/data';

export function VRestaurantApp() {

    const initialGuestsArr = Array.from({length: 4}, (v, i) => i + 1);

    const tableWithGuests = {...table, guests: initialGuestsArr};

    const initialTablesArr = Array.from({length: 4}, (v, i) => (
        {...tableWithGuests, id: i + 1}
    ));

    // eslint-disable-next-line no-unused-vars
    const [tables, setTables] = useState(initialTablesArr);


    return (
        <div className="app-wrapper">
            <header>

            </header>
            <main>
                <Menu />
                <Tables tables={tables}/>
                <Bills />
            </main>
        </div>
    );
}
