import React, { useState } from 'react';
import { Menu } from './Menu/Menu';
import { Tables } from './Tables/Tables';
import { Bills } from './Bills/Bills';
import { table } from '../Data/data';
import './VRestaurantApp.css';

export function VRestaurantApp() {

    const initialGuestsArr = Array.from({length: 4}, (v, i) => i + 1);

    const tableWithGuests = {...table, guests: initialGuestsArr};

    const initialTablesArr = Array.from({length: 4}, (v, i) => (
        {...tableWithGuests, id: i + 1}
    ));

    // eslint-disable-next-line no-unused-vars
    const [tables, setTables] = useState(initialTablesArr);

    const [guestWhoOrders, setGuestWhoOrders] = useState({tableID: 0, guestID: 0});

    const { tableID, guestID } = guestWhoOrders;

    const handleGuestWhoOrders=(tableID, guestID) => {
        setGuestWhoOrders({tableID, guestID})
    }

    const addOrderedItem = (item) => {
        if (!tableID || !guestID) return;
        setTables(prevTables => {
            const addItemToTable = prevTables.map(prevTable => {
                if (prevTable.id === tableID) {
                    const newOrder = {...item, guestID};
                    const newTable = {...prevTable, orders: [...prevTable.orders, newOrder]};
                    return newTable;
                }
                else return prevTable;
            })
            return addItemToTable;
        })
    };

    return (
        <div className="app-wrapper">
            <header>

            </header>
            <main>
                <Menu addOrderedItem={addOrderedItem}/>
                <Tables
                    tables={tables}
                    handleGuestWhoOrders={handleGuestWhoOrders}
                />
                <Bills />
            </main>
        </div>
    );
}
