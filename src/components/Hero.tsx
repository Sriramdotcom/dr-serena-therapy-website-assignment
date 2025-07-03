import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen mx-4 md:mx-16 flex items-center justify-center bg-cream">
      <Image
        src="/bggg.webp"
        alt="Animated background"
        fill
        className="object-cover object-center opacity-80"
        unoptimized
        priority
      />
      <div className="absolute inset-0 bg-black/10 md:bg-black/50 z-0"></div>

      <div className="relative z-10 text-center px-4 py-24 max-w-2xl mx-auto flex-col gap-2">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Psychological Care for
        </h1>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg">
          Change, Insight, and Well-Being
        </h2>
        <p className="text-lg md:text-xl text-white mb-8 drop-shadow">
          Compassionate therapy for adults in Los Angeles & online with Dr.
          Serena Blake, PsyD
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform"
          className="inline-block bg-[#9ab7b0] hover:bg-[#a2bdb7] text-lg font-semibold px-8 py-5 rounded-full shadow-2xl transition-colors backdrop-blur-sm"
        >
          Book a Free Consult
        </Link>
      </div>
    </section>
  );
}
