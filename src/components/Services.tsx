import { SERVICES_CONTENT } from "@/constants";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 lg:py-20 border-b-2">
      <h6 className="text-center uppercase font-medium mb-10 text-lg lg:text-3xl lg:font-medium lg:mb-20 ">
        our home renovation services
      </h6>
      {SERVICES_CONTENT.map((service, index) => {
        return (
          <div className="flex flex-col space-y-6 mx-4 md:flex-row md:space-y-0 md:items-start mb-10">
            <div className={`md:w-1/2 ${index % 2 !== 0 && "md:order-2"}`}>
              <img
                src={service.image.src}
                className="h-auto w-full object-cover rounded-lg"
                alt=""
              />
            </div>
            <div
              className={`md:w-1/2 ${
                index % 2 !== 0 ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <h3 className="font-semibold text-xl md:text-2xl mb-4">
                {service.title}
              </h3>
              <p className="text-lg lg:text-xl lg:tracking-wide lg:leading-9 ">
                {service.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
