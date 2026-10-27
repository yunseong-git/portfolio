"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export function ArchitectureViewer({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <><button type="button" onClick={() => setOpen(true)} className="focus-ring relative block aspect-[16/9] w-full overflow-hidden rounded-xl border bg-white text-left"><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 1100px" className="object-contain p-3 transition duration-200 hover:scale-[1.02]" /><span className="absolute bottom-3 right-3 rounded bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-white">확대 보기</span></button>{open && <div role="dialog" aria-modal="true" aria-label={`${alt} 확대 보기`} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4" onMouseDown={() => setOpen(false)}><div className="relative max-h-full max-w-full overflow-auto rounded-lg bg-white p-8" onMouseDown={(e) => e.stopPropagation()}><button type="button" onClick={() => setOpen(false)} className="focus-ring sticky left-full top-0 z-10 -mt-5 -mr-5 block rounded-full bg-slate-900 px-3 py-1 text-xl text-white" aria-label="닫기">×</button><Image src={src} alt={alt} width={1800} height={1000} className="h-auto max-w-none" unoptimized /></div></div>}</>;
}
