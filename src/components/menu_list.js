import React from 'react';
import MenuItem from "./menu_items";

const MenuList = ({menuItems}) => {

        const items = menuItems.map(
            (item) => {
                const {id, ...itemProps} = item;
                return (
                    <MenuItem key={id} {...itemProps}/>
                )
            }
        )
/**/        return(
            <>
                {items}
            </>
        );


}
export default MenuList;