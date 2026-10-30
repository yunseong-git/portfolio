import Link from "next/link";

export default function NotFound() {
  return <main className="not-found-page"><p>404</p><h1>페이지를 찾을 수 없습니다.</h1><Link className="focus-ring" href="/">홈으로 돌아가기</Link></main>;
}
