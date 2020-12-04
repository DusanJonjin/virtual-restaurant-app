import { Guests } from './Guests';

export function Table(props) {

    const { table, removeTable } = props;

    const { id } = table;

    return (
        <div>
            <h4>Table {id}</h4>
            <div onClick={() => removeTable(id)}>Remove</div>
            <Guests {...props} />
        </div>
    )
}
