import Campus from "@/components/home/campus";
import Campustour from "@/components/home/campustour";
import Differencewecreate from "@/components/home/differencewecreate";
import Hero from "@/components/home/hero";
import Innovationspace from "@/components/home/innovationspace";
import ProgressiveLearner from "@/components/home/progressivelearner";
import Shapingthefuture from "@/components/home/shapingthefuture";
import Wayofteaching from "@/components/home/wayofteaching";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Campustour />
      <Shapingthefuture />
      <Differencewecreate />
      <ProgressiveLearner />
      <Innovationspace/>
      <Wayofteaching/>
      <Campus/>
    </div>
  );
}
