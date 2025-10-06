import React from "react";
import Image from "next/image";

export interface ProjectCardDataType {
  projectName: string;
  image: string;
  description: string;
  link: string;
  startDate: string;
  endDate: string;
  techStackUsed: string[];
  rolesAndResponsibilities: string[];
}

const ProjectCard = ({
  projectName,
  image,
  description,
  startDate,
  endDate,
  link,
  techStackUsed,
  rolesAndResponsibilities,
}: ProjectCardDataType) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-md hover:shadow-lg transition duration-300">
      {/* Image */}
      <figure className="w-full lg:w-1/3 flex items-center justify-center">
        {/* <img src={image} alt={projectName} className="w-full h-full object-contain" /> */}
         {/* <Image className="w-full h-full object-contain" src={link} alt={`${projectName} logo`} width={180} height={38} priority /> */}
      <Image
          src={image}
          alt={`${projectName} logo`}
          width={180}
          height={38}
          priority
        />
      </figure>

      {/* Content */}
      <div className="card-body w-full lg:w-2/3">
        <h2 className="card-title text-lg lg:text-xl">{projectName}</h2>
        <p className="text-sm lg:text-base">{description}</p>

        {/* Roles and Responsibilities */}
        {rolesAndResponsibilities?.length > 0 && (
          <div>
            <h3 className="font-semibold mt-2">Roles & Responsibilities:</h3>
            <ul className="list-disc list-inside text-sm lg:text-base">
              {rolesAndResponsibilities.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Dates */}
        <div className="card-actions justify-center">
          <span className="badge badge-neutral">
            {startDate} - {endDate}
          </span>
        </div>

        {/* Tech stack */}
        <div className="card-actions flex flex-wrap gap-2 mt-2">
          {techStackUsed.map((tech: string, index: number) => (
            <div key={index} className="badge badge-outline">
              {tech}
            </div>
          ))}
        </div>

        {/* External link */}
        {link.trim() && (
          <div className="card-actions justify-end mt-3">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
