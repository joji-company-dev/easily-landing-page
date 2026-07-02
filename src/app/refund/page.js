import Link from "next/link";

// ──────────────────────────────────────────────────────────
// 환불 정책 (초안) — 게시 전 법무 검토 권장
// SuperShorts 환불정책을 이즐리(easily)에 맞게 적응.
// 업그레이드 부분환불 정산식은 easily 가격/연간가 확정 후 구체화 필요(현재 원칙만 기재).
// ──────────────────────────────────────────────────────────

export const metadata = {
  title: "환불 정책 | 이즐리",
};

function Article({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <h1 className="text-3xl font-bold">환불 정책</h1>
      <p className="mt-2 text-sm text-muted-foreground">시행일: 2026년 6월 8일</p>
      <p className="mt-1 text-sm text-muted-foreground">
        본 정책은{" "}
        <Link href="/terms" className="font-medium text-primary underline underline-offset-2">
          이용약관
        </Link>
        의 일부를 구성합니다.
      </p>

      <Article title="1. 적용 범위">
        <p>본 환불 정책은 월간 구독 플랜(라이트 / 프로)에 적용됩니다.</p>
        <p>무료 플랜 및 프로모션으로 제공된 혜택/크레딧은 환불 대상이 아닙니다.</p>
      </Article>

      <Article title="2. 환불(전액) 조건">
        <p>아래 두 가지 조건을 모두 충족하는 경우에 한해 전액 환불합니다.</p>
        <p className="font-medium text-foreground">① 구독 결제일로부터 7일 이내</p>
        <p className="font-medium text-foreground">
          ② 서비스 미사용 — 기획안 생성, 유튜브 링크 분석을 한 번도 사용하지 않은 경우
        </p>
        <p>위 두 조건 중 하나라도 충족하지 않을 경우 전액 환불이 불가합니다.</p>
      </Article>

      <Article title="3. 부분 환불 (플랜 업그레이드)">
        <p>유료 플랜(월간 구독) 이용 중 상위 플랜으로 업그레이드하는 경우, 기존 플랜에 대한 미사용분을 정산한 후 신규 플랜이 결제됩니다.</p>
        <p>부가세(10%)를 제외한 공급가를 기준으로, 기존 플랜의 사용량(기획안 생성 등) 비율만큼 차감하고 미사용분을 정산합니다.</p>
        <p className="text-xs">※ 구체적인 정산 방식·비율은 결제 화면 및 고객센터 안내에 따릅니다.</p>
      </Article>

      <Article title="4. 환불 불가 사유">
        <p>1. 결제일로부터 7일이 경과한 경우</p>
        <p>2. 기획안 생성, 유튜브 링크 분석 중 하나라도 사용한 경우</p>
        <p>3. 프로모션 또는 할인 적용 결제로서 별도 환불 조건이 명시된 경우</p>
      </Article>

      <Article title="5. 시스템 오류 보상">
        <p>1. 시스템 오류로 기획안 생성·유튜브 링크 분석이 완료되기 전에 실패한 경우, 고객센터로 문의하시면 사용 횟수를 복구해 드립니다.</p>
        <p>2. 사용자의 취소, 브라우저 종료, 네트워크 단절 등 이용 환경상의 중단은 자동 복구 또는 환불 대상에서 제외될 수 있으며, 필요 시 개별 검토로 처리됩니다.</p>
      </Article>

      <Article title="6. 환불 처리">
        <p>신청: 서비스 내 내 정보 &gt; 구독 &gt; 환불하기 또는 contact@jojicompany.com</p>
        <p>처리 기간: 영업일 기준 7일 이내</p>
        <p>환불 수단: 원 결제 수단으로 환불 (결제 수단에 따라 실제 환불까지 추가 기간이 소요될 수 있습니다)</p>
      </Article>

      <Article title="7. 문의">
        <p>환불 관련 문의: contact@jojicompany.com</p>
      </Article>

      <Article title="회사 정보">
        <p className="text-xs">
          회사명: 조지컴퍼니 | 대표자: 조영진 | 사업자등록번호: 108-39-69341 | 주소: 경기도
          안양시 동안구 시민대로 327번길 11-41 3F 3900호 | 이메일: contact@jojicompany.com
        </p>
      </Article>
    </div>
  );
}
