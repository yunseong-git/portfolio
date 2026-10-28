"use client";

import { useEffect, useState } from "react";
import { ProfileImage } from "@/components/ProfileImage";
import { portfolio, type Project } from "@/data/portfolio";

type Section = { type: "overview" | "project" | "experience" | "education" | "skills" | "contact" | "resume"; project?: Project };

const projectInitials = (name: string) => name === "PositionPort × AWS Data Lab" ? "PP" : name.split(/\s|×/).filter(Boolean).map((word) => word[0]).join("").slice(0, 3);

export function PortfolioDashboard() {
  const [welcomeOpen, setWelcomeOpen] = useState(true);
  const [bioOpen, setBioOpen] = useState(false);
  const [section, setSection] = useState<Section>({ type: "overview" });
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSection({ type: "overview" }); setLightboxProject(null); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const open = (next: Section) => { setWelcomeOpen(false); setSection(next); };
  const activeTitle = section.type === "project" ? section.project?.name : section.type[0].toUpperCase() + section.type.slice(1);

  return (
    <main className="desktop-workspace">
      <div className="desktop-wallpaper" />
      <header className="desktop-menubar">
        <div className="menu-brand"><span className="brand-mark">YJ</span><strong>Yunseong&apos;s Workspace</strong><span className="menu-muted">Portfolio Archive</span></div>
        <div className="menu-status"><span>BACKEND DEVELOPER</span><span className="status-dot" /> <span>AVAILABLE FOR OPPORTUNITIES</span></div>
      </header>
      <section className="desktop-canvas" aria-label="Portfolio desktop">
        <div className="desktop-intro"><div className="profile-identity"><div className="profile-avatar"><ProfileImage src={portfolio.profile.photo} name={portfolio.profile.name} /></div><div><strong>{portfolio.profile.name}</strong><span>{portfolio.profile.title} · {portfolio.profile.level.split(" /")[0]}</span><div className="profile-tags">{portfolio.profile.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button className="bio-toggle focus-ring" type="button" aria-expanded={bioOpen} onClick={() => setBioOpen((open) => !open)}>{bioOpen ? "− 자기소개" : "+ 자기소개"}</button>{bioOpen && <div className="bio-panel">{portfolio.profile.introduction}</div>}</div></div></div>
        <div className="desktop-icon-grid">
          {portfolio.projects.map((project) => <DesktopIcon key={project.slug} label={project.name} kind="project" initials={projectInitials(project.name)} onOpen={() => open({ type: "project", project })} />)}
          <DesktopIcon label="Resume" kind="document" initials="CV" onOpen={() => open({ type: "resume" })} />
          <DesktopIcon label="Contact" kind="contact" initials="@" onOpen={() => open({ type: "contact" })} />
        </div>
        <div className="desktop-footer"><span>4 projects</span><span>Double-click folders to open</span><span>Yunseong Jeong / Seoul, KR</span></div>
      </section>

      {section.type !== "overview" && <ExplorerWindow section={section} activeTitle={activeTitle ?? "Portfolio"} onClose={() => setSection({ type: "overview" })} onNavigate={open} onOpenArchitecture={setLightboxProject} />}
      {lightboxProject && <ArchitectureLightbox project={lightboxProject} onClose={() => setLightboxProject(null)} />}
      {welcomeOpen && <WelcomeDialog onClose={() => setWelcomeOpen(false)} onOpen={() => open({ type: "overview" })} onResume={() => open({ type: "resume" })} onContact={() => open({ type: "contact" })} />}
    </main>
  );
}

function DesktopIcon({ label, initials, kind, onOpen }: { label: string; initials: string; kind: "project" | "document" | "contact"; onOpen: () => void }) {
  return <button className="desktop-icon focus-ring" type="button" onClick={onOpen} aria-label={`${label} 열기`}><span className={`icon-art icon-${kind}`}><span>{initials}</span>{kind === "project" && <i />}</span><span className="icon-label">{label}</span></button>;
}

function WelcomeDialog({ onClose, onOpen, onResume, onContact }: { onClose: () => void; onOpen: () => void; onResume: () => void; onContact: () => void }) {
  return <div className="welcome-layer"><section className="welcome-dialog" role="dialog" aria-modal="true" aria-labelledby="welcome-title"><WindowBar title="welcome.txt" onClose={onClose} /><div className="welcome-body"><div className="welcome-avatar"><ProfileImage src={portfolio.profile.photo} name={portfolio.profile.name} /></div><div><p className="window-eyebrow">WELCOME TO THE WORKSPACE</p><h2 id="welcome-title">{portfolio.profile.englishName}</h2><p className="welcome-role">{portfolio.profile.title}</p>{portfolio.about.slice(0, 1).map((text) => <p className="welcome-copy" key={text}>{text}</p>)}<div className="welcome-skills">{portfolio.profile.keywords.slice(0, 5).map((skill) => <span key={skill}>{skill}</span>)}</div><div className="welcome-actions"><button className="primary-button focus-ring" onClick={onOpen}>Open Portfolio</button><button className="secondary-button focus-ring" onClick={onResume}>View Resume</button><button className="secondary-button focus-ring" onClick={onContact}>Contact</button></div></div></div></section></div>;
}

function WindowBar({ title, onClose }: { title: string; onClose: () => void }) { return <div className="window-bar"><div className="window-controls"><button aria-label="Close window" onClick={onClose}>×</button><button aria-label="Minimize window" onClick={onClose}>−</button></div><span className="window-file"><span className="file-glyph" />{title}</span><span className="window-path">~/yunseong/portfolio</span></div>; }

function ExplorerWindow({ section, activeTitle, onClose, onNavigate, onOpenArchitecture }: { section: Section; activeTitle: string; onClose: () => void; onNavigate: (section: Section) => void; onOpenArchitecture: (project: Project) => void }) {
  return <div className="window-layer"><section className="explorer-window" role="dialog" aria-modal="true" aria-labelledby="explorer-title"><WindowBar title={activeTitle ?? "Portfolio"} onClose={onClose} /><div className="window-toolbar"><button className="toolbar-back" onClick={onClose}>‹</button><span>Portfolio Archive</span><span className="toolbar-separator" /><span className="toolbar-location">{activeTitle}</span><span className="toolbar-spacer" /><span className="toolbar-meta">{section.type === "project" ? "PROJECT DOCUMENT" : "PERSONAL INDEX"}</span></div><div className="explorer-layout"><nav className="sidebar-tree" aria-label="Portfolio sections"><p className="tree-label">EXPLORER</p><TreeButton active={section.type === "overview"} label="Overview" icon="⌂" onClick={() => onNavigate({ type: "overview" })} /><p className="tree-label tree-space">PROJECTS <span>4</span></p>{portfolio.projects.map((project) => <TreeButton key={project.slug} active={section.project?.slug === project.slug} label={project.name} icon="□" onClick={() => onNavigate({ type: "project", project })} />)}<p className="tree-label tree-space">ABOUT</p><TreeButton active={section.type === "experience"} label="Experience" icon="⌁" onClick={() => onNavigate({ type: "experience" })} /><TreeButton active={section.type === "education"} label="Education" icon="▱" onClick={() => onNavigate({ type: "education" })} /><TreeButton active={section.type === "skills"} label="Skills" icon="#" onClick={() => onNavigate({ type: "skills" })} /><TreeButton active={section.type === "contact"} label="Contact" icon="@" onClick={() => onNavigate({ type: "contact" })} /></nav><article className="document-pane"><DocumentContent section={section} onOpen={onNavigate} onOpenArchitecture={onOpenArchitecture} /></article></div></section></div>;
}

function TreeButton({ active, label, icon, onClick }: { active: boolean; label: string; icon: string; onClick: () => void }) { return <button className={`tree-button focus-ring ${active ? "is-active" : ""}`} onClick={onClick}><span>{icon}</span>{label}</button>; }

function DocumentContent({ section, onOpenArchitecture }: { section: Section; onOpen?: (section: Section) => void; onOpenArchitecture: (project: Project) => void }) {
  if (section.type === "project" && section.project) return <ProjectDocument project={section.project} onOpenArchitecture={onOpenArchitecture} />;
  if (section.type === "overview") return <><DocumentHeader eyebrow="INDEX / OVERVIEW" title="Portfolio workspace" subtitle="A small archive of backend systems, experiments, and infrastructure." /><div className="overview-grid"><InfoTile label="Projects" value="04" detail="Selected systems" /><InfoTile label="Focus" value="API + Data" detail="Backend architecture" /><InfoTile label="Stack" value="AWS / Node" detail="Production minded" /></div><div className="document-callout"><span className="callout-mark">i</span><p>Select a project from the explorer to inspect its architecture, contributions, technology stack, and links.</p></div></>;
  if (section.type === "resume") return <><DocumentHeader eyebrow="DOCUMENT / RESUME" title={portfolio.profile.englishName} subtitle={portfolio.profile.title} /><div className="resume-grid"><div><h3>Profile</h3>{portfolio.about.map((text) => <p key={text}>{text}</p>)}</div><div><h3>Experience</h3>{portfolio.experiences.map((item) => <InfoRow key={item.title} title={item.title} detail={item.detail} />)}<h3 className="section-gap">Education</h3>{portfolio.education.map((item) => <InfoRow key={item.title} title={item.title} detail={item.detail} />)}</div></div></>;
  if (section.type === "contact") return <><DocumentHeader eyebrow="DIRECT CHANNEL / CONTACT" title="Let&apos;s build something reliable." subtitle="Open a channel or find me online." /><ContactDocument /></>;
  if (section.type === "skills") return <><DocumentHeader eyebrow="INDEX / SKILLS" title="Tools I work with" subtitle="A practical stack for building and operating services." /><div className="skills-document">{Object.entries(portfolio.skills).map(([category, skills]) => <div className="skill-row" key={category}><h3>{category}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></>;
  const title = section.type === "experience" ? "Experience" : "Education";
  const items = section.type === "experience" ? portfolio.experiences : portfolio.education;
  return <><DocumentHeader eyebrow={`INDEX / ${title.toUpperCase()}`} title={title} subtitle="Background and context." /><div className="timeline-document">{items.map((item) => <InfoRow key={item.title} title={item.title} detail={item.detail} />)}</div></>;
}

function ProjectDocument({ project, onOpenArchitecture }: { project: Project; onOpenArchitecture: (project: Project) => void }) { return <><DocumentHeader eyebrow={`PROJECT / ${project.role.toUpperCase()}`} title={project.name} subtitle={project.subtitle}><span className="document-status">{project.status ?? "ARCHIVE"}</span></DocumentHeader><div className="project-document-grid"><div><p className="project-description">{project.description}</p>{project.note && <blockquote>{project.note}</blockquote>}<div className="architecture-heading"><h3>Architecture</h3><button className="expand-button focus-ring" type="button" onClick={() => onOpenArchitecture(project)} aria-label={`Expand ${project.name} architecture`}>+</button></div><div className="architecture-view"><img src={project.architecture.svg} alt={project.architecture.alt} /><button className="architecture-expand focus-ring" type="button" onClick={() => onOpenArchitecture(project)} aria-label={`Expand ${project.name} architecture`}>+</button></div></div><aside className="project-inspector"><h3>Key Contributions</h3><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul><h3>Tech Stack</h3><div className="document-tags">{project.tech.map((skill) => <span key={skill}>{skill}</span>)}</div><h3>Links</h3><div className="document-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site ↗</a>}</div></aside></div></>; }

function ArchitectureLightbox({ project, onClose }: { project: Project; onClose: () => void }) { return <div className="architecture-lightbox" role="dialog" aria-modal="true" aria-label={`${project.name} architecture`} onClick={onClose}><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><button className="lightbox-close focus-ring" type="button" onClick={onClose} aria-label="Close architecture">×</button><img src={project.architecture.svg} alt={project.architecture.alt} /></div></div>; }

function DocumentHeader({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle: string; children?: React.ReactNode }) { return <header className="document-header"><div><p>{eyebrow}</p><h2 id="explorer-title">{title}</h2><span>{subtitle}</span></div>{children}</header>; }
function InfoTile({ label, value, detail }: { label: string; value: string; detail: string }) { return <div className="info-tile"><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>; }
function InfoRow({ title, detail }: { title: string; detail: string }) { return <div className="info-row"><span className="row-bullet" /><div><h3>{title}</h3><p>{detail}</p></div></div>; }
function ContactDocument() { const contacts = [{ label: "Email", value: portfolio.contact.email, href: `mailto:${portfolio.contact.email}` }, { label: "GitHub", value: portfolio.contact.github, href: portfolio.contact.github }, { label: "Kakao Open Chat", value: portfolio.contact.kakaoOpenChat, href: portfolio.contact.kakaoOpenChat }, { label: "Phone", value: portfolio.contact.phone, href: `tel:${portfolio.contact.phone.replace(/[^+\d]/g, "")}` }].filter((item) => item.value); return <div className="contact-document">{contacts.map((item) => <a className="contact-document-row focus-ring" key={item.label} href={item.href} target={item.label === "Email" || item.label === "Phone" ? undefined : "_blank"} rel="noreferrer"><span>{item.label}</span><strong>{item.value}</strong><i>↗</i></a>)}</div>; }
