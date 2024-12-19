"use client"

import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export function AccordionComponent({
  subjectIcon,
  title,
  content,
  isOpen,
  toggle,
}: {
  subjectIcon: React.ReactElement<IconType>;
  title: string;
  content: string;
  isOpen?: boolean;
  toggle?: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="bg-kv-white text-kv-black shadow px-3 transition-all duration-500 ease-in-out border-b">
      <button onClick={toggle} className="group w-full py-4">
        <div className={`text-xl flex flex-row justify-between items-center `}>
          <div className="flex flex-row items-center gap-2">
            <div
              className={`${
                isOpen ? "text-teamwork-primary-orange" : "text-kv-black"
              }`}
            >
              {subjectIcon}
            </div>
            <h4 className="no-underline group-hover:underline-offset-4 group-hover:underline group-focus:underline-offset-4 group-focus:underline">
              {title}
            </h4>
          </div>
          <div className="animate-none group-hover:animate-pulse group-focus:animate-pulse">
            {isOpen ? <FaArrowUp /> : <FaArrowDown />}
          </div>
        </div>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="transition-max-height duration-500 ease-in-out overflow-hidden"
      >
        <div className={`pb-8 `}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
