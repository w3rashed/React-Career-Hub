import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-extrabold ">{job_title}</h2>
        <p className="font-semibold text-xl opacity-90 mt-2 mb-4">
          {company_name}
        </p>
        <div className="flex gap-4">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7e90fe]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7e90fe]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-4 opacity-90 mt-2 mb-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn>
            {location}
          </h2>
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>
            <p>Salary : {salary}</p>
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Job.propType = {

// };
export default Job;
