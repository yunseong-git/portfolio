import { notFound } from "next/navigation";
import Link from "next/link";
import { ArchitectureViewer } from "@/components/ArchitectureViewer";
import { getProject, portfolio } from "@/data/portfolio";

export function generateStaticParams() { return portfolio.projects.map(({ slug }) => ({ slug })); }
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <main className="standalone-project"><div className="standalone-project-inner"><Link href="/" className="standalone-back focus-ring">← Portfolio dashboard</Link><header className="standalone-header"><p className="standalone-eyebrow">{project.role}</p><h1>{project.name}</h1><p className="standalone-subtitle">{project.subtitle}</p>{project.period && <p className="standalone-meta">{project.period}</p>}<p className="standalone-description">{project.description}</p>{project.note && <p className="standalone-note">{project.note}</p>}<div className="standalone-actions">{project.github && <a className="focus-ring" href={project.github} target="_blank" rel="noreferrer">GitHub</a>}{project.liveUrl && <a className="focus-ring" href={project.liveUrl} target="_blank" rel="noreferrer">Live Site</a>}</div></header><div className="standalone-grid"><section><h2>Key Contributions</h2><ul className="standalone-points">{project.points.map((point) => <li key={point}>{point}</li>)}</ul><h2 className="standalone-tech-title">Tech Stack</h2><div className="standalone-tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div></section><section><h2>Architecture</h2><ArchitectureViewer src={project.architecture.svg} alt={project.architecture.alt} /><p className="standalone-meta">이미지를 선택하면 크게 볼 수 있습니다.</p></section></div></div></main>;
}
