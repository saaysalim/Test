import { createContext, useContext, useState } from 'react'; // Import createContext, useContext, and useState hooks from React

type Theme = "light" | "dark" | "system"; // Define Theme type with three possible values

// Create a context for the theme with a default value of "system"
const ThemeContext = createContext<Theme>("system");

// Custom hook for consuming the theme context more easily
const useGetTheme = () => useContext(ThemeContext);

// MyApp component that provides the theme context to its children
export default function MyApp() {
  const [theme] = useState<Theme>('light'); // State hook to manage theme, defaulting to 'light'
  return (
    // Provide the theme value to all components within ThemeContext.Provider
    <ThemeContext.Provider value={theme}>
      <MyComponent /> // Child component that will consume the theme context
    </ThemeContext.Provider>
  )
}
// Child component that uses the theme
function MyComponent() {
  const theme = useGetTheme(); // Use custom hook to get the current theme
  return (
    <div>
      <p>Current theme: {theme}</p> // Display the current theme
    </div>
  )
}
