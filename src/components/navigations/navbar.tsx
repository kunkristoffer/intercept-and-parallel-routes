"use client"

import { usePathname } from "next/navigation";
import { NavBarLink } from "../ui/buttons/links";

export function HeaderNavbar() {
  const pathName = usePathname()
  if (pathName !== "/")
    return (
      <nav>
        <div className="hidden h-auto md:flex items-center gap-2">
          <NavBarLink
            href="/newsletter"
            label="Artikler"
            ariaLabel="Naviger til innholdskatalogen for våre artikler"
            prefetch={false}
          />
          <NavBarLink
            href="/"
            label="Medarbeiderskap"
            ariaLabel="Naviger til søstersiden vår for mer informasjon om merarbeiderskap"
          />
          <NavBarLink
          href="/booking"
          label="Book møte"
          ariaLabel="gå til denne seksjonen for å booke et møte"
          prefetch={false}
        />
        </div>
      </nav>
    );

  return (
    <nav>
      <div className="hidden h-auto md:flex items-center gap-2">
        <NavBarLink
          href="/#section-model"
          label="Modell"
          ariaLabel="gå til denne seksjonen og les om modellen vår"
        />
        <NavBarLink
          href="/#section-services"
          label="Tjenester"
          ariaLabel="gå til denne seksjonen for å lese om tjenestene våre"
        />
        <NavBarLink
          href="/#section-history"
          label="Historier"
          ariaLabel="gå til denne seksjonen for å lese om noen av historiene om oss"
        />
        <NavBarLink
          href="/#section-success"
          label="Suksess"
          ariaLabel="gå til denne seksjonen for å lese om suksessen våre kunder har hatt"
        />
        <NavBarLink
          href="/booking"
          label="Book møte"
          ariaLabel="gå til denne seksjonen for å booke et møte"
          prefetch={false}
        />
      </div>
      {/* <div className="px-4 md:hidden">
        <Hamburger />
      </div> */}
    </nav>
  );
}
