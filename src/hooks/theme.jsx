import { useState } from 'react';

function theme() {
  const [theme, setTheme] = useState('dark');

  const changeTheme = (val) => {
    setTheme(val);
    const root = window.document.documentElement;
    root.setAttribute('class', val);
    localStorage.setItem('theme', val);
  };
  return [theme, changeTheme];
}

export default theme;
