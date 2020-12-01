import React from 'react';
import { MenuItem } from './MenuItem'; 

export function MenuItemsList({ chosenCategory, addOrderedItem }) {

    const { category, items } = chosenCategory;

    const menuItemsList = items?.map((item, i) =>
        <li key={i}>
            <MenuItem 
                item={item}
                addOrderedItem={addOrderedItem} 
            />
        </li>
    );

    const categoryIsChosen = chosenCategory?.category

    return (
        <div>
            {categoryIsChosen ?
                <React.Fragment>
                    <h4>{category.toUpperCase()}</h4>
                    <ul>
                        {menuItemsList}
                    </ul>
                </React.Fragment>
              : 'Choose a menu category'
            }
        </div>

    )
}
