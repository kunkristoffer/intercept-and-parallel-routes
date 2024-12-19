import { FadeInContainer } from "@/components/layout/sections/container";
import { ButtonLink } from "@/components/ui/buttons/links";

export function LedMedComponent() {
  return (
    <FadeInContainer fade>
      <div
        id="section-ledmed"
        className="container flex flex-col gap-4 mx-auto py-14 px-6 sm:px-0"
      >
        <div>
          <h2 className="pb-10">Medarbeiderundersøkelser med LedMed</h2>
          <p>
            LedMed er et kraftfullt verktøy for medarbeiderundersøkelser,
            utviklet for å fremme dialog, forpliktende samspill og målrettet
            utvikling på arbeidsplassen. Basert på prinsippene for
            medarbeiderskap og den skandinaviske ledelsesmodellen, gir LedMed
            både ledere og medarbeidere innsikt og praktiske verktøy for
            forbedring.
          </p>
        </div>
        <div>
          <h3>Hva er LedMed?</h3>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Kartlegging:</span> Identifiser
              styrker og utviklingsområder innen motivasjon, arbeidsmiljø,
              ledelse og ansvar.
            </li>
            <li>
              <span className="font-bold">Dialog:</span> Skap refleksjon og
              samtaler om hvordan arbeidsplassen kan forbedres.
            </li>
            <li>
              <span className="font-bold">Tiltak:</span> Oversett innsikt til
              konkrete handlinger med tydelige anbefalinger fra verktøyet.
            </li>
          </ul>
        </div>
        <div>
          <h3>Hvorfor velge LedMed?</h3>
          <p>
            LedMed handler ikke bare om å måle - det handler om utvikling. Ved å
            kombinere brukervennlighet med dybde, hjelper LedMed organisasjoner
            med å skape inkluderende og engasjerende arbeidsmiljøer hvor
            medarbeidere og ledere tar ansvar sammen.
          </p>
        </div>
        <div>
          <h3>Hvordan fungerer det?</h3>
          <ul className="list-disc list-inside">
            <li>Medarbeidere svarer anonymt via en enkel digital plattform.</li>
            <li>
              Resultatene presenteres i klare rapporter som er enkle å tolke.
            </li>
            <li>
              Verktøyet veileder ledere og team i å gjennomføre målrettede
              utviklingstiltak.
            </li>
          </ul>
          <p>
            Velg LedMed for en medarbeiderundersøkelse som inspirerer til
            handling, og bygg en kultur preget av tillit, ansvar og samarbeid.
          </p>
        </div>
        <div className="flex justify-end">
        <ButtonLink href={"/ledmed"} text={"Les mer"} />
        </div>
      </div>
    </FadeInContainer>
  );
}
