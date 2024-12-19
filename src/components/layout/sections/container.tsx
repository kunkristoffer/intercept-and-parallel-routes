import { ReactNode } from "react";
import { FadeIn } from "./fadein";

export function FadeInContainer ({
  children,
  orange,
  fade,
}: {
  children: ReactNode;
  orange?: boolean;
  fade?: boolean;
}) {
  return (
    <section
      className={`w-screen ${
        orange ? "bg-teamwork-secondary-orange" : "bg-kv-white"
      }`}
    >
      <div className="container mx-auto py-14 px-6 sm:px-8 md:px-10">
        {fade ? <FadeIn>{children}</FadeIn> : children}
      </div>
    </section>
  );
};