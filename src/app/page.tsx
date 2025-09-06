import dynamic from "next/dynamic";
import Hero from "@/sections/hero";
import Features3 from "@/sections/features-3";
import Features1 from "@/sections/features-1";
import Features2 from "@/sections/features-2";
import Features4 from "@/sections/features-4";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
import CTA from "@/sections/cta";
import Footer from "@/sections/footer";

// Lazy load heavy components
const Chatbot = dynamic(() => import("@/components/chatbot"), {
  loading: () => null
});

export default function HomePage() {
  return (
    <>
      <div className="px-4 xl:px-0 max-w-5xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40 scroll-smooth">
        <Hero />
        <Features3 />
        <Features1 />
        <Features2 />
        <Features4 />
        <Testimonials />
        {/* <Pricing /> */}
        <FAQ />
        <CTA />
        <Footer />
      </div>
      <Chatbot />
    </>
  )
}