import Hero from "./components/Hero";
import News from "./components/News";
import Tech from "./components/Tech";

export default function Home() {
  return (
    <div className="h-full w-full relative">
      <Hero />
      <Tech/>
      <News/>
    </div>
  );
}
