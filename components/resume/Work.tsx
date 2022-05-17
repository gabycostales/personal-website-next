import { Job, jobs } from './jobs';

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
            className="job"
            key={getJobKey(job)}
            style={{ marginBottom: '40px' }}
          >
            <div className="job--title">
              <h3>{job.title}</h3>
            </div>

            <div className="job--company">
              <p>{job.company}</p>
              <p>
                {job.startDate} - {job.endDate}
              </p>
            </div>

            {job.skills?.length && (
              <div className="job--skills">
                {job.skills.map((skill) => {
                  return (
                    <div key={skill} className="job--skill">
                      <span>{skill}</span>
                      <div className="job--skill-bg" />
                    </div>
                  );
                })}
              </div>
            )}

            <ul className="job--about">
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
