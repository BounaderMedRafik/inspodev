import Hero from "@/components/marketing/Hero";
import MarketingNav from "@/components/marketing/MarketingNav";

export default function Home() {
  return (
    <main>
      <div className=" fixed  z-50 w-full bg-background/80 backdrop-blur-md">
        <MarketingNav />
      </div>
      <Hero />
    </main>
  );
}
