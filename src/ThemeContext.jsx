import { createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem("theme");
        if(stored) return stored;

        // Default to 'dark' if no stored preference
        return 'dark';
    }) 

    useEffect(() => {
        console.log('Theme state changed to:', theme); // Debug log
        localStorage.setItem("theme", theme);

        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
            console.log('Added dark class to document'); // Debug log
        } else {
            document.documentElement.classList.remove('dark');
            console.log('Removed dark class from document'); // Debug log
        }
        
        // Log the current classes on document
        console.log('Document classes:', document.documentElement.className);
    }, [theme])

    const toggleTheme = () => {
        console.log('toggleTheme called, current theme:', theme); // Debug log
        setTheme(prev => {
            const newTheme = prev === 'dark' ? 'light' : 'dark';
            console.log('Setting theme from', prev, 'to', newTheme); // Debug log
            return newTheme;
        });
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

};

export const useTheme = () => useContext(ThemeContext);