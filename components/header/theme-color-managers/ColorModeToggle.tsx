import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useColorScheme } from '../../../hooks/theme';
import ToggleButton from './ToggleButton';

export const ColorModeToggle = () => {
  const { isLightMode, toggleMode } = useColorScheme();

  return (
    <ToggleButton title="Change Theme Color Mode" onClick={toggleMode}>
      <FontAwesomeIcon
        icon={isLightMode ? faMoon : faSun}
        className="w-6 text-white dark:text-gold"
      />
    </ToggleButton>
  );
};

export default ColorModeToggle;
