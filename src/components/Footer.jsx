import React from "react";

const Footer = () => {
  const headings = ["Quick links", "Services", "NFTs", "Legal", "Connect Us"];

  return (
    <div className="flex h-auto bg-black justify-center">
      <div className="mx-32 flex gap-x-16">
        {headings.map((heading) => (
          <div className="flex flex-col mt-5 text-white" key={heading}>
            <h1 className="text-3xl">{heading}</h1>
            <ul className="mt-10 flex flex-col gap-y-3 text-gray-400">
              {renderLinks(heading)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderLinks = (heading) => {
  switch (heading) {
    case "Quick links":
      return [
        "About Us",
        "Services",
        "Blogs",
        "Industries",
        "Contact Us",
        "Career",
      ].map((item, index) => <li key={index}>{item}</li>);
    case "Services":
      return [
        "Design",
        "Web Development",
        "Mobile App Development",
        "Digital Marketing",
      ].map((item, index) => <li key={index}>{item}</li>);
    case "NFTs":
      return [
        "NFT marketing Strategy",
        "NFT Digital Marketing",
        "Crypto Endemic Publisher",
        "Generatie Art",
      ].map((item, index) => <li key={index}>{item}</li>);
    case "Legal":
      return ["Terms & Conditions", "Privacy Policy"].map((item, index) => (
        <li key={index}>{item}</li>
      ));

      case "Connect Us":
        return ["contact@unmeteredtechnologies.com", "+91 62345-65456"].map((item,index)=>(

            <li key={index}>{item}</li>
        ))
    default:
      return [];
  }
};

export default Footer;
