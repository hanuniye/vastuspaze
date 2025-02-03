import { PORTFOLIO_PROJECTS } from "@/constants";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 lg:py-20 border-b-2">
      <h6 className="font-medium uppercase text-lg mb-10 text-center md:text-3xl md:mb-20">
        Portfolio
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 md:gap-y-10">
        {PORTFOLIO_PROJECTS.map((portfolio, index) => {
          return (
            <div key={index} className="overflow-hidden rounded-3xl mx-4 group relative">
              <Image
                src={portfolio.image.src}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:opacity-100"
                alt={`porfolio_image_${index}`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="mb-2 text-xl font-medium">{portfolio.name}</h3>
                <p className="mb-12 p-4 text-center text-neutral-500">{portfolio.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
