import type { NextPage } from 'next';
import { faGraduationCap, faMugHot } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../components/page-title';
import Work from '../components/resume/Work';
import ResumeSection from '../components/resume/ResumeSection';

const Resume: NextPage = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex-1 max-w-[450px]">
          <PageTitle title="resume" />
        </div>
      </div>

      <ResumeSection
        title="education"
        icon={faGraduationCap}
        sectionClassName="mt-10 mb-8"
      >
        <>
          <h3 className="mb-6 text-lg lgMobile:text-xl tracking-wide font-mono font-bold text-accent">
            University of Miami
          </h3>
          <p className="my-2">
            Bachelor{"'"}s Degree, <b>Computer Science</b>
          </p>
          <p>
            Minors: <b>Mathematics</b> and <b>Business Administration</b>
          </p>
        </>
      </ResumeSection>

      <ResumeSection title="work" icon={faMugHot}>
        <Work />
      </ResumeSection>
    </>
  );
};

export default Resume;
