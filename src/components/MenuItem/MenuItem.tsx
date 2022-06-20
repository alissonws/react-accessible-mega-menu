import React, { useEffect, useRef, useState } from "react";

const MenuItem = (props) => {
  const {
    label,
    subnav,
    href,
    index,
    megaMenuRef,
    openedIndex,
    setOpenedIndex,
    menuItemClassName,
    subMenuClassName,
    subMenuGroupClassName,
  } = props;

  const [isOpened, setIsOpened] = useState(false);

  const menuItemRef = useRef<HTMLLIElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);

  const getKeyboardFocusableElements = (
    element: HTMLElement | Element
  ): NodeListOf<HTMLElement> => {
    return [
      ...element.querySelectorAll(
        'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
      ),
    ].filter(
      (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
    ) as unknown as NodeListOf<HTMLElement>;
  };

  const handleNavigation = (e) => {
    const target = e.target;

    const keyboardKey = e.key;

    const eventTriggeredFromMenuItem = menuItemRef.current == target;

    const OPEN_KEYS = ["ArrowDown", "Enter"];

    const CLOSE_KEYS = ["Escape", "ArrowUp"];

    const ARROW_KEYS = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];

    const VERTICAL_NAVIGATION_KEYS = ["ArrowDown", "ArrowUp"];

    const HORIZONTAL_NAVIGATION_KEYS = ["ArrowLeft", "ArrowRight"];

    if (!subMenuRef.current || !menuItemRef.current) return;

    if (isOpened && ARROW_KEYS.includes(keyboardKey)) {
      if (VERTICAL_NAVIGATION_KEYS.includes(keyboardKey)) {
        const verticalOrientation = {
          ArrowDown: 1,
          ArrowUp: -1,
        };

        const tabbables = [...getKeyboardFocusableElements(subMenuRef.current)];

        const selectedTabbableIndex = tabbables.indexOf(target);

        if (selectedTabbableIndex === -1) {
          tabbables[0].focus();
          return;
        }

        const nextTabbableIndex =
          selectedTabbableIndex + verticalOrientation[keyboardKey];

        if (nextTabbableIndex === -1) {
          menuItemRef.current?.focus();
          setOpenedIndex(null);
          setIsOpened(false);

          return;
        }

        if (nextTabbableIndex >= tabbables.length) return;

        tabbables[nextTabbableIndex].focus();

        return;
      }

      if (HORIZONTAL_NAVIGATION_KEYS.includes(keyboardKey)) {
        if (!subMenuGroupClassName) return;

        const horizontalOrientation = {
          ArrowRight: 1,
          ArrowLeft: -1,
        };

        const subNavGroups = Array.from(
          subMenuRef.current.querySelectorAll(`.${subMenuGroupClassName}`)
        );

        const selectedTabbableIndex = subNavGroups.reduce(
          (acc, group, index) => {
            const tabbablesFromGroup = [...getKeyboardFocusableElements(group)];

            if (tabbablesFromGroup.indexOf(target) !== -1) return index;

            return acc;
          },
          0
        );

        const nextTabbableIndex =
          selectedTabbableIndex + horizontalOrientation[keyboardKey];

        if (
          nextTabbableIndex < 0 ||
          nextTabbableIndex >= subNavGroups.length - 1
        )
          return;

        getKeyboardFocusableElements(
          subNavGroups[nextTabbableIndex]
        )[0].focus();
      }
    }

    if (OPEN_KEYS.includes(keyboardKey)) {
      if (e.shiftKey) {
        window.location = href;
        return;
      }

      if (eventTriggeredFromMenuItem) {
        menuItemRef.current?.focus();
        setOpenedIndex(index);
        setIsOpened(true);

        return;
      }
    } else if (CLOSE_KEYS.includes(keyboardKey)) {
      menuItemRef.current?.focus();
      setOpenedIndex(null);
      setIsOpened(false);
    }
  };

  useEffect(() => setIsOpened(openedIndex === index), [openedIndex]);

  return (
    <li
      ref={menuItemRef}
      data-testid={`menu-item-${index}`}
      tabIndex={0}
      className={`nav-item ${isOpened ? "open" : ""}`}
      onMouseEnter={(e) => {
        setOpenedIndex(index);
      }}
      onMouseLeave={(e) => {
        setOpenedIndex(null);
      }}
      onKeyUp={handleNavigation}
    >
      <a
        role="menuitem"
        className={menuItemClassName}
        aria-haspopup="true"
        aria-expanded={isOpened}
        href={href}
        tabIndex={-1}
      >
        {label}
      </a>
      <div
        className={`sub-nav ${subMenuClassName}`}
        role="menu"
        ref={subMenuRef}
      >
        {subnav}
      </div>
    </li>
  );
};

export default MenuItem;
