import { HERO_CONTENT } from "@/constants";
import hero from "@/assets/hero.webp";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="flex flex-col items-center">
        <h1 className="uppercase font-bold text-[60px] lg:text-[160px] p-0">
          {HERO_CONTENT.title}
        </h1>
        <p className="font-medium mb-4 p-0 tracking-tighter text-lg">
          {HERO_CONTENT.subtitle}
        </p>
        <img
          src={hero.src}
          className="w-full h-[65vh] object-cover rounded-2xl p-2"
          alt="hero_img"
        />
      </div>
    </div>
  );
};

export default Hero;
