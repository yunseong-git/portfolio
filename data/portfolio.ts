export type Link = { label: string; url: string };
export type ProjectScreenshot = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

export type ProjectVideo = {
  src: string;
  poster?: string;
  title?: string;
};

export type Project = {
  slug: string; name: string; subtitle: string; description: string; role: string; period?: string;
  tech: string[]; points: string[]; architecture: { svg: string; png: string; alt: string }; screenshots?: ProjectScreenshot[]; video?: ProjectVideo; github?: string; liveUrl?: string; note?: string; status?: "LIVE" | "PoC" | "PROTOTYPE";
};

export const portfolio = {
  profile: {
    name: "정윤성", englishName: "Yunseong Jeong", title: "Backend Developer", level: "신입 / Junior", photo: "/profile/profile.jpg",
    tags: ["@커뮤니케이션", "@책임감", "@열정적", "@문제해결", "@백엔드"],
    subtitle: "Backend Developer focused on reliable APIs, data modeling, and production infrastructure.",
    introduction: "서비스의 기능 구현에 그치지 않고 데이터 모델링, API 설계, 배포와 운영까지 직접 연결해보는 백엔드 개발자입니다. NestJS와 TypeScript를 중심으로 PostgreSQL, MongoDB, AWS 환경에서 서비스를 설계하고 배포해왔으며, 프로젝트를 실제 동작하는 서비스로 완성하는 과정에 관심이 많습니다.",
    keywords: ["NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Prisma", "Docker", "AWS", "GitHub Actions"],
    resumeUrl: "",
  },
  about: [
    "Node.js / NestJS 기반 백엔드 개발을 중심으로 서비스 설계부터 배포까지 경험해왔습니다.",
    "관광 SNS, 길드 커뮤니티, 서버리스 블록체인 프로토타입, AWS 데이터 분석 PoC 등 서로 다른 성격의 프로젝트를 수행하면서 데이터 저장 방식과 인프라 구조를 목적에 맞게 선택하는 경험을 쌓았습니다.",
    "최근에는 단순 기능 구현보다 데이터 모델링, 인증/권한, 배포 자동화, 장애 대응 등 실제 운영 환경에서 필요한 백엔드 문제에 더 집중하고 있습니다.",
  ],
  education: [{ title: "광운대학교", detail: "컴퓨터공학 · 4년제 졸업" }],
  experiences: [
    { title: "AWS Data Lab / DataOps PoC", detail: "PositionPort 서비스 운영자 및 AWS 기술지원팀과 협업해 MongoDB 운영 데이터를 S3, Glue, Athena, QuickSight 분석 흐름으로 연결한 데이터 분석 PoC를 진행했습니다." },
    { title: "ROTC / 군 복무 경험", detail: "사단 통신대대 지원중대장 실무를 수행하며 통신 지원 및 IP 기반 단말 운용, 조직 운영과 협업을 경험했습니다." },
  ],
  skills: {
    Backend: ["TypeScript", "NestJS", "Node.js", "REST API"],
    Database: ["PostgreSQL", "MongoDB", "Prisma", "Supabase", "Redis"],
    Infrastructure: ["AWS EC2", "AWS ECR", "AWS SSM", "AWS Lambda", "Amazon S3", "DynamoDB", "Docker", "Nginx", "GitHub Actions", "Vercel", "Cloudflare R2"],
    "Data / Analytics": ["AWS Glue", "Amazon Athena", "Amazon QuickSight"],
  },
  contact: { phone: "010-6257-4924", email: "qwerop159753@gmail.com", github: "https://github.com/yunseong-git", kakaoOpenChat: "https://open.kakao.com/o/g9dWc9Si", linkedin: "" },
  projects: [
    { slug: "picky", name: "PICKY", subtitle: "Location-based Travel Social Platform", role: "Backend · Infrastructure", description: "장소 탐색과 여행 기록, SNS 기능을 결합한 장소 기반 여행 플랫폼입니다. 관광 데이터를 기반으로 장소를 탐색하고 Moment와 Sequence를 통해 개인 여행 경험을 기록하고 공유할 수 있도록 설계했습니다.", tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Docker", "AWS EC2", "AWS ECR", "AWS SSM", "Nginx", "Cloudflare R2", "GitHub Actions", "Next.js"], points: ["장소 / Moment / Sequence 중심의 도메인 모델 설계", "PostgreSQL + Prisma 기반 API 및 데이터 구조 구현", "Docker + ECR + SSM 기반 EC2 CI/CD 및 TourAPI 연동"], liveUrl: "https://www.only-dev.com", status: "LIVE", screenshots: [
      { src: "/screenshots/picky/01.png", alt: "PICKY place exploration screen" },
      { src: "/screenshots/picky/02.png", alt: "PICKY place detail screen" },
      { src: "/screenshots/picky/03.png", alt: "PICKY Moment travel record screen" },
      { src: "/screenshots/picky/04.png", alt: "PICKY Sequence statistics screen" },
    ], architecture: { svg: "/architecture/picky.svg", png: "/architecture/picky.png", alt: "PICKY architecture diagram" } },
    { slug: "senagm", name: "SenaGM", subtitle: "Guild Community & Strategy Archive", role: "Backend · Deployment", description: "세븐나이츠 길드 구성원이 길드 정보와 영웅 조합, 방어덱 및 공격 공략을 축적하고 공유할 수 있도록 만든 길드 커뮤니티 서비스입니다.", tech: ["NestJS", "TypeScript", "MongoDB Atlas", "Mongoose", "Upstash Redis", "JWT", "Google OAuth", "Docker", "AWS EC2", "GitHub Actions", "Docker Hub"], points: ["NestJS Modular Monolith 구조", "JWT + Redis 기반 Refresh Session 및 권한 버전 관리", "GitHub Actions → Docker Hub → EC2 자동 배포와 Discord 장애 알림 연동"], liveUrl: "https://senagm.com", status: "LIVE", screenshots: [
      { src: "/screenshots/senagm/01.png", alt: "SenaGM guild community screen" },
      { src: "/screenshots/senagm/02.png", alt: "SenaGM strategy archive screen" },
      { src: "/screenshots/senagm/03.png", alt: "SenaGM strategy detail screen" },
    ], architecture: { svg: "/architecture/senagm.svg", png: "/architecture/senagm.png", alt: "SenaGM architecture diagram" } },
    { slug: "positionport", name: "PositionPort × AWS Data Lab", subtitle: "Data Lake & Analytics PoC", role: "Data Pipeline PoC · Collaboration", description: "암호화폐 자산 포트폴리오 서비스의 운영 데이터를 분석하기 위해 진행한 협업형 AWS DataOps PoC입니다. 기존 MongoDB 데이터를 AWS 데이터 분석 환경으로 연결하고 ETL부터 SQL 분석, BI 시각화까지의 흐름을 구성했습니다.", tech: ["MongoDB", "Amazon EC2", "Amazon S3", "AWS Glue", "Glue Data Catalog", "Amazon Athena", "Amazon QuickSight"], points: ["기존 MongoDB 운영 데이터 연결 및 S3 Data Lake 구성", "Glue Studio ETL, Crawler / Data Catalog, Athena SQL 분석", "QuickSight Dashboard 및 Forecast 활용"], status: "PoC", note: "PositionPort 서비스 운영자, 참여 개발자, AWS 기술 리소스와 함께 진행한 협업형 PoC입니다.", architecture: { svg: "/architecture/positionport.svg", png: "/architecture/positionport.png", alt: "PositionPort AWS Data Lab architecture diagram" } },
    { slug: "crypto-maker-bed", name: "Crypto Maker Bed", subtitle: "Serverless Blockchain Backend", role: "Backend · AWS Infrastructure", description: "사용자가 업로드한 이미지와 오디오를 가공하고 ERC-20 또는 ERC-1155 자산으로 발행하는 3인 프로토타입 프로젝트입니다. 백엔드에서는 장시간 처리 작업을 여러 Lambda로 분리하고 상태 기반 비동기 워크플로우를 구성했습니다.", tech: ["AWS Lambda", "Amazon API Gateway", "Amazon S3", "Amazon DynamoDB", "AWS SAM", "Polygon", "Ethers.js", "ERC-20", "ERC-1155"], points: ["Presigned URL 기반 S3 Direct Upload", "Lambda 기반 서버리스 워크플로우와 DynamoDB 요청 상태 관리", "비동기 ERC-20 / ERC-1155 발행 처리 및 Status Polling API"], status: "PROTOTYPE", note: "스마트 컨트랙트 인터페이스는 팀원이 제공했으며, 백엔드와 AWS 인프라 구현에 집중했습니다.", github: "https://github.com/yunseong-git/crypto-maker-bed", architecture: { svg: "/architecture/crypto-maker-bed.svg", png: "/architecture/crypto-maker-bed.png", alt: "Crypto Maker Bed architecture diagram" } },
  ] as Project[],
};

export const getProject = (slug: string) => portfolio.projects.find((project) => project.slug === slug);
