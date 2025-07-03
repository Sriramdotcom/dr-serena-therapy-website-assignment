import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center px-4 gap-2">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#B7CCC7"/>
        <path d="M20 5L35 20L20 35L5 20L20 5Z" stroke="#F7F5EF" strokeWidth="2"/>
        <path d="M20 10L30 20L20 30L10 20L20 10Z" fill="#B7CCC7" stroke="#F7F5EF" strokeWidth="1"/>
      </svg>
      <div className="flex flex-col text-[#4A4A4A]">
        <span className="font-heading text-xl leading-tight">Dr. Serena Blake, PsyD</span>
        <span className="text-md leading-tight tracking-wider">Psychological Services</span>
      </div>
    </Link>
  );
} 