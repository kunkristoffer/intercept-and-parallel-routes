"use client"

import { useRef } from "react";

export const useHorizontalScroll = ({ scrollLength }: { scrollLength: number }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const handleScrollHorizontal = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const scrollAmount = scrollContainerRef.current.clientWidth * scrollLength;
    scrollContainerRef.current.scrollBy({ left: (direction === "left" ? -scrollAmount : scrollAmount), behavior: "smooth" });
  };

  return { scrollContainerRef, handleScrollHorizontal };
};
