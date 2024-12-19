import Image from "next/image";
import Link from "next/link";
import { FaBuilding, FaEnvelope, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full h-fit flex flex-col items-center justify-center pt-12 pb-8 text-kv-white bg-[#373131]">
      <div className="flex max-sm:flex-col items-center justify-center gap-12 w-3/4 pb-12">
        <div className="w-1/2 max-sm:w-full">
          <Image
            src="/LogoLight.svg"
            height={250}
            width={350}
            className=""
            alt="Teamwork logo"
          />
        </div>
        <div className="w-1/2 max-sm:w-full text-white/70">
          <Link href="/" className="flex items-center gap-2 text-nowrap hover:text-white">
            <FaMapMarkerAlt className="text-lg" />
            Rosenholmveien 25, 1414 Trollåsen
          </Link>
          <a href="mailto:post@teamwork.no" className="flex items-center gap-2 text-nowrap hover:text-white">
            <FaEnvelope className="text-lg" />
            post@teamwork.no
          </a>
          <a href="tel:+47 474 74 747" className="flex items-center gap-2 text-nowrap hover:text-white">
            <FaPhoneAlt />
            +47 474 74 747
          </a>
          <a href="https://www.linkedin.com/company/teamwork-norge/" className="flex items-center gap-2 text-nowrap hover:text-white">
            <FaLinkedinIn className="text-lg" />
            Teamwork LinkedIn
          </a>
        </div>
      </div>
      <div className="flex justify-center text-xs gap-12 text-white/70">
        <span className="flex items-center gap-2">
          <FaBuilding className="text-lg" />
          <p>Orgnummer: 942 858 973</p>
        </span>
        <p className="text-center">
          &copy; Teamwork, {new Date().getFullYear()}
        </p>
        <p>Levert av Kodeverket Bergen</p>
      </div>
    </footer>
  );
}