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
      tabIndex="0"
      role="button"
      onClick={() => toggleDropdown()}
    >
      <div className={selectedItem}>
        <span aria-label="language">{selected}</span>
        <ArrowDown />
      </div>
      <div
        className={`${optionsDropdown} ${open && isOpened}`}
        aria-haspopup="listbox"
        role="listbox"
        aria-labelledby="language"
        aria-expanded="true"
      >
        {languages.map((lang, ix) => (
          <button
            className={buttonClass(lang)}
            aria-selected={lang.name === selected && true}
            onClick={() => changeLocale(lang.path)}
            type="button"
            role="option"
            id={`choose_language_${lang.id}`}
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
