import { createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem("theme");
        if(stored) return stored

        // return window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
    }) 

    useEffect(() => {
        localStorage.setItem("theme", theme);

        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark'? 'light' : 'dark'))
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

};

export const useTheme = () => useContext(ThemeContext);