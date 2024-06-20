import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddJobPage() {

    var [title, setTitle] = useState("");
    var [subtitle, setSubtitle] = useState("");
    var [description, setDescription] = useState("");
    var [jobType, setJobType] = useState("");
    var [salaryRange, setSalaryRange] = useState("");
    var [loading, setLoading] = useState(false);
    var navigate = useNavigate();
    const submitForm = (e)=>{
        e.preventDefault();
        let data = {
            title: title,
            subtitle: subtitle,
            description: description,
            type: jobType,
            salaryRange: salaryRange
        };

        setLoading(true);

        let requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }

        fetch("/api/jobs", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setLoading(false);
            navigate("/jobs");
        })
        .catch((error) => {
            console.error("Error:", error);
            setLoading(false);
        })
    }

  var inputClassName =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  var LabelClassName =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
  return (
    <>
      <section className="bg-white dark:bg-gray-900 px-3 py-8">
        <form class="max-w-md mx-auto" onSubmit={submitForm}>
          <div class="relative z-0 w-full mb-5 group">
            <label for="countries" className={LabelClassName}>
              Job Type
            </label>
            <select value={jobType} className={inputClassName} onChange={(e)=>setJobType(e.target.value)}>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time </option>
              <option value="Contract">Contract</option>
              <option value="Internship"> Internship</option>
            </select>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title"
              className={inputClassName}
              placeholder=" "
              required value={title} onChange={(e)=>setTitle(e.target.value)}
            />
            <label className={LabelClassName}>Job Title</label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="Subtitle"
              className={inputClassName}
              placeholder=" "
              required value={subtitle} onChange={(e)=>setSubtitle(e.target.value)}
            />
            <label className={LabelClassName}>Subtitle</label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <textarea
              id="message"
              rows="4"
              className={inputClassName} value={description} onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
            <label for="floating_repeat_password" className={LabelClassName}>
              Job Description
            </label>
          </div>
       
          <div class="relative z-0 w-full mb-5 group">
            <label className={LabelClassName} name="salaryRange">
              Salary Rannge
            </label>
            <select className={inputClassName} value={salaryRange} onChange={(e)=>setSalaryRange(e.target.value)} >
              <option value="$80,000 - $120,000">$80,000 - $120,000</option>
              <option value="$60,000 - $100,000">$60,000 - $100,000</option>
              <option value="$50,000 - $90,000">$50,000 - $90,000</option>
              <option value="$90,000 - $130,000">$90,000 - $130,000</option>
            </select>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Job
          </button>
        </form>
      </section>
    </>
  );
}

export default AddJobPage;
