import Image from "next/image";
import { therapist } from "@/data/therapist";

export default function About() {
  return (
    <section className="bg-white pt-20 pb-0 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-[#444]">About Dr. Serena Blake</h2>
          <p className="text-lg text-[#666] mb-6 whitespace-pre-line">{therapist.bio}</p>
          <div className="text-base text-[#444] space-y-1">
            <div><strong>Location:</strong> {therapist.location}</div>
            <div><strong>Phone:</strong> {therapist.phone}</div>
            <div><strong>Email:</strong> {therapist.email}</div>
            <div><strong>Experience:</strong> {therapist.experience}</div>
            <div>
              <strong>Office Hours:</strong>
              <ul className="list-disc list-inside ml-4">
                {therapist.officeHours.map((h) => (
                  <li key={h.type}>{h.type}: {h.value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/portrait.jpg"
            alt="Dr. Serena Blake headshot"
            width={320}
            height={400}
            className="rounded-lg shadow-lg object-cover w-[320px] h-[400px]"
            priority
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto pt-20">
         <hr className="border-t pb-12 border-gray-300" />
      </div>
    </section>
  );
} 