import Image from "next/image";
import HeroPage from "@/components/Hero";
import OurClients from "@/components/OurClients";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroPage/>
      <OurClients/>
    </main>
  );
}
