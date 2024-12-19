"use server"

import { HeroComponent } from "@/components/elements/landing/hero";

/* import { BooksComponent } from "@/components/elements/landing/Books";
import { CustomersComponent } from "@/components/elements/landing/Customers";
import HistoryComponent from "@/components/elements/landing/History";
import LedMedComponent from "@/components/elements/landing/LedMed";
import { ModelComponent } from "@/components/elements/landing/Model";
import { ServicesComponent } from "@/components/elements/landing/Services";
import { SuccessesComponent } from "@/components/elements/landing/Success";
import { TeamsComponent } from "@/components/elements/landing/Teams";
import { getAllContent } from "@/lib/sanity/client"; */

export default async function Home() {
  // const { books, customers, feedback, services, team } = await getAllContent();

  return (
    <main id="main-landing" className="flex flex-col items-center justify-between">
      <HeroComponent />
      {/* <ModelComponent />
      <ServicesComponent content={services} />
      <HistoryComponent />
      <LedMedComponent />
      <BooksComponent content={books} />
      <TeamsComponent content={team} />
      <CustomersComponent content={customers} />
      <SuccessesComponent content={feedback} /> */}
    </main>
  );
}
