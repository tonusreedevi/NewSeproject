import Hero from "@/component/Hero";
import Review from "@/component/Review";
import Vision from "@/component/Vision";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main>
       <Hero></Hero>
        <Review></Review>
        <Vision></Vision>
      </main>
    </div>
  );
}
