"use client";

import Image from "next/image";
import { useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { MdJoinLeft, MdOutlineHandshake } from "react-icons/md";
import { FadeInContainer } from "@/components/layout/sections/container";
import { AccordionComponent } from "@/components/ui/accordion/standard";

const accordionData = [
  {
    subjectIcon: <RiTeamFill />,
    title: "Ledende fagmiljø",
    content:
      "Vi utgjør Nordens ledende fagmiljø innen Medarbeiderskap og den skandinaviske ledelsesmodellen.",
  },
  {
    subjectIcon: <MdJoinLeft />,
    title: "Medarbeiderskap",
    content:
      "Vi vil ha Medarbeiderskap handler om hvordan vi forholder oss til arbeidsoppgaver, kollegaer og arbeidsgiver. Det innebærer at medarbeidere og ledere sammen tar ansvar for resultater, arbeidsmiljø og arbeidsplassen som helhet.",
  },
  {
    subjectIcon: <MdOutlineHandshake />,
    title: "Solid samarbeidspartner",
    content:
      "Igjennom 40 år har vi samarbeidet tett med våre kunder for å forstå deres unike behov og utfordringer. Vi verdsetter våre kunder og ser dem som partnere i arbeidet med å utvikle gode HR-løsninger.",
  },
];

export function ModelComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FadeInContainer fade>
      <div
        id="section-model"
        className="w-full flex flex-col md:flex-row py-14 gap-10"
      >
        <div className="flex flex-col  w-full md:w-1/2">
          <h2>Modell</h2>
          {accordionData.map((section, index) => (
            <AccordionComponent
              key={index}
              subjectIcon={section.subjectIcon}
              title={section.title}
              content={section.content}
              isOpen={openIndex === index}
              toggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/ModelImage.jpg"
            width={1000}
            height={750}
            alt="Mann i dressjakke som ser mot kamera"
          />
        </div>
      </div>
    </FadeInContainer>
  );
}
