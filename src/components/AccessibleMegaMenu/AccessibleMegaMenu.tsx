import React, { useRef, useState } from "react";
import MenuItem from "../MenuItem";
import './AccessibleMegaMenu.css';

const AccessibleMegaMenu = (props) => {
  const {
    menuBarClassName,
    menuItemClassName,
    subMenuClassName,
    subMenuGroupClassName,
    menuData,
  } = props;

  const [openedIndex, setOpenedIndex] = useState(null);

  const megaMenuRef = useRef(null);

  return (
    <nav aria-label="Mega menu" id="accessible-mega-menu" data-testid="accessible-mega-menu" ref={megaMenuRef}>
      <ul className={`menu-bar ${menuBarClassName}`} role="menubar">
        {menuData.map((item, index) => {
          return (
            <MenuItem
              key={index}
              index={index}
              {...{
                ...item,
                megaMenuRef,
                openedIndex,
                setOpenedIndex,
                menuItemClassName,
                subMenuClassName,
                subMenuGroupClassName,
              }}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default AccessibleMegaMenu;
