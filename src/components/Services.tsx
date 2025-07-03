import { services } from "@/data/services";
import Image from "next/image";

const images = [
  "/stress.jpg",
  "/relationship.jpg",
  "/trauma.jpg"
];

export default function Services() {
  return (
    <section className="bg-cream pt-16 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12 text-[#444]">Areas of Focus</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
          {services.map((service, i) => (
            <div key={service.title} className="flex-1 flex flex-col items-center text-center">
              <div className="w-56 h-56 mb-6 rounded-full overflow-hidden shadow-lg">
                <Image src={images[i]} alt={service.title} width={224} height={224} className="object-cover w-full h-full" />
              </div>
              <h3 className="font-heading text-xl mb-2 text-[#444]">{service.title}</h3>
              <p className="text-base text-[#666] mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 