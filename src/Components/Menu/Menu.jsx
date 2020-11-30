import React, { useState } from 'react'
import { MenuItemsList } from './MenuItemsList';
import { menu } from '../../Data/data';

export function Menu() {

    const [chosenCategory, setChosenCategory] = useState({});

    const menuCategoriesArr = Object.keys(menu);

    const handleChosenCategory = category => {
        setChosenCategory(
            {category, items: menu[category]}
        );
    }

    const menuCategoriesList = menuCategoriesArr.map((category, i) => 
        <li 
            key={i}
            onClick={() => handleChosenCategory(category)}
        >
            {category.toUpperCase()}
        </li>
    );

    return (
        <aside>
            <h2>Menu</h2>
            <div style={{display: 'flex'}}>
                <ol>
                    {menuCategoriesList}
                </ol>
                <MenuItemsList 
                    chosenCategory={chosenCategory} 
                />
            </div>
        </aside>
    )
}
