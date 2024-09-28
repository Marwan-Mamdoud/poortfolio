import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Skills = () => {
  return (
    <div id="skills" className="max-w-5xl text-center mx-auto px-8">
      <h1 className="font-extrabold  font-mono text-6xl text-white">
        My <span className="text-indigo-300">Skills</span>
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
};
export const projects = [
  {
    title: "HTMl",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-html.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "CSS",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-css.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "TailwindCSS",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-tailwind-css.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "JavaScript",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-javascript.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "TypeScript",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-typescript.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "React.js",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-react.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "Next.js",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/nextjs-icon-svgrepo-com.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "Node.js",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-node-js.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "Express.js",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-express-js.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "MongoDB",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-mongodb.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "Next.js",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/nextjs-icon-svgrepo-com.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "npm",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-npm.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "JWT",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-lock.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "Git",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-git.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "GitHub",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-git (1).svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "Context API",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/context-data-details-svgrepo-com.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "jQuery",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/icons8-jquery.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
  {
    title: "GraphQl",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <img
          className="text-white"
          src="/graphql-icon.svg"
          alt="icons"
          width={70}
          height={70}
        />
      </div>
    ),
    link: "",
  },
];

export default Skills;
