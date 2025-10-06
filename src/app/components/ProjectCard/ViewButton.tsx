"use client";
import React from "react";

interface ViewButtonData {
  link: string;
}

const ViewButton = ({ link }: ViewButtonData) => {
  return (
    // <div className="card-actions">
    //   <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
    //     View
    //   </a>
    // </div>
    <button className="btn btn-primary">Watch</button>
  );
};

export default ViewButton;
