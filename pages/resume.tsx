import type { NextPage } from 'next';
import { faGraduationCap, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useColorScheme } from '../hooks/theme';
import PageTitle from '../components/page-title';
import Work from '../components/resume/Work';
import styles from '../styles/Resume.module.css';

const Resume: NextPage = () => {
  const { isLightMode } = useColorScheme();

  return (
    <main className="main-container">
      <PageTitle title="resume" />

      <section className={styles.education}>
        <div
          className={`${styles.content} light-mode-bg ${
            isLightMode && 'box-highlight'
          }`}
        >
          <div className={styles.title}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <h2>education</h2>
          </div>
          <div className={styles.college}>
            <h3>University of Miami</h3>
            <p>
              Bachelor{"'"}s Degree, <b>Computer Science</b>
            </p>
            <p>
              Minors: <b>Mathematics</b> and <b>Business Administration</b>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div
          className={`${styles.content} light-mode-bg ${
            isLightMode && 'box-highlight'
          }`}
        >
          <div className={styles.title}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faMugHot} />
            </div>
            <h2>work</h2>
          </div>
          <Work />
        </div>
      </section>
    </main>
  );
};

export default Resume;
