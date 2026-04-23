import CambridgeEarly from "@/components/home/cambridgeearly";
import Campus from "@/components/home/campus";
import Campustour from "@/components/home/campustour";
import Curricullam from "@/components/home/curricullam";
import Differencewecreate from "@/components/home/differencewecreate";
import Hero from "@/components/home/hero";
import Innovationspace from "@/components/home/innovationspace";
import ProgressiveLearner from "@/components/home/progressivelearner";
import Shapingthefuture from "@/components/home/shapingthefuture";
import ShapingthefutureCP from "@/components/home/shapingthefuturecp";
import Wayofteaching from "@/components/home/wayofteaching copy";
import Image from "next/image";

export const metadata = {
  title: "Home | RAKS Pallikoodam",
  description: "Welcome to RAKS Pallikoodam - Discover our progressive curriculum and modern campus.",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="relative z-10">
        <Campustour />
        <Differencewecreate />
        <Shapingthefuture />
        <Curricullam />
        <CambridgeEarly/>
        <ProgressiveLearner />
        <Innovationspace />
        <Wayofteaching />
        <Campus />
      </div>
    </div>
  );
}
