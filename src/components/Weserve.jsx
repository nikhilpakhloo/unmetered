import React from "react";

const Weserve = () => {
  const industries = ["Hospitality", "Education", "Medical", "Retail"];

  const description = [
    "Our objective is to assist hospitality buisenesses in maximizing their  online presece , attracting more customers to their websites, and increasing their income. We provide a variety of digital marketing options that may  be tailored to each ...",
    "We are experts in tailoring advertizing straterzies for business in the educational sectors. Our mission is to assist institutions  in maximizing their online presensce in order to reach their enrollment goals. We are..",
    "We think everyone should have reasonable access to quality medical care. thats why we are so dedicating to developing cutting -edge online outreach stratergies for hospitals, clinic and other medical organizations of all sizes.. In order",
    "We are experts in helping retails firm with customized marketing strategies . Our aim is to  assist retail companies in maximizing  their potential in the digital marketplace by boosting their brand  awareness, website traffic , and, eventually ...",
  ];

  const renderCards = () => {
    return industries.map((industry, index) => (
      <div
        key={index}
        className=" cursor-pointer bg-black text-white m-4 p-6 w-[300px] h-[400px] rounded-xl border border-2 border-gray-400 group hover:bg-gray-500 "
      >
        <h2 className="text-3xl font-bold mt-10 group-hover:text-blue-500">{industry}</h2>
        <p className="text-sm mt-8"> {description[index]}</p>
      </div>
    ));
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="flex mx-32 justify-start text-white">
        <h1 className="text-6xl font-bold mt-24">Industries We Serve</h1>
      </div>

      <div className="flex flex-wrap justify-center mt-10">{renderCards()}</div>
    </div>
  );
};

export default Weserve;
