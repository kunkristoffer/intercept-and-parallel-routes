import Image from "next/image";
import { ButtonLink } from "@/components/ui/buttons/links";
import { FadeInContainer } from "@/components/layout/sections/container";

export function HeroComponent() {
  return (
    <FadeInContainer fade>
      <div className="bg-kv-white w-full flex flex-col pb-14 gap-3 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="w-full h-full md:w-5/6 md:h-[27rem]">
            <Image
              src="/HeroImage.jpg"
              width={1500}
              height={1000}
              className="w-full h-full object-cover"
              alt="People in suits discussing something on a tablet"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 pl-0 md:pl-6 w-full md:w-1/2">
          <h1>Vi skaper fremtidens arbeidsliv</h1>
          <h2>Medarbeiderskap og lederskap i et forpliktende samspill</h2>
          <p>
            Medarbeiderskap er en modell utviklet gjennom mer enn 30 års
            forskning, forankret i den skandinaviske ledelsesmodellen og den
            nordiske kulturen
          </p>
          <ButtonLink href="/newsletter" text="Last ned håndbok" />
        </div>
      </div>
    </FadeInContainer>
  );
}
