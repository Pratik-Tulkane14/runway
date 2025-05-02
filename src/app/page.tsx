import Creatives from "./components/Creatives";
import Hero from "./components/Hero";
import Initiative from "./components/Initiative";
import Narrative from "./components/Narrative";
import News from "./components/News";
import Partners from "./components/Partners";
import Research from "./components/Research";
import Story from "./components/Story";
import Tech from "./components/Tech";

export default function Home() {
  return (
    <div className="h-full w-full relative">
      {/* <Hero />
      <Tech/>
      <News/>
      <Narrative/>
      <Research/>
      <Story /> */}
      <Initiative />
      <Creatives />
      <Partners />

    </div>
  );
}
