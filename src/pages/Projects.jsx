import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="py-10 sm:py-12 md:py-20">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Case studies and UI-focused work."
        />

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              tagline={p.tagline}
              slug={p.slug}
              tech={p.tech}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
