import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-cream pt-0">
      {/* Quote Section */}
      <div className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center" style={{ position: "relative" }}>
        <Image
          src="/bg.jpg"
          alt="Ocean background"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/10 md:bg-white/10"></div>
        <div className="relative w-full text-center px-4 md:mx-40">
          <blockquote className="text-2xl md:text-4xl text-black mb-4 drop-shadow-md">
        “I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.”
          </blockquote>
          <div className="text-lg text-black drop-shadow-md">— Audre Lorde</div>
        </div>
      </div>
      {/* Contact & Info Section */}
      <div className="bg-cream py-12 px-4 text-center flex flex-col gap-4">
        <div className="font-heading text-2xl md:text-3xl mb-4 text-[#444]">Dr. Serena Blake, PsyD, Clinical Psychologist</div>
        <div className="mb-2 text-base md:text-lg text-[#444]">
          <a href="mailto:serena@blakepsychology.com" className="underline">serena@blakepsychology.com</a>
        </div>
        <div className="mb-2 text-base md:text-lg text-[#444]">
          Phone: <a href="tel:3235550192" className="underline">(323) 555-0192</a>
        </div>
        <div className="mb-2 text-base md:text-lg text-[#444]">1287 Maplewood Drive, Los Angeles, CA 90026</div>
        <div className="mt-6 text-sm text-[#888]">© {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.</div>
      </div>
    </footer>
  );
} 