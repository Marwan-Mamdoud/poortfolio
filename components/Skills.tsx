import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { IoLogoNpm } from "react-icons/io5";
import { TbBrandGraphql } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
        <FaHtml5 className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-red-500",
  },
  {
    title: "CSS",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <FaCss3Alt className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-blue-500",
  },
  {
    title: "TailwindCSS",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <SiTailwindcss className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-sky-500",
  },
  {
    title: "JavaScript",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <IoLogoJavascript className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-yellow-500",
  },
  {
    title: "TypeScript",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <BiLogoTypescript className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-blue-500",
  },
  {
    title: "React.js",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <FaReact
          className=""
          size={70}
          style={{ transform: "rotate(180deg)" }}
        />
      </div>
    ),
    link: "",
    className: "hover:text-sky-500",
  },
  {
    title: "Next.js",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <SiNextdotjs className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-black",
  },
  {
    title: "Node.js",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <FaNode className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-green-500",
  },
  {
    title: "Express.js",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <SiExpress className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-yellow-500",
  },
  {
    title: "Nest.js",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <SiNestjs className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-red-500",
  },
  {
    title: "MongoDB",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <SiMongodb className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-green-500",
  },
  {
    title: "Postgresql",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <BiLogoPostgresql className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-blue-500",
  },
  {
    title: "Redis",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <DiRedis className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-red-500",
  },
  {
    title: "npm",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <IoLogoNpm className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-black",
  },
  {
    title: "Git",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <FaGitAlt className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-gray-300",
  },
  {
    title: "GitHub",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <FaGithub className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-gray-500",
  },

  {
    title: "GraphQl",
    description: (
      <div className="w-15 h-15 mx-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-none">
        <TbBrandGraphql className="" size={70} />
      </div>
    ),
    link: "",
    className: "hover:text-pink-500",
  },
];

export default Skills;
