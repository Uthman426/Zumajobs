"use client"

import React from "react";
import { usePathname } from "next/navigation"
import Link from "next/link";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Split path into segments
  const pathParts = pathname.split("/").filter((part) => part !== "");

  return (
    <div className="bg-gray-100">
    <nav aria-label="Breadcrumb" className="bg-gray-100 py-3 text-normal mx-auto w-[75%] text-gray-600">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="text-blue-900 hover:underline">
            Home
          </Link>
        </li>
        {pathParts.map((part, index) => {
          const href = "/" + pathParts.slice(0, index + 1).join("/");
          const isLast = index === pathParts.length - 1;
          const formatted = part.replace(/^\w/, (l) => l.toUpperCase());


          return (
            <li aria-current="page" key={href} className="flex items-center space-x-2">
              <span className="text-gray-400 font-semibold text-black-500">»</span>
              {isLast ? (
                <span className="text-gray-800 font-medium">{formatted}</span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline">
                  {formatted}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
    </div>
  );
};

export default Breadcrumb;