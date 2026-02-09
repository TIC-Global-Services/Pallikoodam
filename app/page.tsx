import Campus from "@/components/home/campus";
import Campustour from "@/components/home/campustour";
import Curricullam from "@/components/home/curricullam";
import Differencewecreate from "@/components/home/differencewecreate";
import Hero from "@/components/home/hero";
import Innovationspace from "@/components/home/innovationspace copy";
import ProgressiveLearner from "@/components/home/progressivelearner";
import Shapingthefuture from "@/components/home/shapingthefuture";
import ShapingthefutureCP from "@/components/home/shapingthefuturecp";
import Wayofteaching from "@/components/home/wayofteaching copy";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Campustour />
      <Differencewecreate />
      <Shapingthefuture />
      <Curricullam/>
      <ProgressiveLearner />
      <Innovationspace/>
      <Wayofteaching/>
      <Campus/>
    </div>
  );
}
