import React, { useEffect, useState } from 'react'
import AddTitle from './my_components/AddTitle'
import MainContents from './my_components/contents/MainContents'
import sunIcon from './my_components/common/icon/sun.png'
import moonIcon from './my_components/common/icon/moon_white.svg'

function App() {

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true' || false
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className='App'>
            <button className='absolute top-[24px] right-[24px] p-3 bg-gray-800 text-white rounded-full dark:bg-white flex items-center' onClick={toggleDarkMode} >
                <img 
                    src={darkMode ? sunIcon : moonIcon}
                    alt={darkMode ? "Light Mode" : "Dark Mode"}
                    className='w-8 h-8'
                />
            </button>
            <AddTitle />
            <MainContents />
        </div>
    )
}

export default App