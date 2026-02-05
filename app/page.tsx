import Campustour from "@/components/home/campustour";
import Differencewecreate from "@/components/home/differencewecreate";
import Hero from "@/components/home/hero";
import ProgressiveLearner from "@/components/home/progressivelearner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Campustour />
      <Differencewecreate />
      <ProgressiveLearner />
    </div>
  );
}
