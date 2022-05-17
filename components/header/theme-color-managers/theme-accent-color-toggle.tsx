import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAccentColor, useColorScheme } from '../../../hooks/theme';
import styles from './ThemeColorManagers.module.css';

export const ThemeAccentColorToggle = () => {
  const { toggleAccentColor } = useAccentColor();
  const { isLightMode } = useColorScheme();

  return (
    <button
      className={`${styles.toggle} ${isLightMode && styles.light}`}
      style={{ marginRight: '15px' }}
      title="Change Theme Accent Color"
      onClick={toggleAccentColor}
    >
      <FontAwesomeIcon
        icon={faPalette}
        style={{ color: isLightMode ? 'white' : 'var(--accent-color)' }}
      />
    </button>
  );
};

export default ThemeAccentColorToggle;
