import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div id="Expreience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work Experience</span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col w-full lg:items-center p-8 lg:p-10 max-[600px]:px-4 gap-2">
              <div className="grid w-full grid-cols-1 gap-5">
                <div className="w-full grid grid-cols-4 max-[950px]:grid-cols-1 gap-3">
                  <div className="flex flex-wrap items-center justify-start col-span-3 gap-6 w-full">
                    <img
                      src={card.thumbnail}
                      alt={card.thumbnail}
                      className="w-[200px] h-[100px] max-[450px]:w-[120px] object-contain"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-start text-2xl max-[450px]:text-xl whitespace-pre-line font-semibold">
                        {card.title}
                      </p>
                      <div className="w-full flex flex-wrap items-start justify-start gap-5 max-[450px]:gap-2 max-[400px]:mt-5">
                        <p className="text-start whitespace-pre-line font-light">
                          {card.company}.
                        </p>
                        <p className="text-start whitespace-pre-line font-light">
                          - {card.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ms-5 w-full flex items-center max-[950px]:items-start max-[950px]:mt-5 max-[950px]:justify-start justify-end">
                    <div className="w-fit flex items-start justify-start gap-2">
                      <div className="flex items-start justify-start flex-col gap-1 font-light">
                        <p className="text-start whitespace-pre-line font-semibold">
                          {card.type}
                        </p>
                        <p className="text-start whitespace-pre-line font-semibold">
                          {card.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-start w-full whitespace-pre-line text-white-100 mt-3 font-base text-lg max-[450px]:text-base">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
