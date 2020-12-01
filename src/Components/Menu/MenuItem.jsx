export function MenuItem({ item, addOrderedItem }) {

    return (
        <p onClick={() => addOrderedItem(item)}>
            {item.name}&ensp;{item.price}
        </p>
    )
}
