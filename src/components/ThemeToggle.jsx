import React, { useState, useEffect } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div className="fixed top-5 right-5 z-50 flex flex-col items-center space-y-1 text-sm text-muted-foreground">
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isDarkMode}
                    onChange={toggleTheme}
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-primary dark:bg-gray-600 transition-colors duration-300"></div>
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5 shadow" />
            </label>
            <span>{isDarkMode ? "Dark" : "Light"}</span>
        </div>
    );
};
