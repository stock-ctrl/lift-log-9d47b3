import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* Remaining sections come after hero review */}
      </main>
    </>
  );
}
