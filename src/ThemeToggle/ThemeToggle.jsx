import React, { useEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from '@/assets/svg/moon.svg';
import { ReactComponent as SunIcon } from '@/assets/svg/sun.svg';

import './ThemeToggle.css';

const updateTheme = (isDarkEnabled) => {
  // Get all available styles
  const styles = getComputedStyle(document.body);

  // Get the --black and --white variable values
  const black = styles.getPropertyValue('--black');
  const white = styles.getPropertyValue('--white');

  // Optional shorthand constant for accessing document.documentElement
  const docEl = document.documentElement;

  if (isDarkEnabled) {
    docEl.style.setProperty('--background', black);
    docEl.style.setProperty('--foreground', white);
    document.querySelector('html').classList.add('darkmode');
  } else {
    docEl.style.setProperty('--background', white);
    docEl.style.setProperty('--foreground', black);
    document.querySelector('html').classList.remove('darkmode');
  }
};

const ThemeToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  useEffect(() => {
    // Pass in the isEnabled state
    updateTheme(isEnabled);
  }, [isEnabled]);

  return (
    <label htmlFor="toggle" className="toggle-wrapper">
      <div className={`toggle ${isEnabled ? 'enabled' : 'disabled'}`}>
        <span className="hidden">
          {isEnabled ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          type="checkbox"
          id="toggle"
          name="toggle"
          checked={isEnabled}
          onClick={toggleState}
          readOnly
        />
      </div>
    </label>
  );
};

export default ThemeToggle;
