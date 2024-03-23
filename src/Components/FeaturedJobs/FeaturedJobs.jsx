import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataDLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl">Featured Jobs:{jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid gap-6 grid-cols-2">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <div className="text-center my-6">
          <button
            onClick={() => setDataDLength(jobs.length)}
            className="px-7 py-5 bg-violet-600 rounded-2xl text-xl font-extrabold "
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
