import {ThemeContext} from "./theme-context";
import useLocalStorage from "use-local-storage";

function ThemeProvider({children}) {

	const [theme, setTheme] = useLocalStorage('theme', 'light' ? 'dark' : 'light');

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	}

	const values = {
		theme: theme,
		toggleTheme: toggleTheme
	}

	return (
		<ThemeContext.Provider value={values}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
