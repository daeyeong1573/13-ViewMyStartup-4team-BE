import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ─── 1. STARTUP (50개) ──────────────────────────────────────────────────────
  await prisma.startup.createMany({
    data: [
      // 에듀테크 (10개)
      {
        id: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        category: "에듀테크",
        name: "코드잇",
        description:
          "코드잇은 온라인 코딩 교육 서비스를 운영하는 EdTech 스타트업입니다. 모든 강의를 자체 제작하여 퀄리티 높은 콘텐츠를 제공하고, 코딩 교육에 최적화된 플랫폼을 개발하고 있습니다. 2021년 Series B 투자를 받아 누적 140억 원의 투자를 받았습니다.",
        imgUrl: "https://placehold.co/48x48/7c3aed/ffffff?text=CI",
        totalInvestment: 14000000000n,
        revenue: 5000000000n,
        employeeCount: 68,
        myStartupCount: 7204,
        compareStartupCount: 9224,
      },
      {
        id: "293a7c9e-465c-4ec0-8d25-582e48498bce",
        category: "에듀테크",
        name: "메스프레소",
        description:
          "메스프레소는 AI 기반 수학 학습 앱 콴다를 운영하는 EdTech 스타트업입니다. 수학 문제를 촬영하면 AI가 즉시 풀이를 제공하며, 전 세계 50개국 이상에서 서비스를 제공하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/2563eb/ffffff?text=MP",
        totalInvestment: 14000000000n,
        revenue: 4200000000n,
        employeeCount: 40,
        myStartupCount: 5763,
        compareStartupCount: 5763,
      },
      {
        id: "b08b6965-2ccb-4d53-ac00-fa36261ca74d",
        category: "에듀테크",
        name: "뤼이드",
        description:
          "뤼이드는 AI 기반 맞춤형 학습 솔루션을 제공하는 EdTech 스타트업입니다. 토익 학습 앱 산타토익으로 유명하며, AI가 개인의 취약점을 분석해 최적의 학습 경로를 제안합니다.",
        imgUrl: "https://placehold.co/48x48/0891b2/ffffff?text=RD",
        totalInvestment: 15000000000n,
        revenue: 3000000000n,
        employeeCount: 102,
        myStartupCount: 9804,
        compareStartupCount: 8766,
      },
      {
        id: "8cde5c8a-c89f-4b4d-9339-68e4f9d301ab",
        category: "에듀테크",
        name: "엘리스",
        description:
          "엘리스는 AI 기반 코딩 교육 플랫폼을 운영하는 EdTech 스타트업입니다. 기업과 대학을 대상으로 맞춤형 온라인 교육 솔루션을 제공하며, 국내 주요 대학 및 기업과 파트너십을 맺고 있습니다.",
        imgUrl: "https://placehold.co/48x48/7c3aed/ffffff?text=EL",
        totalInvestment: 1000000000n,
        revenue: 2800000000n,
        employeeCount: 13,
        myStartupCount: 4004,
        compareStartupCount: 5883,
      },
      {
        id: "cc444e49-6b6f-4830-bf57-271e8f851c0f",
        category: "에듀테크",
        name: "아이해이트플라잉버그",
        description:
          "아이해이트플라잉버그는 비전공자를 위한 소프트웨어 교육 서비스를 제공하는 EdTech 스타트업입니다. 실무 중심의 커리큘럼으로 취업까지 연계하는 부트캠프를 운영하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/dc2626/ffffff?text=IH",
        totalInvestment: 15000000000n,
        revenue: 500000000n,
        employeeCount: 97,
        myStartupCount: 1768,
        compareStartupCount: 2975,
      },
      {
        id: "a1290781-9d3c-433a-b62d-cbde4b0b7220",
        category: "에듀테크",
        name: "팀스파르타",
        description:
          "팀스파르타는 비개발자를 위한 코딩 교육 플랫폼 스파르타코딩클럽을 운영하는 스타트업입니다. 웹개발, 앱개발, 데이터 분석 등 실무 중심의 강의를 제공하며 수료 후 취업을 지원합니다.",
        imgUrl: "https://placehold.co/48x48/ea580c/ffffff?text=TS",
        totalInvestment: 12000000000n,
        revenue: 7000000000n,
        employeeCount: 55,
        myStartupCount: 3951,
        compareStartupCount: 7506,
      },
      {
        id: "614e7dc0-9039-4af0-a5af-b8c7d8264c50",
        category: "에듀테크",
        name: "코드스테이츠",
        description:
          "코드스테이츠는 소프트웨어 인재 양성에 특화된 EdTech 스타트업입니다. 수강 후 취업 성공 시 소득공유 방식의 ISA 모델을 도입해 교육비 부담 없이 학습할 수 있는 환경을 제공합니다.",
        imgUrl: "https://placehold.co/48x48/0284c7/ffffff?text=CS",
        totalInvestment: 11000000000n,
        revenue: 4500000000n,
        employeeCount: 80,
        myStartupCount: 2890,
        compareStartupCount: 4120,
      },
      {
        id: "39eca81e-23ee-48d0-b79a-25b45ab493ac",
        category: "에듀테크",
        name: "클래스101",
        description:
          "클래스101은 취미와 커리어를 위한 온라인 클래스 플랫폼입니다. 드로잉, 음악, 요리, 재테크 등 다양한 분야의 강의를 크리에이터와 연결하여 누구나 쉽게 배울 수 있는 환경을 제공합니다.",
        imgUrl: "https://placehold.co/48x48/16a34a/ffffff?text=CL",
        totalInvestment: 20000000000n,
        revenue: 9000000000n,
        employeeCount: 120,
        myStartupCount: 6540,
        compareStartupCount: 8100,
      },
      {
        id: "2cadd71b-d5f5-4cbd-988d-594ad5a55cde",
        category: "에듀테크",
        name: "패스트캠퍼스",
        description:
          "패스트캠퍼스는 성인 직장인을 위한 실무 교육 플랫폼입니다. IT, 디자인, 비즈니스, 마케팅 등 직무에 필요한 스킬을 온·오프라인으로 배울 수 있으며, 기업 맞춤형 B2B 교육도 제공합니다.",
        imgUrl: "https://placehold.co/48x48/db2777/ffffff?text=FC",
        totalInvestment: 18000000000n,
        revenue: 11000000000n,
        employeeCount: 150,
        myStartupCount: 5210,
        compareStartupCount: 6330,
      },
      {
        id: "4fec64d9-f481-426c-963a-5a6e8c99dc69",
        category: "에듀테크",
        name: "프로그래머스",
        description:
          "프로그래머스는 개발자 채용과 코딩 교육을 연결하는 플랫폼입니다. 코딩 테스트 문제 풀이, 스킬 기반 채용, 개발자 역량 평가 등 개발자 커리어 성장을 위한 다양한 서비스를 제공합니다.",
        imgUrl: "https://placehold.co/48x48/7c3aed/ffffff?text=PG",
        totalInvestment: 8000000000n,
        revenue: 6000000000n,
        employeeCount: 90,
        myStartupCount: 4780,
        compareStartupCount: 5990,
      },

      // 핀테크 (10개)
      {
        id: "f33242ed-6503-4537-aba5-b5918c045b85",
        category: "핀테크",
        name: "토스",
        description:
          "토스는 간편송금을 시작으로 금융 슈퍼앱으로 성장한 핀테크 기업입니다. 송금, 결제, 투자, 대출, 보험까지 하나의 앱에서 모든 금융 서비스를 제공하며, 국내 최대 핀테크 유니콘으로 자리매김했습니다.",
        imgUrl: "https://placehold.co/48x48/0066ff/ffffff?text=TO",
        totalInvestment: 100000000000n,
        revenue: 80000000000n,
        employeeCount: 2500,
        myStartupCount: 15000,
        compareStartupCount: 18000,
      },
      {
        id: "4b694ea2-9f37-4ed7-bc68-5f5ac0521c4a",
        category: "핀테크",
        name: "카카오페이",
        description:
          "카카오페이는 카카오톡 기반의 간편결제 및 금융 서비스를 제공하는 핀테크 기업입니다. QR 결제, 멤버십 통합 관리, 보험, 투자 등 일상 속 금융 경험을 혁신하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/f9e000/000000?text=KP",
        totalInvestment: 80000000000n,
        revenue: 60000000000n,
        employeeCount: 1800,
        myStartupCount: 12000,
        compareStartupCount: 15000,
      },
      {
        id: "cf28c06c-4740-4291-858b-c3770227109a",
        category: "핀테크",
        name: "뱅크샐러드",
        description:
          "뱅크샐러드는 내 금융 데이터를 한 곳에서 관리하는 마이데이터 서비스입니다. 은행, 카드, 보험, 증권 등 흩어진 자산을 통합 조회하고 맞춤형 금융 상품을 추천해드립니다.",
        imgUrl: "https://placehold.co/48x48/00b14f/ffffff?text=BS",
        totalInvestment: 30000000000n,
        revenue: 15000000000n,
        employeeCount: 350,
        myStartupCount: 8900,
        compareStartupCount: 9500,
      },
      {
        id: "7a70a544-5ff0-4ff8-9c0d-e2ad3ee5f6a7",
        category: "핀테크",
        name: "핀다",
        description:
          "핀다는 대출 비교 플랫폼으로 100개 이상의 금융기관 대출 상품을 한 번에 비교하고 신청할 수 있는 서비스입니다. AI 기반 맞춤 대출 추천으로 최적의 금융 조건을 찾아드립니다.",
        imgUrl: "https://placehold.co/48x48/6d28d9/ffffff?text=FD",
        totalInvestment: 25000000000n,
        revenue: 12000000000n,
        employeeCount: 200,
        myStartupCount: 5600,
        compareStartupCount: 6800,
      },
      {
        id: "a1fe93da-e8ab-4bc4-a17a-e86ca69952bb",
        category: "핀테크",
        name: "렌딧",
        description:
          "렌딧은 개인신용 P2P 대출 플랫폼으로 대출자와 투자자를 직접 연결합니다. 머신러닝 기반의 신용평가 모델로 중금리 대출 시장을 혁신하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/0369a1/ffffff?text=LD",
        totalInvestment: 15000000000n,
        revenue: 8000000000n,
        employeeCount: 130,
        myStartupCount: 3200,
        compareStartupCount: 4100,
      },
      {
        id: "3c7e85cb-dce2-40fe-abf7-5aa61d5e8855",
        category: "핀테크",
        name: "크레파스솔루션",
        description:
          "크레파스솔루션은 기업 맞춤형 금융 플랫폼 솔루션을 개발하는 B2B 핀테크 기업입니다. 디지털 뱅킹, 결제 인프라, 금융 API 등 금융 디지털 전환을 지원합니다.",
        imgUrl: "https://placehold.co/48x48/b45309/ffffff?text=CR",
        totalInvestment: 10000000000n,
        revenue: 7000000000n,
        employeeCount: 110,
        myStartupCount: 2100,
        compareStartupCount: 3000,
      },
      {
        id: "e576e071-2d43-435b-850d-a5d4f3de10b2",
        category: "핀테크",
        name: "페이워치",
        description:
          "페이워치는 직장인 급여 선지급 서비스를 제공하는 핀테크 스타트업입니다. 월급날 전에 이미 일한 만큼의 급여를 미리 받을 수 있어 급전이 필요한 직장인들의 금융 부담을 줄여줍니다.",
        imgUrl: "https://placehold.co/48x48/be123c/ffffff?text=PW",
        totalInvestment: 8000000000n,
        revenue: 4000000000n,
        employeeCount: 75,
        myStartupCount: 1800,
        compareStartupCount: 2200,
      },
      {
        id: "bca5c65b-7e20-41e2-831b-9843ed23929d",
        category: "핀테크",
        name: "두나무",
        description:
          "두나무는 증권 플랫폼 증권플러스와 암호화폐 거래소 업비트를 운영하는 핀테크 기업입니다. 블록체인 기술을 활용한 디지털 자산 관련 서비스를 국내외에 제공하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/0f172a/ffffff?text=DN",
        totalInvestment: 50000000000n,
        revenue: 45000000000n,
        employeeCount: 800,
        myStartupCount: 11000,
        compareStartupCount: 13000,
      },
      {
        id: "7228bcba-b1dc-483d-b436-891983f8ee2f",
        category: "핀테크",
        name: "웰컴페이먼츠",
        description:
          "웰컴페이먼츠는 온·오프라인 간편결제 및 PG 서비스를 제공하는 핀테크 기업입니다. 소상공인부터 대기업까지 다양한 사업자를 위한 결제 인프라를 구축하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/0284c7/ffffff?text=WP",
        totalInvestment: 20000000000n,
        revenue: 18000000000n,
        employeeCount: 300,
        myStartupCount: 4500,
        compareStartupCount: 5200,
      },
      {
        id: "0483cbbf-5b7e-4cca-a948-c126ee67376a",
        category: "핀테크",
        name: "쿼터백",
        description:
          "쿼터백은 AI 기반 로보어드바이저 자산관리 서비스를 제공하는 핀테크 스타트업입니다. 알고리즘 기반 자동 투자로 개인 맞춤형 포트폴리오를 운용하며 안정적인 수익을 추구합니다.",
        imgUrl: "https://placehold.co/48x48/4f46e5/ffffff?text=QB",
        totalInvestment: 12000000000n,
        revenue: 5000000000n,
        employeeCount: 85,
        myStartupCount: 3100,
        compareStartupCount: 3800,
      },

      // 헬스테크 (10개)
      {
        id: "a9135f99-b541-4364-8ea8-5bb9143a3a88",
        category: "헬스테크",
        name: "닥터나우",
        description:
          "닥터나우는 비대면 진료 플랫폼으로 집에서 편리하게 의사 상담을 받고 약을 배달받을 수 있는 서비스입니다. 야간·휴일에도 진료가 가능해 의료 접근성을 높이고 있습니다.",
        imgUrl: "https://placehold.co/48x48/16a34a/ffffff?text=DN",
        totalInvestment: 18000000000n,
        revenue: 9000000000n,
        employeeCount: 180,
        myStartupCount: 7800,
        compareStartupCount: 8900,
      },
      {
        id: "a8cffb0b-8990-4c5f-b568-7109f82a27fa",
        category: "헬스테크",
        name: "메디블록",
        description:
          "메디블록은 블록체인 기반 의료 데이터 플랫폼입니다. 환자 중심의 의료 정보 관리, 병원 간 데이터 공유, 임상 데이터 활용 등 의료 데이터 혁신을 이끌고 있습니다.",
        imgUrl: "https://placehold.co/48x48/0891b2/ffffff?text=MB",
        totalInvestment: 10000000000n,
        revenue: 4000000000n,
        employeeCount: 95,
        myStartupCount: 3400,
        compareStartupCount: 4200,
      },
      {
        id: "73288b37-d2d1-476b-b5f3-aa7eec605db4",
        category: "헬스테크",
        name: "라이프시맨틱스",
        description:
          "라이프시맨틱스는 디지털 치료제와 의료 AI 솔루션을 개발하는 헬스테크 기업입니다. 앱 기반 호흡 재활 치료제, AI 기반 진단 보조 솔루션 등 디지털 헬스케어를 선도합니다.",
        imgUrl: "https://placehold.co/48x48/7c3aed/ffffff?text=LS",
        totalInvestment: 12000000000n,
        revenue: 5500000000n,
        employeeCount: 110,
        myStartupCount: 2800,
        compareStartupCount: 3600,
      },
      {
        id: "b1c75983-5bd0-4af5-a699-994f5899362c",
        category: "헬스테크",
        name: "휴레이포지티브",
        description:
          "휴레이포지티브는 만성질환 관리 디지털 헬스케어 플랫폼입니다. 당뇨, 고혈압 등 만성질환 환자를 위한 생활 습관 코칭과 의료진 연결 서비스를 제공합니다.",
        imgUrl: "https://placehold.co/48x48/dc2626/ffffff?text=HR",
        totalInvestment: 8000000000n,
        revenue: 3500000000n,
        employeeCount: 70,
        myStartupCount: 2200,
        compareStartupCount: 2900,
      },
      {
        id: "ea6561d3-b8f5-4a4a-8f10-c846889d384c",
        category: "헬스테크",
        name: "눔코리아",
        description:
          "눔코리아는 심리학 기반 체중 감량 및 건강 관리 앱 눔을 운영합니다. 코칭 프로그램과 행동 변화 심리학을 결합하여 지속 가능한 건강한 생활 습관 형성을 돕습니다.",
        imgUrl: "https://placehold.co/48x48/ea580c/ffffff?text=NK",
        totalInvestment: 22000000000n,
        revenue: 18000000000n,
        employeeCount: 250,
        myStartupCount: 6700,
        compareStartupCount: 7500,
      },
      {
        id: "3195b187-a0bc-421c-ba5f-a6763b2a0591",
        category: "헬스테크",
        name: "에이치알엠",
        description:
          "에이치알엠은 AI 기반 심전도 분석 솔루션을 개발하는 의료 AI 기업입니다. 웨어러블 기기와 연동하여 실시간 심장 건강 모니터링을 제공하며 심장 질환 조기 발견에 기여합니다.",
        imgUrl: "https://placehold.co/48x48/b45309/ffffff?text=HM",
        totalInvestment: 7000000000n,
        revenue: 2800000000n,
        employeeCount: 55,
        myStartupCount: 1500,
        compareStartupCount: 2100,
      },
      {
        id: "5a126ddf-a426-4a70-a6aa-90668056b3c3",
        category: "헬스테크",
        name: "인바디",
        description:
          "인바디는 체성분 분석 기기와 건강 관리 솔루션을 제공하는 헬스테크 기업입니다. 전 세계 100개국 이상에 체성분 분석 장비를 공급하며 글로벌 헬스케어 시장을 선도합니다.",
        imgUrl: "https://placehold.co/48x48/0369a1/ffffff?text=IB",
        totalInvestment: 35000000000n,
        revenue: 30000000000n,
        employeeCount: 450,
        myStartupCount: 9200,
        compareStartupCount: 10100,
      },
      {
        id: "b41074fe-bf3c-43fa-ab5f-f2d3914cd7bd",
        category: "헬스테크",
        name: "올라케어",
        description:
          "올라케어는 비대면 진료와 약 처방·배달을 통합한 원스톱 헬스케어 플랫폼입니다. 내과, 피부과, 정신건강의학과 등 다양한 진료과 전문의와 빠르게 연결해드립니다.",
        imgUrl: "https://placehold.co/48x48/16a34a/ffffff?text=OC",
        totalInvestment: 6000000000n,
        revenue: 2500000000n,
        employeeCount: 60,
        myStartupCount: 1900,
        compareStartupCount: 2700,
      },
      {
        id: "4c2457bd-1a66-4ab1-98b7-b1c6bfbf8ca2",
        category: "헬스테크",
        name: "셀바스헬스케어",
        description:
          "셀바스헬스케어는 디지털 헬스케어 기기와 AI 솔루션을 개발하는 기업입니다. 혈압계, 혈당계 등 가정용 의료기기와 병원 정보 시스템을 AI와 결합하여 스마트 헬스케어를 실현합니다.",
        imgUrl: "https://placehold.co/48x48/be123c/ffffff?text=SH",
        totalInvestment: 15000000000n,
        revenue: 12000000000n,
        employeeCount: 200,
        myStartupCount: 4100,
        compareStartupCount: 5000,
      },
      {
        id: "ee764e01-add6-4916-a3b1-98a70e43b0aa",
        category: "헬스테크",
        name: "웰트",
        description:
          "웰트는 스마트 벨트를 통해 사용자의 건강 데이터를 수집·분석하는 디지털 헬스케어 스타트업입니다. 허리둘레 변화, 활동량, 식습관 등을 모니터링해 비만 예방을 돕습니다.",
        imgUrl: "https://placehold.co/48x48/4f46e5/ffffff?text=WT",
        totalInvestment: 5000000000n,
        revenue: 2000000000n,
        employeeCount: 45,
        myStartupCount: 1300,
        compareStartupCount: 1800,
      },

      // 이커머스 (10개)
      {
        id: "65bbbf58-6f9b-44c7-bae8-ff857ce36e1f",
        category: "이커머스",
        name: "오늘의집",
        description:
          "오늘의집은 인테리어·라이프스타일 커머스 플랫폼입니다. 사용자가 직접 촬영한 인테리어 사진을 공유하고, 해당 제품을 바로 구매할 수 있는 콘텐츠 커머스 모델로 큰 인기를 얻고 있습니다.",
        imgUrl: "https://placehold.co/48x48/2563eb/ffffff?text=OH",
        totalInvestment: 40000000000n,
        revenue: 35000000000n,
        employeeCount: 600,
        myStartupCount: 11000,
        compareStartupCount: 13500,
      },
      {
        id: "8bbf1be7-fb56-4587-a730-55e6e1a8efae",
        category: "이커머스",
        name: "컬리",
        description:
          "컬리는 신선식품 새벽배송 서비스 마켓컬리를 운영하는 이커머스 스타트업입니다. 밤 11시 이전에 주문하면 다음날 새벽 7시 전에 배송해드리는 샛별배송으로 신선식품 시장을 혁신했습니다.",
        imgUrl: "https://placehold.co/48x48/7c3aed/ffffff?text=KL",
        totalInvestment: 60000000000n,
        revenue: 55000000000n,
        employeeCount: 1200,
        myStartupCount: 13000,
        compareStartupCount: 15000,
      },
      {
        id: "fba83227-89e3-46ae-807e-3ada61f76b73",
        category: "이커머스",
        name: "발란",
        description:
          "발란은 명품 패션 온라인 플랫폼입니다. 국내외 공식 부티크와 직접 파트너십을 맺어 정품 명품을 합리적인 가격에 구매할 수 있으며, 빠른 배송과 정품 보증 서비스를 제공합니다.",
        imgUrl: "https://placehold.co/48x48/0f172a/ffffff?text=BL",
        totalInvestment: 25000000000n,
        revenue: 20000000000n,
        employeeCount: 280,
        myStartupCount: 6800,
        compareStartupCount: 8200,
      },
      {
        id: "fa01cea9-19a8-4860-83a6-fb6c0ed9d4f5",
        category: "이커머스",
        name: "지그재그",
        description:
          "지그재그는 동대문 쇼핑몰을 기반으로 한 여성 패션 앱입니다. AI 기반 개인화 추천으로 사용자 취향에 맞는 스타일을 제안하며, 국내 여성 패션 앱 중 최다 사용자를 보유하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/db2777/ffffff?text=ZG",
        totalInvestment: 30000000000n,
        revenue: 28000000000n,
        employeeCount: 350,
        myStartupCount: 8500,
        compareStartupCount: 9800,
      },
      {
        id: "5b88e57e-8ce8-434f-afbc-bbd44d40a6fc",
        category: "이커머스",
        name: "브랜디",
        description:
          "브랜디는 동대문 패션 D2C 플랫폼입니다. 동대문 도매시장과 소비자를 직접 연결하여 빠른 배송과 저렴한 가격으로 최신 트렌드 의류를 제공합니다. B2B 솔루션도 운영합니다.",
        imgUrl: "https://placehold.co/48x48/ea580c/ffffff?text=BR",
        totalInvestment: 15000000000n,
        revenue: 12000000000n,
        employeeCount: 200,
        myStartupCount: 4200,
        compareStartupCount: 5100,
      },
      {
        id: "58f76b49-dc1e-4310-9752-42a1abc2e744",
        category: "이커머스",
        name: "무신사",
        description:
          "무신사는 국내 최대 온라인 패션 플랫폼입니다. 스트리트 패션을 중심으로 시작해 현재 다양한 브랜드의 온라인 편집샵으로 성장했으며, 자체 PB 브랜드와 오프라인 매장도 운영합니다.",
        imgUrl: "https://placehold.co/48x48/0f172a/ffffff?text=MS",
        totalInvestment: 70000000000n,
        revenue: 65000000000n,
        employeeCount: 1500,
        myStartupCount: 14000,
        compareStartupCount: 16000,
      },
      {
        id: "1ce9915e-6293-4727-8053-affcb1f84b0d",
        category: "이커머스",
        name: "크림",
        description:
          "크림은 한정판 스니커즈와 스트리트웨어 거래 플랫폼입니다. 네이버가 투자한 리셀 플랫폼으로 실물 검수를 통해 정품을 보증하고, 구매자와 판매자를 안전하게 연결합니다.",
        imgUrl: "https://placehold.co/48x48/0284c7/ffffff?text=KR",
        totalInvestment: 28000000000n,
        revenue: 22000000000n,
        employeeCount: 320,
        myStartupCount: 7200,
        compareStartupCount: 8600,
      },
      {
        id: "c284cebf-709f-46d4-b058-a438984748d3",
        category: "이커머스",
        name: "버킷플레이스",
        description:
          "버킷플레이스는 인테리어 O2O 플랫폼 오늘의집의 운영사입니다. 시공 중개, 가구 구매, 인테리어 커뮤니티를 하나의 앱에서 제공하며 홈 인테리어 시장을 통합하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/6d28d9/ffffff?text=BP",
        totalInvestment: 45000000000n,
        revenue: 38000000000n,
        employeeCount: 700,
        myStartupCount: 10500,
        compareStartupCount: 12000,
      },
      {
        id: "4ed783ee-7735-4644-9a81-c312f70f88ed",
        category: "이커머스",
        name: "트렌비",
        description:
          "트렌비는 명품 직구 플랫폼으로 전 세계 1만여 개 명품 부티크와 연결해 정품 명품을 현지 가격으로 구매할 수 있게 합니다. AI 가격 비교와 정품 인증으로 신뢰 있는 명품 구매를 지원합니다.",
        imgUrl: "https://placehold.co/48x48/b45309/ffffff?text=TR",
        totalInvestment: 18000000000n,
        revenue: 15000000000n,
        employeeCount: 220,
        myStartupCount: 5300,
        compareStartupCount: 6400,
      },
      {
        id: "865952bd-d593-443f-a575-854cd6b63a96",
        category: "이커머스",
        name: "마켓컬리",
        description:
          "마켓컬리는 새벽배송 전문 온라인 장보기 서비스입니다. 밤 11시 이전에 주문하면 다음날 새벽 7시 전에 배송해드리는 샛별배송으로 신선식품 새벽배송 시장을 개척했습니다.",
        imgUrl: "https://placehold.co/48x48/4f46e5/ffffff?text=MK",
        totalInvestment: 55000000000n,
        revenue: 50000000000n,
        employeeCount: 1100,
        myStartupCount: 12500,
        compareStartupCount: 14000,
      },

      // AI·빅데이터 (10개)
      {
        id: "d2db485d-8593-4dd2-93fb-ea69447c7da2",
        category: "AI·빅데이터",
        name: "뤼튼테크놀로지스",
        description:
          "뤼튼테크놀로지스는 AI 기반 글쓰기 도구와 생성형 AI 서비스를 개발하는 스타트업입니다. 마케팅 카피, 블로그 포스트, 광고 문구 등 다양한 콘텐츠를 AI로 빠르게 생성해드립니다.",
        imgUrl: "https://placehold.co/48x48/7c3aed/ffffff?text=RT",
        totalInvestment: 16000000000n,
        revenue: 7000000000n,
        employeeCount: 130,
        myStartupCount: 6100,
        compareStartupCount: 7300,
      },
      {
        id: "62fb8da0-f2bb-43af-ac43-459e1a8e909d",
        category: "AI·빅데이터",
        name: "업스테이지",
        description:
          "업스테이지는 기업용 AI 솔루션을 개발하는 AI 스타트업입니다. 문서 AI, 검색 AI, LLM 등 기업 맞춤형 AI 솔루션을 제공하며 국내외 주요 기업들과 파트너십을 맺고 있습니다.",
        imgUrl: "https://placehold.co/48x48/0891b2/ffffff?text=US",
        totalInvestment: 20000000000n,
        revenue: 9000000000n,
        employeeCount: 160,
        myStartupCount: 5200,
        compareStartupCount: 6500,
      },
      {
        id: "315e540a-53d9-4b52-947f-b15468b235cd",
        category: "AI·빅데이터",
        name: "스캐터랩",
        description:
          "스캐터랩은 AI 대화 기술을 연구하는 스타트업으로 감성 대화 AI 이루다를 개발했습니다. 자연스러운 한국어 대화가 가능한 AI 캐릭터 서비스를 제공하며 소셜 AI 시장을 개척하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/db2777/ffffff?text=SL",
        totalInvestment: 14000000000n,
        revenue: 5000000000n,
        employeeCount: 100,
        myStartupCount: 4800,
        compareStartupCount: 5700,
      },
      {
        id: "7610818a-1deb-437d-bb33-1b801c527170",
        category: "AI·빅데이터",
        name: "수아랩",
        description:
          "수아랩은 딥러닝 기반 머신비전 솔루션을 개발하는 AI 스타트업입니다. 제조 공정의 불량 검출 자동화 솔루션으로 국내외 제조 기업들의 품질 관리 혁신을 지원합니다.",
        imgUrl: "https://placehold.co/48x48/16a34a/ffffff?text=SA",
        totalInvestment: 11000000000n,
        revenue: 6000000000n,
        employeeCount: 88,
        myStartupCount: 2900,
        compareStartupCount: 3700,
      },
      {
        id: "407a83d0-41da-4d59-b08b-c166259833e2",
        category: "AI·빅데이터",
        name: "딥엑스",
        description:
          "딥엑스는 온디바이스 AI 반도체(NPU)를 개발하는 팹리스 스타트업입니다. 클라우드 없이 기기 자체에서 AI 연산이 가능한 칩을 개발하여 엣지 AI 시장을 선도하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/dc2626/ffffff?text=DX",
        totalInvestment: 25000000000n,
        revenue: 8000000000n,
        employeeCount: 170,
        myStartupCount: 3800,
        compareStartupCount: 4600,
      },
      {
        id: "b61e1273-6a35-43f4-950f-260cd5e1173e",
        category: "AI·빅데이터",
        name: "원티드랩",
        description:
          "원티드랩은 AI 기반 채용 플랫폼 원티드를 운영하는 HR테크 스타트업입니다. 지인 추천 채용 모델로 시작해 AI 매칭, 커리어 코칭, 연봉 협상 등 채용 전반의 경험을 혁신합니다.",
        imgUrl: "https://placehold.co/48x48/ea580c/ffffff?text=WL",
        totalInvestment: 22000000000n,
        revenue: 17000000000n,
        employeeCount: 300,
        myStartupCount: 7600,
        compareStartupCount: 8900,
      },
      {
        id: "300fd9c5-a8ec-450a-94ec-d9f6ed7c55f3",
        category: "AI·빅데이터",
        name: "마인즈랩",
        description:
          "마인즈랩은 AI 풀스택 솔루션을 제공하는 기업으로 음성인식, 자연어처리, 컴퓨터비전 등 다양한 AI 기술을 바탕으로 기업 맞춤형 AI 솔루션을 개발하고 있습니다.",
        imgUrl: "https://placehold.co/48x48/0369a1/ffffff?text=ML",
        totalInvestment: 13000000000n,
        revenue: 7500000000n,
        employeeCount: 120,
        myStartupCount: 3300,
        compareStartupCount: 4100,
      },
      {
        id: "ae43f28d-2a51-4812-9173-34991e17a28a",
        category: "AI·빅데이터",
        name: "코어닷투데이",
        description:
          "코어닷투데이는 AI 기반 금융 데이터 분석 플랫폼을 운영합니다. 비정형 금융 데이터를 AI로 분석해 투자자와 금융기관에 인사이트를 제공하며 데이터 기반 금융 의사결정을 지원합니다.",
        imgUrl: "https://placehold.co/48x48/6d28d9/ffffff?text=CT",
        totalInvestment: 9000000000n,
        revenue: 4500000000n,
        employeeCount: 75,
        myStartupCount: 2100,
        compareStartupCount: 2800,
      },
      {
        id: "94f7aeb9-65da-4d45-871e-a676cbfe96bf",
        category: "AI·빅데이터",
        name: "루닛",
        description:
          "루닛은 의료 AI 스타트업으로 흉부 X-ray와 유방암 검진을 위한 AI 영상분석 솔루션을 개발합니다. FDA, CE 등 해외 인허가를 획득하며 글로벌 의료 AI 시장에서 주목받고 있습니다.",
        imgUrl: "https://placehold.co/48x48/b45309/ffffff?text=LN",
        totalInvestment: 30000000000n,
        revenue: 12000000000n,
        employeeCount: 230,
        myStartupCount: 6400,
        compareStartupCount: 7800,
      },
      {
        id: "02aa8624-d7c3-446c-b320-95d35c9f71fa",
        category: "AI·빅데이터",
        name: "튜닙",
        description:
          "튜닙은 LLM 기반 AI 캐릭터 대화 플랫폼을 개발하는 스타트업입니다. 기업이 자체 AI 캐릭터를 쉽게 만들고 운영할 수 있는 플랫폼을 제공하며, 엔터테인먼트·교육·커머스 분야에 적용됩니다.",
        imgUrl: "https://placehold.co/48x48/0f172a/ffffff?text=TN",
        totalInvestment: 7000000000n,
        revenue: 3000000000n,
        employeeCount: 55,
        myStartupCount: 2500,
        compareStartupCount: 3200,
      },
    ],
    skipDuplicates: true,
  });
  console.log("✅ 스타트업 50개 생성");

  // ─── 2. VIRTUAL_INVESTMENT ───────────────────────────────────────────────────
  await prisma.virtualInvestment.createMany({
    data: [
      // 코드잇 투자 (5건)
      {
        id: "dea565fc-9a5b-4199-8e9b-cf7ef39ac99a",
        startupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        investorName: "김연우",
        amount: 1000000000n,
        comment: "코드잇은 정말 훌륭한 기업입니다!",
        password: "1234",
      },
      {
        id: "2b8a1a0e-0852-4d26-bf07-77f76ce66754",
        startupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        investorName: "이유지",
        amount: 900000000n,
        comment: "코드잇의 성장 가능성은 무궁무진합니다!",
        password: "1234",
      },
      {
        id: "e83fb96d-a993-4e7b-9d81-e69cc8ee591b",
        startupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        investorName: "안다혜",
        amount: 800000000n,
        comment: "최고의 기업! 코드잇!",
        password: "1234",
      },
      {
        id: "b582e3e9-69b5-40db-9e3c-8b7218ac7978",
        startupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        investorName: "신희성",
        amount: 700000000n,
        comment: "코드잇의 진출 분야는 무궁무진합니다.",
        password: "1234",
      },
      {
        id: "68852c63-eb61-4d72-81ab-fd96467287af",
        startupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        investorName: "이용섭",
        amount: 600000000n,
        comment: "교육업계의 라이징 스타 코드잇을 신뢰합니다.",
        password: "1234",
      },
      // 토스 투자 (3건)
      {
        id: "fb683554-ea00-46e8-a8c1-97716b9bea9a",
        startupId: "f33242ed-6503-4537-aba5-b5918c045b85",
        investorName: "박지수",
        amount: 5000000000n,
        comment: "핀테크 시장의 절대 강자!",
        password: "1234",
      },
      {
        id: "afde5dca-f184-438f-b9b4-edf14dfe3019",
        startupId: "f33242ed-6503-4537-aba5-b5918c045b85",
        investorName: "최민준",
        amount: 3000000000n,
        comment: "토스의 성장세는 정말 놀랍습니다.",
        password: "1234",
      },
      {
        id: "5657b964-81ed-41b0-8f4d-0784f0fd09f9",
        startupId: "f33242ed-6503-4537-aba5-b5918c045b85",
        investorName: "한소희",
        amount: 2000000000n,
        comment: "금융 혁신을 이끄는 토스를 응원합니다.",
        password: "1234",
      },
      // 닥터나우 투자 (2건)
      {
        id: "f52b3920-433a-46cb-a6a3-57f99e5f50ab",
        startupId: "a9135f99-b541-4364-8ea8-5bb9143a3a88",
        investorName: "정현우",
        amount: 800000000n,
        comment: "헬스케어의 미래입니다!",
        password: "1234",
      },
      {
        id: "c738db79-abb1-4227-826b-bc89825fb1ae",
        startupId: "a9135f99-b541-4364-8ea8-5bb9143a3a88",
        investorName: "윤서연",
        amount: 500000000n,
        comment: "비대면 진료 시장을 선도할 기업!",
        password: "1234",
      },
      // 오늘의집 투자 (2건)
      {
        id: "cb5ebe84-6f51-4e8e-bc7e-aa89839db619",
        startupId: "65bbbf58-6f9b-44c7-bae8-ff857ce36e1f",
        investorName: "김태양",
        amount: 2000000000n,
        comment: "인테리어 시장의 혁신가!",
        password: "1234",
      },
      {
        id: "faa60433-d915-4d4f-b4ad-ac8c343ed3a4",
        startupId: "65bbbf58-6f9b-44c7-bae8-ff857ce36e1f",
        investorName: "이나은",
        amount: 1500000000n,
        comment: "콘텐츠 커머스의 최강자!",
        password: "1234",
      },
      // 뤼튼 투자 (2건)
      {
        id: "fd1ddc9e-27b7-43b4-975c-ec4cb587fbc7",
        startupId: "d2db485d-8593-4dd2-93fb-ea69447c7da2",
        investorName: "송민호",
        amount: 1000000000n,
        comment: "AI 글쓰기 시장의 선두주자!",
        password: "1234",
      },
      {
        id: "99abc446-d65c-4765-b10c-666158d1c977",
        startupId: "d2db485d-8593-4dd2-93fb-ea69447c7da2",
        investorName: "박세영",
        amount: 700000000n,
        comment: "생성형 AI 시대의 핵심 플레이어!",
        password: "1234",
      },
      // 루닛 투자 (2건)
      {
        id: "a49a4a57-e472-4a82-8c76-38f6cd63cef8",
        startupId: "94f7aeb9-65da-4d45-871e-a676cbfe96bf",
        investorName: "조은혜",
        amount: 1500000000n,
        comment: "의료 AI 글로벌 리더!",
        password: "1234",
      },
      {
        id: "61f9d66b-3b2f-4c24-a8a2-475195ca3c5d",
        startupId: "94f7aeb9-65da-4d45-871e-a676cbfe96bf",
        investorName: "강다인",
        amount: 1000000000n,
        comment: "루닛의 기술력은 세계 최고 수준!",
        password: "1234",
      },
    ],
    skipDuplicates: true,
  });
  console.log("✅ 가상 투자 16건 생성");

  // ─── 3. SELECTION_LOG (31개) ─────────────────────────────────────────────────
  await prisma.selectionLog.createMany({
    data: [
      // sta-001 코드잇 (5회 선택)
      {
        id: "c50313ea-17d1-4c36-9ce8-707da8bb180c",
        myStartupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        compareStartupId: "293a7c9e-465c-4ec0-8d25-582e48498bce",
      },
      {
        id: "9b709e50-d012-4b2e-a40b-6a0966072a76",
        myStartupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        compareStartupId: "a1290781-9d3c-433a-b62d-cbde4b0b7220",
      },
      {
        id: "546c57ec-c81d-48e4-bd27-b166e54a2179",
        myStartupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        compareStartupId: "614e7dc0-9039-4af0-a5af-b8c7d8264c50",
      },
      {
        id: "643bc9fa-ec99-4f96-b751-fa6fc40de4ed",
        myStartupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        compareStartupId: "39eca81e-23ee-48d0-b79a-25b45ab493ac",
      },
      {
        id: "055b1373-bf16-461f-a790-f727e51159a7",
        myStartupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        compareStartupId: "2cadd71b-d5f5-4cbd-988d-594ad5a55cde",
      },
      {
        id: "bf67840b-6607-42b7-a4cf-0070a5e3abbd",
        myStartupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        compareStartupId: "4fec64d9-f481-426c-963a-5a6e8c99dc69",
      },
      {
        id: "230c5ddb-732a-4b68-87fb-fb3063f9b220",
        myStartupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        compareStartupId: "b08b6965-2ccb-4d53-ac00-fa36261ca74d",
      },
      {
        id: "ced86ac0-48c9-4a8a-8fd2-b52c8f9e3604",
        myStartupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
        compareStartupId: "f33242ed-6503-4537-aba5-b5918c045b85",
      },
      // sta-011 토스 (4회 선택)
      {
        id: "35b333ab-55e8-4191-b0dd-53971992648d",
        myStartupId: "f33242ed-6503-4537-aba5-b5918c045b85",
        compareStartupId: "4b694ea2-9f37-4ed7-bc68-5f5ac0521c4a",
      },
      {
        id: "2ff1a929-36b8-49a9-b323-50c839a8f825",
        myStartupId: "f33242ed-6503-4537-aba5-b5918c045b85",
        compareStartupId: "cf28c06c-4740-4291-858b-c3770227109a",
      },
      {
        id: "822e3e7c-6b55-4b4d-a373-bf00dde78e69",
        myStartupId: "f33242ed-6503-4537-aba5-b5918c045b85",
        compareStartupId: "7a70a544-5ff0-4ff8-9c0d-e2ad3ee5f6a7",
      },
      {
        id: "e00a60e1-a66a-43c3-b6ed-7b28ab4ee3e7",
        myStartupId: "f33242ed-6503-4537-aba5-b5918c045b85",
        compareStartupId: "bca5c65b-7e20-41e2-831b-9843ed23929d",
      },
      {
        id: "7cb4d10b-5102-4ca1-a568-9ae3efb11a6f",
        myStartupId: "f33242ed-6503-4537-aba5-b5918c045b85",
        compareStartupId: "7228bcba-b1dc-483d-b436-891983f8ee2f",
      },
      {
        id: "bbff1db9-70fe-4542-8310-eb6df9295987",
        myStartupId: "f33242ed-6503-4537-aba5-b5918c045b85",
        compareStartupId: "0483cbbf-5b7e-4cca-a948-c126ee67376a",
      },
      {
        id: "695cc6a3-6fb8-4254-88c9-89cf74cd0835",
        myStartupId: "f33242ed-6503-4537-aba5-b5918c045b85",
        compareStartupId: "23ccbb62-8274-4007-b74e-0113aa34a26c",
      },
      // sta-031 오늘의집 (3회 선택)
      {
        id: "f77873b1-4d59-4f3b-86e9-4baa5a7f8154",
        myStartupId: "65bbbf58-6f9b-44c7-bae8-ff857ce36e1f",
        compareStartupId: "8bbf1be7-fb56-4587-a730-55e6e1a8efae",
      },
      {
        id: "cf413868-d2a3-4ee3-9d80-b434a592b6c4",
        myStartupId: "65bbbf58-6f9b-44c7-bae8-ff857ce36e1f",
        compareStartupId: "fba83227-89e3-46ae-807e-3ada61f76b73",
      },
      {
        id: "b7e91035-6547-4a57-b29e-f4b1d2d5ef30",
        myStartupId: "65bbbf58-6f9b-44c7-bae8-ff857ce36e1f",
        compareStartupId: "fa01cea9-19a8-4860-83a6-fb6c0ed9d4f5",
      },
      {
        id: "8683c081-0a3c-436e-a036-d9fbbe622545",
        myStartupId: "65bbbf58-6f9b-44c7-bae8-ff857ce36e1f",
        compareStartupId: "58f76b49-dc1e-4310-9752-42a1abc2e744",
      },
      {
        id: "0fe74c9e-0fc1-4935-949e-d090c5a284fc",
        myStartupId: "65bbbf58-6f9b-44c7-bae8-ff857ce36e1f",
        compareStartupId: "1ce9915e-6293-4727-8053-affcb1f84b0d",
      },
      {
        id: "0e950c07-c5b4-4652-93a2-807ac029dd02",
        myStartupId: "65bbbf58-6f9b-44c7-bae8-ff857ce36e1f",
        compareStartupId: "c284cebf-709f-46d4-b058-a438984748d3",
      },
      // sta-041 뤼튼테크놀로지스 (2회 선택)
      {
        id: "66298aee-1c4d-4669-bce7-7a068eb32790",
        myStartupId: "d2db485d-8593-4dd2-93fb-ea69447c7da2",
        compareStartupId: "62fb8da0-f2bb-43af-ac43-459e1a8e909d",
      },
      {
        id: "ff5aa74d-4a9a-4b7e-bcd9-70c1bd57476f",
        myStartupId: "d2db485d-8593-4dd2-93fb-ea69447c7da2",
        compareStartupId: "315e540a-53d9-4b52-947f-b15468b235cd",
      },
      {
        id: "b72d1e31-98df-4ea3-82b3-c005bed8ff23",
        myStartupId: "d2db485d-8593-4dd2-93fb-ea69447c7da2",
        compareStartupId: "7610818a-1deb-437d-bb33-1b801c527170",
      },
      {
        id: "a534bc89-3b24-493d-a625-2eadf11d5efb",
        myStartupId: "d2db485d-8593-4dd2-93fb-ea69447c7da2",
        compareStartupId: "94f7aeb9-65da-4d45-871e-a676cbfe96bf",
      },
      {
        id: "a1694507-1db4-4b00-b241-4e6c096c7183",
        myStartupId: "d2db485d-8593-4dd2-93fb-ea69447c7da2",
        compareStartupId: "407a83d0-41da-4d59-b08b-c166259833e2",
      },
      // sta-021 닥터나우 (1회 선택)
      {
        id: "13c4114f-892a-453d-8f1f-9830b425cac4",
        myStartupId: "a9135f99-b541-4364-8ea8-5bb9143a3a88",
        compareStartupId: "a8cffb0b-8990-4c5f-b568-7109f82a27fa",
      },
      {
        id: "00f5edc5-e1d8-4e3c-beae-68894dc586a4",
        myStartupId: "a9135f99-b541-4364-8ea8-5bb9143a3a88",
        compareStartupId: "73288b37-d2d1-476b-b5f3-aa7eec605db4",
      },
      {
        id: "6cbdb5e4-e650-4f50-81d9-836dca9e2a25",
        myStartupId: "a9135f99-b541-4364-8ea8-5bb9143a3a88",
        compareStartupId: "b1c75983-5bd0-4af5-a699-994f5899362c",
      },
      {
        id: "81209e31-f86b-4c17-8631-9acca5ebb9b1",
        myStartupId: "a9135f99-b541-4364-8ea8-5bb9143a3a88",
        compareStartupId: "ea6561d3-b8f5-4a4a-8f10-c846889d384c",
      },
      {
        id: "e35e607a-df7a-46bb-8b9d-a6ea1385e3c7",
        myStartupId: "a9135f99-b541-4364-8ea8-5bb9143a3a88",
        compareStartupId: "5a126ddf-a426-4a70-a6aa-90668056b3c3",
      },
    ],
    skipDuplicates: true,
  });
  console.log("✅ 비교 선택 31건 생성");

  console.log("🎉 Seeding 완료!");
}

main()
  .catch((e) => {
    console.error("❌ Seed 오류:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
