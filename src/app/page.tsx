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
          takeaway="Design, firmware, and verification on one system boundary."
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
          takeaway="Point cloud to watertight mesh to regulation-constrained NX exterior"
          className="bg-bg-elevated/35 py-28 md:py-40"
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
          takeaway="System diagrams, measured results, and test evidence"
        >
          <ProjectGrid projects={featuredProjects} />
        </Section>

        <Section
          id="experience"
          index="04 — Experience"
          title={
            <>
              Roles & <span className="text-aluminum">outcomes</span>
            </>
          }
          takeaway="Verifiable program results — scope available on request"
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
          takeaway="Each capability tied to a built artifact or test record"
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
          takeaway="Fall 2026 internships · embedded robotics · mechanical systems"
        >
          <Contact />
        </Section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
