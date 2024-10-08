import React from "react";
import { Link } from "react-router-dom";

export function HeaderButton({ title, link }) {
  return (
    <div>
      <Link
        to={link}
        className="flex justify-center items-center w-32 h-16 hover:text-lg text-md duration-300 bg-gray-300"
      >
        {title}
      </Link>
    </div>
  );
}
