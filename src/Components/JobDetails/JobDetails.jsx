import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const { phone, email, address } = contact_information;

  return (
    <div className="my-10">
      <h2 className="text-center text-4xl my-6">Job details of : {id}</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border grid gap-4 md:col-span-3 p-4 rounded-lg">
          <h5>
            <span className=" font-semibold text-lg">Job Description :</span>{" "}
            {job_description}
          </h5>
          <h5>
            {" "}
            <span className=" font-semibold text-lg">
              Job Responsibility :
            </span>{" "}
            {job_responsibility}
          </h5>
          <h5 className="grid">
            <span className=" font-semibold text-lg">
              Educational Requirements :
            </span>{" "}
            <span>{educational_requirements}</span>
          </h5>
          <h5 className="grid">
            <span className=" font-semibold text-lg">Experiences :</span>{" "}
            <span>{experiences}</span>
          </h5>
        </div>
        <div className="">
          <div className="border bg-[#7e90fe] p-8 rounded-lg text-black">
            <h3>Job Details</h3>
            <div className="border-b-2"></div>
            <h5>Salary:{salary}</h5>
            <h5>Tob Title:{job_title}</h5>
            <div className="border-b-2"></div>
            <h5>Phone:{phone}</h5>
            <h5>Email:{email}</h5>
            <h5>Address:{address}</h5>
          </div>
          <div className="flex-1 mt-3">
            <button className="flex-1 bg-[#7e90fe] text-black w-full py-3 rounded-xl ">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
