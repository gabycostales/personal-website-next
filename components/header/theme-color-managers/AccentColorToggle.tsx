import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAccentColor } from '../../../hooks/theme';
import ToggleButton from './ToggleButton';

export const AccentColorToggle = () => {
  const { toggleAccentColor } = useAccentColor();

  return (
    <ToggleButton title="Change Theme Accent Color" onClick={toggleAccentColor}>
      <FontAwesomeIcon
        icon={faPalette}
        className="w-6 text-white dark:text-accent"
      />
    </ToggleButton>
  );
};

export default AccentColorToggle;
