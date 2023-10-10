import Article from "@/components/Article";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Sponsors from "@/components/Sponsors";


export default function Home() {
  return (
    <main className="">
     <Hero />
     <Sponsors />
     <Features />
     <Article />
     <Pricing />

     
    </main>
  )
}
