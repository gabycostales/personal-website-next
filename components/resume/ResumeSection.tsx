import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useColorScheme } from '../../hooks/theme';

type ResumeTitleProps = {
  title: string;
  icon: IconDefinition;
  children: JSX.Element;
  sectionClassName?: string;
};

const ResumeSection = ({
  icon,
  title,
  sectionClassName = '',
  children,
}: ResumeTitleProps) => {
  const { isLightMode } = useColorScheme();

  return (
    <section className={sectionClassName}>
      <div
        className={`mx-[-5px] mobile:mx-[-12px] lgMobile:mx-[-20px] dark:mx-[-20px] p-7 smTablet:p-9 theme-light-mode-bg ${
          isLightMode && 'theme-box-highlight'
        }`}
      >
        <div className="flex items-baseline mb-7">
          <div className="w-9 mr-4 text-accent">
            <FontAwesomeIcon icon={icon} />
          </div>
          <h2 className="font-bold text-4xl leading-none tracking-wide">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default ResumeSection;
