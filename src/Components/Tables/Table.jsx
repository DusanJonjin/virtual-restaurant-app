import { Guests } from './Guests';

export function Table({ table }) {

    const { id, ...guestsProps } = table;

    return (
        <div>
            <h4>Table {id}</h4>
            <Guests {...guestsProps} />
        </div>
    )
}
