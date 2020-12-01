import { Guests } from './Guests';

export function Table(props) {

    const { id } = props.table;

    return (
        <div>
            <h4>Table {id}</h4>
            <Guests {...props} />
        </div>
    )
}
