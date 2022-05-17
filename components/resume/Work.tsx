import { Job, jobs } from './jobs';

import styles from './Work.module.css';

const getJobKey = (job: Job): string => {
  const convert = (key: string): string => key.replace(/ /g, '').toLowerCase();

  return `${convert(job.title)}-${convert(job.company)}`;
};

export const Work = () => {
  return (
    <div className="jobs">
      {jobs.map((job) => {
        return (
          <div
            className="job-description"
            key={getJobKey(job)}
            style={{ marginBottom: '40px' }}
          >
            <div className={styles.title}>
              <h3>{job.title}</h3>
            </div>

            <div className={styles.company}>
              <p>{job.company}</p>
              <p>
                {job.startDate} - {job.endDate}
              </p>
            </div>

            {job.skills?.length && (
              <div className={styles.skills}>
                {job.skills.map((skill) => {
                  return (
                    <div key={skill} className={styles.skill}>
                      <span>{skill}</span>
                      <div className={styles['skill-bg']} />
                    </div>
                  );
                })}
              </div>
            )}

            <ul className={styles.about}>
              {job.about.map((desc) => {
                return <li key={desc.slice(0, 15)}>{desc}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
