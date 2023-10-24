import { BsArrowRightCircle } from "react-icons/bs";

const HowWeHelp = () => {
  const services = [
    "Design",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
  ];

  const renderServices = () => {
    return services.map((service, index) => (
      <div
      className={` hover:text-white service-card cursor-pointer border border-1 border-black h-[520px] w-[500px] flex justify-center items-center group ${
        index % 2 === 0 ? 'even' : 'odd'
      }`}
      key={index}
    >
        <div className="flex items-center px-5 gap-x-2">
          <h1 className="text-4xl text-center font-semibold z-10 ">{service}</h1>{" "}
          <BsArrowRightCircle className="text-3xl z-10 arrow    " />
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="w-full h-40 flex bg-white">
        <div className="w-1/2 flex justify-center">
          <h1 className="text-6xl font-bold">How We Help</h1>
        </div>
        <div className="w-1/2 justify-end items-center">
          <div className="w-3/4 flex justify-center">
            <p className="">
              We are passionate about helping businesses succeed in the digital
              landscape. With our comprehensive range of services, we are
              committed to helping your business thrive and reach new heights in
              the digital realm.
            </p>
          </div>
        </div>
      </div>

      <div className="flex bg-white justify-center">{renderServices()}</div>
    </>
  );
};

export default HowWeHelp;
