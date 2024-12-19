import { FadeInContainer } from "@/components/layout/sections/container";
import { ButtonLink } from "@/components/ui/buttons/links";
import Image from "next/image";

export function HistoryComponent() {
  return (
    <FadeInContainer fade>
      <div
        id="section-history"
        className="container mx-auto py-14 px-6 sm:px-0"
      >
        <h2 className="pb-10">Historier</h2>
        <div className="flex flex-col sm:h-[528px] sm:flex-row gap-4 sm:gap-10 justify-between items-center">
          <div className="w-full h-64 sm:h-full rounded-lg overflow-hidden">
            <Image
              src="/ModelImage.jpg"
              alt="Om oss"
              width={500}
              height={500}
              className="w-full h-full bg-slate-300 object-cover"
            />
          </div>
          <div className="bg-kv-white text-kv-black text-pretty p-4 sm:p-10 flex flex-col gap-6 justify-between rounded-lg w-full h-full leading-relaxed">
            <div>
              <h3>Om oss</h3>
              <p>
                Teamwork AS (TW) ble grunnlagt av Johan Velten i 1985 og er et
                ledende konsulentfirma innen medarbeiderskap og den
                skandinaviske ledelsesmodellen. Vi jobber med medarbeidere,
                ledere og organisasjoner på alle nivåer - i næringslivet,
                offentlig sektor og ideelle organisasjoner - for å bygge sterke
                team, styrke lederskap og skape engasjerende arbeidsplasser.
                Våre egenutviklede samtaleverktøy, basert på over 40 års
                forskning og praksis, gjør det enklere å snakke om viktige
                temaer og gjennomføre konkrete utviklingstiltak. I samarbeid med
                professor Stefan Tengblad ved Göteborgs Universitet utgjør vi
                Nordens fremste fagmiljø innen medarbeiderskap. Med 10
                sertifiserte konsulenter og kontorer i Oslo, Bergen og
                Trondheim, leverer vi pålitelige resultater til kunder i både
                offentlig og privat sektor, med svært gode tilbakemeldinger.
              </p>
            </div>
            <ButtonLink href={"/"} text={"Våre bøker"} />
          </div>
        </div>
      </div>
    </FadeInContainer>
  );
}
