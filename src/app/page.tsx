import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import { About } from "@/components/about/About";
import { Certifications, Contact } from "@/components/contact/Contact";
import { ExperienceList } from "@/components/experience/CaseStudyCard";
import { Hero } from "@/components/hero/Hero";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { ProjectGrid } from "@/components/projects/ProjectShowcaseCard";
import { ResearchDashboard } from "@/components/research/ResearchDashboard";
import { SystemsMap } from "@/components/skills/SystemsMap";
import { experiences, featuredProjects } from "@/lib/content";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />

        <Section
          id="about"
          index="01 — About"
          title={
            <>
              Systems thinking across{" "}
              <span className="text-aluminum">hardware, software, and design</span>.
            </>
          }
        >
          <About />
        </Section>

        <Section
          id="research"
          index="02 — Research"
          title={
            <>
              Racing heritage,{" "}
              <span className="text-aluminum">digitally reconstructed</span>.
            </>
          }
          subtitle="A motorsport-meets-CAD-review environment for the GT40 digital twin and FIA LMH redesign."
          className="bg-bg-elevated/35"
        >
          <ResearchDashboard />
        </Section>

        <Section
          id="projects"
          index="03 — Projects"
          title={
            <>
              Engineering showcases, not{" "}
              <span className="text-aluminum">resume bullets</span>.
            </>
          }
        >
          <ProjectGrid projects={featuredProjects} />
        </Section>

        <Section
          id="experience"
          index="04 — Experience"
          title={
            <>
              Mission logs from{" "}
              <span className="text-aluminum">real work</span>.
            </>
          }
          className="bg-bg-elevated/50"
        >
          <ExperienceList items={experiences} />
        </Section>

        <Section
          id="skills"
          index="05 — Skills"
          title={
            <>
              Interactive systems{" "}
              <span className="text-aluminum">map</span>.
            </>
          }
        >
          <SystemsMap />
        </Section>

        <Section
          id="certifications"
          index="06 — Certifications"
          title="Process discipline credentials."
        >
          <Certifications />
        </Section>

        <Section
          id="contact"
          index="07 — Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="text-aluminum">together</span>.
            </>
          }
        >
          <Contact />
        </Section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
