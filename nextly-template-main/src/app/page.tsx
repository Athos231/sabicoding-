import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Why Join Us"
        title=" Why you should be part of Sabi Coding"
      >
        Sabi Coding is an affordable learning platform for African tech aspirants. We offers structured courses, local mentorship, and community support. Sabi Coding champions inclusive learning for everyone, from village children to youth dropouts eager to master essential skills.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Empowering Africa’s Future"
      >
        Transforming Africa through Innovative, Affordable Tech Education.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our students said"
      >
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
       
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
