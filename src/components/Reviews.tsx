import { REVIEWS } from "@/constants";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 lg:py-20 border-b-2">
      <h6 className="text-center uppercase font-medium mb-5 text-lg lg:text-3xl lg:font-medium lg:mb-20 ">
        Reviews
      </h6>
      <p className="text-center text-lg mx-2 mb-10">{REVIEWS.text}</p>
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 mx-10 md:mx-16  lg:mx-20 xl:mx-44 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.reviews.map((review, index) => {
          return (
            <div
              key={index}
              className="p-8 rounded-2xl border flex flex-col justify-between border-neutral-300"
            >
              <p className="tracking-wide text-neutral-500">{review.review}</p>
              <div className="flex items-center justify-center mt-7">
                <Image
                  src={review.image.src}
                  className="w-[50px] h-[50px] rounded-full mr-4"
                  alt={`review_img_${index}`}
                />
                <div className="flex flex-col">
                  <h6 className="text-sm font-bold">{review.name}</h6>
                  <p className="text-sm text-neutral-500">{review.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
