import { createContext, useCallback, useContext, useState } from 'react';

export enum ColorScheme {
  light = 'light',
  dark = 'dark',
}

export enum AccentColor {
  blue = '#679cdf',
  purple = '#48bb78',
  green = '#9f7aea',
  pink = '#ed64a6',
}

type ColorSchemeContext = {
  isLightMode: boolean;
  isDarkMode: boolean;
  toggleMode: () => void;
};

type AccentColorContext = {
  accentColor: AccentColor;
  toggleAccentColor: () => void;
};

type ThemeContext = {
  accentColor: AccentColorContext;
  colorScheme: ColorSchemeContext;
};

const ThemeColors: AccentColor[] = Object.values(AccentColor);

const ThemeContext = createContext<ThemeContext>({
  accentColor: {
    accentColor: AccentColor.blue,
    toggleAccentColor: () => {},
  },
  colorScheme: {
    isLightMode: false,
    isDarkMode: true,
    toggleMode: () => {},
  },
});

function useAccentColor() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useAccentColorTheme should be used within a ThemeProvider'
    );
  }

  return context.accentColor;
}

function useColorScheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useColorMode should be used within a ThemeProvider');
  }

  return context.colorScheme;
}

function ThemeProvider({ ...props }) {
  const [accentIndex, setAccentIndex] = useState(0);
  const accentColor = ThemeColors[accentIndex];
  const toggleAccentColor = useCallback(() => {
    const newAccentIndex =
      accentIndex + 1 < ThemeColors.length ? accentIndex + 1 : 0;
    const newAccentColor = ThemeColors[newAccentIndex];

    // Update CSS Var for accent color
    document.documentElement.style.setProperty(
      '--accent-color',
      newAccentColor
    );

    setAccentIndex(newAccentIndex);
  }, [accentIndex]);

  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        accentColor: {
          accentColor,
          toggleAccentColor,
        },
        colorScheme: {
          isDarkMode,
          isLightMode: !isDarkMode,
          toggleMode,
        },
      }}
      {...props}
    />
  );
}

export { useAccentColor, useColorScheme, ThemeProvider };
