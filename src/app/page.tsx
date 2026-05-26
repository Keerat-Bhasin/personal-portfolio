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
              Hardware · software · <span className="text-aluminum">validation</span>
            </>
          }
          takeaway="One integrated system — not isolated disciplines."
        >
          <About />
        </Section>

        <Section
          id="research"
          index="02 — Research"
          title={
            <>
              GT40 <span className="text-aluminum">digital twin</span>
            </>
          }
          takeaway="Scan → mesh → NX · FIA LMH compliance"
          className="bg-bg-elevated/35"
        >
          <ResearchDashboard />
        </Section>

        <Section
          id="projects"
          index="03 — Projects"
          title={
            <>
              Engineering <span className="text-aluminum">exhibits</span>
            </>
          }
          takeaway="Architecture · telemetry · proof metrics"
        >
          <ProjectGrid projects={featuredProjects} />
        </Section>

        <Section
          id="experience"
          index="04 — Experience"
          title={
            <>
              Impact <span className="text-aluminum">telemetry</span>
            </>
          }
          takeaway="Metrics first — details on request"
          className="bg-bg-elevated/50"
        >
          <ExperienceList items={experiences} />
        </Section>

        <Section
          id="skills"
          index="05 — Skills"
          title={
            <>
              Subsystem <span className="text-aluminum">graph</span>
            </>
          }
          takeaway="Skills linked to project proof artifacts"
        >
          <SystemsMap />
        </Section>

        <Section
          id="certifications"
          index="06 — Certifications"
          title="Process credentials"
        >
          <Certifications />
        </Section>

        <Section
          id="contact"
          index="07 — Contact"
          title={
            <>
              <span className="text-aluminum">Connect</span>
            </>
          }
          takeaway="Fall 2026 · robotics · embedded · product"
        >
          <Contact />
        </Section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
