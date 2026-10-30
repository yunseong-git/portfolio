"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ArchitectureViewer({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <><button type="button" onClick={() => setOpen(true)} className="standalone-architecture-preview focus-ring"><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 1100px" /><span>확대 보기</span></button>{open && <div role="dialog" aria-modal="true" aria-label={`${alt} 확대 보기`} className="standalone-architecture-lightbox" onMouseDown={() => setOpen(false)}><div className="standalone-architecture-document" onMouseDown={(event) => event.stopPropagation()}><button type="button" onClick={() => setOpen(false)} className="standalone-architecture-close focus-ring" aria-label="닫기">×</button><Image src={src} alt={alt} width={1800} height={1000} unoptimized /></div></div>}</>;
}
