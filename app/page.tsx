import Image from "next/image";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import CardsSection from "./components/CardsSection";
import Cards from "./components/Cards";
import SliderBar from "./components/SliderBar";

export default function Home() {
  return (
    <>
    <div className="maindiv">
      <SliderBar/>
      <HeroSection />
      <VideoSection />
      <CardsSection />
      </div>
    </>
  );
}
