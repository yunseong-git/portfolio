"use client";
import Image from "next/image";
import { useState } from "react";

export function ProfileImage({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) return <div aria-label={`${name} 프로필 사진 자리`} className="profile-image-fallback">{name.slice(0, 1)}</div>;
  return <Image src={src} alt={`${name} 프로필 사진`} fill sizes="(max-width: 640px) 224px, 288px" className="object-cover" onError={() => setFailed(true)} priority />;
}
