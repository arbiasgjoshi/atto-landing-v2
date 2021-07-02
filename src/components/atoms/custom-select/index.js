import React, { useState, useEffect } from 'react';
import { useIntl, changeLocale } from 'gatsby-plugin-react-intl';

import ArrowDown from '@images/arrow-down.svg';
import {
  selectDropdown,
  selectedItem,
  optionsDropdown,
  activeItem,
  isOpened,
  option,
  backdropContainer,
} from './custom-select.module.scss';

const CustomSelect = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const intl = useIntl();

  const languages = [
    {
      id: 'en',
      path: 'en',
      name: 'English',
    },
    {
      id: 'es',
      path: 'es',
      name: 'Español',
    },
    {
      id: 'fr',
      path: 'fr',
      name: 'Française',
    },
    {
      id: 'de',
      path: 'de',
      name: 'Deutsch',
    },
  ];

  const buttonClass = (item) => {
    let defaultClass = option;
    if (item.name === selected) {
      defaultClass += ` ${activeItem}`;
    }
    return defaultClass;
  };

  const renderLocale = (val) => {
    const currentItem = languages.filter((lang) => lang.name === val || lang.id === val);
    setSelected(currentItem[0].name);
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    renderLocale(intl.locale);
  }, []);

  return (
    <div
      className={selectDropdown}
      onKeyDown={() => toggleDropdown()}
      role="menu"
      tabIndex="0"
      onClick={() => toggleDropdown()}
    >
      <div className={selectedItem}>
        <span>{selected}</span>
        <ArrowDown />
      </div>
      <div className={`${optionsDropdown} ${open && isOpened}`}>
        {languages.map((lang, ix) => (
          <button
            className={buttonClass(lang)}
            onClick={() => changeLocale(lang.path)}
            type="button"
            key={ix}
          >
            {lang.name}
          </button>
        ))}
      </div>
      {open && (
        <div
          className={backdropContainer}
          onKeyDown={() => {}}
          role="menu"
          tabIndex="-1"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default CustomSelect;
