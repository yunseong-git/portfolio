# 정윤성 Backend Developer Portfolio

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 콘텐츠 수정

프로필, 연락처, 기술, 경력, 프로젝트는 모두 `data/portfolio.ts`에서 수정합니다.

## 선택 파일 추가

- 프로필 사진: `public/profile/profile.jpg`
- 이력서 PDF: `public/resume/resume.pdf`
- 아키텍처: `public/architecture/` 아래의 프로젝트별 PNG/SVG

이력서를 표시하려면 `data/portfolio.ts`의 `profile.resumeUrl`을 `/resume/resume.pdf`로 설정합니다.

## Vercel 배포

GitHub에 푸시한 뒤 Vercel에서 저장소를 Import하면 Next.js 설정을 자동으로 인식합니다. 배포 프로젝트의 Domains에서 `ys.only-dev.com`을 추가하고, 도메인 제공업체에 Vercel이 안내하는 DNS 레코드를 설정하세요.
