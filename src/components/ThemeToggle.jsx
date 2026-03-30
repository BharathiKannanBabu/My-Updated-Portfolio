import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);


    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }
    }
    return (
        <button
            onClick={toggleTheme}
            className={cn("fixed ml-1 right-5 z-50 rounded-full transition-colors duration-300",
                "cursor-pointer")}
        >
            {isDarkMode ? <Sun className='h-6 w-6 text-yellow-400' /> : <Moon className='h-6 w-6 text-blue-900' />}
        </button>
    )
}

export default ThemeToggle
