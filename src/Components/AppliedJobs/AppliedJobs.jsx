import React, { useEffect, useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  // console.log(jobs);

  const handleJobsFilter = (filter) => {
    if (filter === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      // console.log(jobs, jobsApplied, jobsApplied);

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id); // same kaj jobs applied er
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-6xl text-center mb-9">
        Applied Jobs:{appliedJobs.length}
      </h2>
      <div className="text-right  my-8">
        <details className="dropdown">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("Onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid gap-6">
        {displayJobs.map((job) => (
          <div key={job.id} className="border flex rounded-lg items-center ">
            {/* left */}
            <div className="bg-slate-300 w-60 h-60 m-8 rounded-lg flex items-center justify-center">
              <img className="w-40" src={job.logo} alt="" />
            </div>
            <div className=" flex items-center ">
              {/* mid */}
              <div className="">
                {" "}
                <h2>{job.job_title}</h2>
                <h2>{job.company_name}</h2>
                <div className="flex gap-4">
                  <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7e90fe]">
                    {job.remote_or_onsite}
                  </button>
                  <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7e90fe]">
                    {job.job_type}
                  </button>
                </div>
                <div className="flex gap-4 opacity-90 mt-2 mb-4">
                  <h2 className="flex items-center gap-2 text-xl font-semibold">
                    <MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn>
                    {job.location}
                  </h2>
                  <h2 className="flex items-center gap-2 text-xl font-semibold">
                    <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>
                    <p>Salary : {job.salary}</p>
                  </h2>
                </div>
              </div>
              {/* right */}
              <div>
                <button
                  // onClick={() => setDataDLength(jobs.length)}
                  className="px-7 py-5 bg-violet-600 rounded-2xl text-xl font-extrabold "
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
