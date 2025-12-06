import { Component } from "@/components/barsectio";
import ContentSection2 from "@/components/content-2";
import ContentSection from "@/components/content-7";
import FeaturesSection from "@/components/features-6";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";

export default function Home(){
  return (
    <div>
     <HeroSection/>
     <ContentSection/>
     <Component/>
     <IntegrationsSection/> 
     <ContentSection2/>
     <FeaturesSection/>
     <FooterSection/>
     
    </div>
  );
}
