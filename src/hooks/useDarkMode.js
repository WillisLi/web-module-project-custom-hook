import React from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage("", initialValues);
    return [darkMode, setDarkMode];
}

export default useDarkMode;