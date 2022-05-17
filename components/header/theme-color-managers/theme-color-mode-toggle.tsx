import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useColorScheme } from '../../../hooks/theme';
import styles from './ThemeColorManagers.module.css';

export const ThemeColorModeToggle = () => {
  const { isLightMode, toggleMode } = useColorScheme();

  return (
    <button
      className={`${styles.toggle} ${isLightMode && styles.light}`}
      title="Change Theme Color Mode"
      onClick={toggleMode}
    >
      <FontAwesomeIcon icon={isLightMode ? faMoon : faSun} />
    </button>
  );
};

export default ThemeColorModeToggle;
