import { Job, jobs } from './jobs';

const getJobKey = (job: Job): string => {
  const convert = (key: string): string => key.replace(/ /g, '').toLowerCase();

  return `${convert(job.title)}-${convert(job.company)}`;
};

export const Work = () => {
  return (
    <>
      {jobs.map((job) => {
        return (
          <div className="mb-10" key={getJobKey(job)}>
            <div className="mb-4">
              <h3 className="font-mono font-bold tracking-wide text-accent text-lg lgMobile:text-xl">
                {job.title}
              </h3>
            </div>

            <div className="flex flex-wrap justify-between italic mb-6">
              <p>{job.company}</p>
              <p>
                {job.startDate} - {job.endDate}
              </p>
            </div>

            {job.skills?.length && (
              <div className="flex flex-wrap my-6">
                {job.skills.map((skill) => {
                  return (
                    <div
                      key={skill}
                      className="block m-2 first:ml-0 p-[7px] rounded-sm text-sm font-bold z-[1] relative overflow-hidden leading-tight"
                    >
                      <span>{skill}</span>
                      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-accent opacity-25" />
                    </div>
                  );
                })}
              </div>
            )}

            <ul className="my-4 pl-6 list-disc">
              {job.about.map((desc) => {
                return (
                  <li key={desc.slice(0, 15)} className="my-4">
                    {desc}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Work;
