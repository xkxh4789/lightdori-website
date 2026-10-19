/**
 * LightDori site strings — EN / KO
 * Usage: elements with data-i18n="key" (text) or data-i18n-placeholder / data-i18n-aria
 */
window.LIGHTDORI_I18N = {
  en: {
    "meta.title": "LightDori — Lighting data, ready before the call",
    "nav.features": "Features",
    "nav.workflow": "Workflow",
    "nav.download": "Download",
    "nav.manual": "Manual",
    "nav.beta": "Beta",
    "nav.primary": "Primary",
    "download.note.hash":
      "Download URL looks like a SHA256 checksum. On the Release page, right-click the .exe file name and Copy link address.",
    "beta.mail.subject": "LightDori beta request",
    "beta.mail.body": "Beta request from: {email}\n\nOS:\nWorkflow notes:\n",
    "foot.contact": "Contact",
    "lang.label": "Language",
    // Manual copy lives in manual.html; only strings built in JS need an English entry.
    "manual.toc.collapseAll": "Collapse all",
    "manual.toc.expandAll": "Expand all",
    "manual.shot.missing": "Screenshot coming soon",
    "legal.eyebrow": "Legal",
    "foot.privacy": "Privacy Policy",
    "foot.terms": "Terms of Service",
    "foot.legal.aria": "Legal",
    "privacy.meta.title": "Privacy Policy — LightDori",
    "privacy.title": "Privacy Policy",
    "privacy.updated": "Last updated: 13 August 2026",
    "terms.meta.title": "Terms of Service — LightDori",
    "terms.title": "Terms of Service",
    "terms.updated": "Last updated: 13 August 2026",
    // The English text of privacy.body and terms.body lives in the markup of
    // privacy.html and terms.html; the Korean pack below overrides it.
  },
  ko: {
    "meta.title": "LightDori — 패치부터 문서까지, 콜타임 전에",
    "meta.desc":
      "LightDori는 패치 시트, 공연 문서, 매직시트, Vectorworks 실시간 연동을 한곳에서 처리하는 조명 데스크톱 앱입니다.",
    "nav.features": "기능",
    "nav.workflow": "워크플로",
    "nav.download": "다운로드",
    "nav.manual": "매뉴얼",
    "nav.beta": "베타",
    "nav.primary": "주요 메뉴",
    "hero.eyebrow": "Windows · macOS 데스크톱 앱",
    "hero.title1": "패치부터 문서까지,",
    "hero.title2": "콜타임 전에",
    "hero.title3": "끝내세요.",
    "hero.lede":
      "기구 목록 하나로 패치 시트와 문서, 매직시트를 만들고, 작업하는 동안 Vectorworks와 자동으로 맞춥니다.",
    "hero.download": "LightDori 다운로드",
    "hero.more": "기능 살펴보기",
    "hero.works": "연동 지원",
    "reel.aria": "LightDori 화면",
    "reel.1": "시트",
    "reel.2": "매직시트",
    "reel.3": "패치 문서",
    "reel.4": "대본·큐",
    "reel.5": "Vectorworks",
    "reel.6": "오류 검사",
    "reel.1.alt": "공연 기구가 들어 있는 시트 화면",
    "reel.2.alt": "무대 평면 위에 배치된 매직시트",
    "reel.3.alt": "패치 문서의 채널 훅업 미리보기",
    "reel.4.alt": "대본 위의 큐 마커와 옆의 큐시트",
    "reel.5.alt": "Vectorworks 동기화 패널",
    "reel.6.alt": "시트 위에 열린 오류 검사 창",
    "product.1.tab": "시트",
    "product.1.body": "모든 기구를 하나의 표에서 관리하세요. 편집, 필터, 오류 검사, 리비전 비교까지 한곳에서 끝납니다.",
    "product.2.tab": "패치 문서",
    "product.2.body": "채널·디머 훅업, 기구 스케줄, 포커스 차트를 바로 인쇄할 수 있는 PDF로 만듭니다.",
    "product.3.tab": "매직시트",
    "product.3.body": "시스템별로 칸을 나누고, 포커스 구역에 맞춰 채널을 평면 위에 배치합니다.",
    "features.eyebrow": "기능",
    "features.title": "문서 작업에 필요한 것만,<br />빠짐없이.",
    "features.lede": "엑셀, PDF 편집 파일, 매직시트 도면을 따로 관리할 필요가 없습니다. 같은 데이터를 읽는 하나의 작업 공간에서 모두 해결하세요.",
    "f.sheet.eyebrow": "시트",
    "f.sheet.title": "밤샘 작업에도 믿을 수 있는 패치",
    "f.sheet.body": "중복 채널, 주소 초과, 빠진 포지션을 입력하는 즉시 알려 줍니다. 리비전 비교로 지난 큐투큐 이후 무엇이 바뀌었는지도 바로 확인할 수 있습니다.",
    "f.docs.eyebrow": "문서",
    "f.docs.title": "바로 쓰는 문서 프리셋",
    "f.docs.body": "세 가지 인쇄 스타일과 크레딧이 자동으로 채워지는 머리글, 필요하면 지브라 행까지 지원합니다.",
    "f.magic.eyebrow": "매직시트",
    "f.magic.title": "데이터로 그리는 매직시트",
    "f.magic.body": "젤 색으로 구분한 시스템을 무대 평면 위에 그리고, 버블마다 빛이 향하는 방향을 표시합니다.",
    "f.script.eyebrow": "대본",
    "f.script.title": "대본 위에 바로 찍는 큐",
    "f.script.body": "조명·음향·팔로우 스팟 큐를 대본에 표시하면 큐시트가 자동으로 따라옵니다.",
    "f.console.eyebrow": "콘솔 연결",
    "f.console.title": "콘솔과 바로 연결",
    "f.console.body": "ETC Eos에서는 OSC로 패치와 큐 목록을 가져오고, grandMA와는 Telnet으로 패치를 주고받습니다.",
    "f.dmx.eyebrow": "DMX",
    "f.dmx.title": "유니버스 맵과 자동 패치",
    "f.dmx.body": "모든 유니버스를 한눈에 보고 충돌을 찾아내며, 선택한 기구를 원하는 시작 주소부터 한 번에 패치합니다.",
    "f.dmx.c1": "유니버스 맵",
    "f.dmx.c2": "자동 패치",
    "f.dmx.c3": "충돌 확인",
    "f.dmx.c4": "풋프린트",
    "f.mood.eyebrow": "무드보드",
    "f.mood.title": "장면별로 정리하는 레퍼런스",
    "f.mood.body": "장면마다 보드를 만들고, 사진에서 고른 색과 가장 가까운 Lee·Rosco 젤을 찾아 줍니다.",
    "f.mood.c1": "장면별 페이지",
    "f.mood.c2": "사진에서 젤 찾기",
    "f.mood.c3": "PDF 보관함 저장",
    "workflow.eyebrow": "워크플로",
    "workflow.title": "도면에서<br />부스까지.",
    "workflow.lede": "데이터는 한 번만 가져오면 됩니다. 나머지 작업은 모두 그 데이터를 그대로 씁니다.",
    "workflow.1.title": "가져오기",
    "workflow.1.body": "Vectorworks, MVR, CSV, 엑셀 파일을 불러옵니다. 기존 시트에 합쳐도 열이 흐트러지지 않습니다.",
    "workflow.2.title": "패치와 검사",
    "workflow.2.body": "시트에서 편집하고, 유니버스를 자동으로 패치하고, 오류를 모두 정리합니다.",
    "workflow.3.title": "문서 출력",
    "workflow.3.body": "훅업, 스케줄, 매직시트를 PDF 보관함으로 바로 출력합니다.",
    "workflow.4.title": "전달",
    "workflow.4.body": "콘솔로 넘기고, 리비전을 비교하고, Vectorworks와 계속 맞춰 둡니다.",
    "download.eyebrow": "다운로드",
    "download.title": "LightDori 다운로드",
    "download.lede": "극장, 투어, 샵 어디서든 쓸 수 있습니다. 인터넷 없이도 동작하고, 공연 파일은 내 컴퓨터에만 저장됩니다.",
    "download.win.meta": "설치 파일 · .exe · 64비트",
    "download.mac.meta": "디스크 이미지 · .dmg",
    "download.manual": "매뉴얼 보기",
    "download.note.hash":
      "다운로드 주소가 SHA256 체크섬처럼 보입니다. Release 페이지에서 .exe 파일 이름을 우클릭한 뒤 링크 주소 복사를 하세요.",
    "beta.eyebrow": "클로즈드 베타",
    "beta.title": "현장에서 일하는 사람들과<br />함께 만듭니다.",
    "beta.lede": "조명 디자이너, 프로덕션 일렉트리션, 렌탈샵 분들을 모시고 있습니다. 자리가 나는 대로 빌드를 보내 드릴게요.",
    "beta.email": "이메일",
    "beta.submit": "베타 신청",
    "beta.or": "메일로 문의하기:",
    "beta.mail.subject": "LightDori 베타 신청",
    "beta.mail.body": "베타 신청: {email}\n\nOS:\n워크플로 메모:\n",
    "foot.contact": "문의",
    "lang.label": "언어",
    "legal.eyebrow": "법적 고지",
    "foot.privacy": "개인정보 처리방침",
    "foot.terms": "이용약관",
    "foot.legal.aria": "법적 고지",
    "privacy.meta.title": "개인정보 처리방침 — LightDori",
    "privacy.meta.desc":
      "LightDori가 수집하는 개인정보의 항목과 이용 목적, 보관과 국외 이전, 그리고 이용자의 권리 행사 방법을 안내합니다.",
    "privacy.title": "개인정보 처리방침",
    "privacy.updated": "최종 개정일: 2026년 8월 13일",
    "privacy.body":
      "<h2>1. 수집하는 개인정보 항목</h2>" +
      "<p>LightDori는 계정과 공동 작업 기능을 제공하는 데 필요한 최소한의 정보만 수집합니다.</p>" +
      "<ul>" +
      "<li><strong>계정 정보</strong> — 이름, 이메일 주소, 비밀번호(솔트를 적용한 해시로만 저장하며 원문은 보관하지 않습니다)</li>" +
      "<li><strong>라이선스 정보</strong> — 계정에 연결된 라이선스 키와 활성화 상태</li>" +
      "<li><strong>공동 작업 데이터</strong> — 세션 이름, 참여자 정보, 이용자가 세션에 공유하기로 선택한 프로젝트 데이터와 편집 이력</li>" +
      "<li><strong>문의 내용</strong> — 이메일로 보내 주신 문의와 그에 대한 회신</li>" +
      "</ul>" +
      "<p>행태정보 수집이나 광고 식별자 이용은 하지 않습니다. 이용자의 컴퓨터에 저장된 프로젝트 파일의 내용은 수집하지 않으며, 공동 작업 세션에 직접 공유하지 않는 한 파일은 이용자의 컴퓨터에만 남습니다.</p>" +
      "<h2>2. 이용 목적</h2>" +
      "<p>계정 생성과 본인 확인, 공동 작업 세션 운영, 라이선스 유효성 확인, 문의 응대를 위해 이용합니다. 광고 목적으로 이용하거나 제3자에게 판매하지 않습니다.</p>" +
      "<h2>3. 업데이트 확인</h2>" +
      "<p>LightDori는 새 버전이 있는지 GitHub에 확인 요청을 보냅니다. 이 요청에는 앱 버전과 일반적인 웹 요청에 포함되는 네트워크 정보만 담기며, 계정 정보나 프로젝트 데이터는 포함되지 않습니다.</p>" +
      "<h2>4. 개인정보의 국외 이전</h2>" +
      "<p>계정과 세션 기록은 대한민국 밖에 서버를 둔 데이터베이스 서비스 Supabase를 이용해 보관합니다. 따라서 계정 기능을 이용하시면 개인정보가 국외로 이전됩니다.</p>" +
      "<ul>" +
      "<li><strong>이전받는 자:</strong> Supabase, Inc.</li>" +
      "<li><strong>이전되는 국가:</strong> 미국</li>" +
      "<li><strong>이전 일시 및 방법:</strong> 계정 생성, 로그인, 공동 작업 세션 이용 시 네트워크를 통해 전송</li>" +
      "<li><strong>이전 항목:</strong> 위 1항의 계정 정보, 라이선스 정보, 공동 작업 데이터</li>" +
      "<li><strong>이용 목적:</strong> LightDori의 데이터베이스 호스팅 및 인증</li>" +
      "<li><strong>보유 및 이용 기간:</strong> 계정이 유지되는 동안이며, 이후 5항에 따라 파기</li>" +
      "</ul>" +
      "<p>국외 이전을 거부하실 수 있습니다. 다만 거부하시면 계정과 공동 작업 기능은 제공해 드릴 수 없으며, 오프라인 기능은 그대로 이용하실 수 있습니다.</p>" +
      "<h2>5. 보유 기간과 파기</h2>" +
      "<p>계정 정보는 회원 탈퇴 시까지 보유하며 탈퇴 후 지체 없이 파기합니다. 공동 작업 이력은 해당 세션이 유지되는 동안 보관하고 세션 삭제 시 함께 파기합니다. 법령에서 일정 기간 보존을 요구하는 경우에는 해당 기록에 한해 법령이 정한 기간 동안 보관합니다.</p>" +
      "<h2>6. 이용자의 권리</h2>" +
      "<p>이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지를 요구하실 수 있습니다. 아래 연락처로 요청하시면 지체 없이 처리해 드립니다. 개인정보 침해에 대한 신고나 상담이 필요하시면 개인정보침해신고센터(국번 없이 118) 또는 개인정보보호위원회에 문의하실 수 있습니다.</p>" +
      "<h2>7. 안전성 확보 조치</h2>" +
      "<p>비밀번호는 솔트를 적용한 해시로 저장하고, 앱과 서버 사이의 통신은 암호화하여 전송합니다. 데이터베이스는 행 수준 보안을 적용하여 다른 이용자의 기록에 접근할 수 없도록 제한하고 있습니다.</p>" +
      "<h2>8. 만 14세 미만 아동</h2>" +
      "<p>LightDori는 전문 도구로서 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 알면서 수집하지 않습니다.</p>" +
      "<h2>9. 개인정보 보호책임자</h2>" +
      "<p>개인정보 처리에 관한 문의, 불만 처리, 피해 구제는 아래로 연락해 주시기 바랍니다.</p>" +
      "<ul>" +
      "<li><strong>개인정보 보호책임자:</strong> LightDori</li>" +
      '<li><strong>이메일:</strong> <a href="mailto:xkxh4789@gmail.com">xkxh4789@gmail.com</a></li>' +
      "</ul>" +
      "<h2>10. 처리방침의 변경</h2>" +
      "<p>이 처리방침이 이용자에게 영향을 주는 방향으로 변경되는 경우, 시행일 전에 이 페이지에 개정된 내용과 시행일을 게시합니다.</p>",
    "terms.meta.title": "이용약관 — LightDori",
    "terms.meta.desc":
      "LightDori를 내려받아 설치하고 이용하실 때 적용되는 약관입니다. 이용 허락 범위, 베타 제공 조건, 책임 범위를 안내합니다.",
    "terms.title": "이용약관",
    "terms.updated": "최종 개정일: 2026년 8월 13일",
    "terms.body":
      "<h2>1. 약관의 적용</h2>" +
      "<p>이 약관은 이용자가 LightDori 응용 프로그램과 이 웹사이트를 내려받거나 설치하거나 이용할 때 LightDori와 이용자 사이에 적용됩니다. 설치하거나 이용하시면 이 약관에 동의하신 것으로 봅니다. 동의하지 않으시면 설치하지 말아 주시기 바랍니다.</p>" +
      "<h2>2. 이용 허락의 범위</h2>" +
      "<p>이용자에게 본인의 조명 디자인 업무를 위해 LightDori를 설치하고 사용할 수 있는, 양도할 수 없는 비독점적 권리를 부여합니다. 재판매, 대여, 재실시권 부여는 허용되지 않으며 프로그램에 표시된 고지를 제거하거나 변경하실 수 없습니다.</p>" +
      "<p>LightDori에는 제3자 오픈소스 구성요소가 포함되어 있습니다. 해당 구성요소에는 각자의 라이선스가 적용되며, 그 전문은 설치 폴더에 함께 제공되는 <code>THIRD-PARTY-NOTICES.txt</code> 파일에서 확인하실 수 있습니다. 오픈소스 라이선스가 이 약관보다 넓은 권리를 부여하는 경우 해당 구성요소에 대해서는 그 라이선스가 우선합니다.</p>" +
      "<h2>3. 베타 버전</h2>" +
      "<p>현재 LightDori는 베타 버전으로 제공됩니다. 베타 버전은 무료로 제공되며 결함이 있을 수 있고, 사전 통지 없이 변경되거나 제공이 중단될 수 있습니다. 중요한 프로젝트는 반드시 별도로 백업해 두시기 바랍니다.</p>" +
      "<h2>4. 계정</h2>" +
      "<p>일부 기능은 계정이 필요합니다. 이용자는 제공한 정보의 정확성과 비밀번호의 관리에 책임이 있습니다. 타인이 계정을 사용하고 있다고 의심되면 즉시 알려 주시기 바랍니다. 이 약관이나 법령을 위반하는 데 사용되는 계정은 이용을 제한할 수 있습니다.</p>" +
      "<h2>5. 이용자의 데이터와 저작물</h2>" +
      "<p>이용자가 만든 프로젝트 파일은 이용자의 것입니다. LightDori로 작성한 디자인, 패치, 문서에 대해 어떠한 권리도 주장하지 않습니다. 공동 작업 세션을 통해 프로젝트를 공유하시는 경우, 그 세션을 운영하는 목적에 한해 해당 데이터를 저장하고 전송하는 것에 동의하시는 것으로 봅니다. 개인정보는 <a href=\"./privacy.html\">개인정보 처리방침</a>에 따라 처리합니다.</p>" +
      "<h2>6. 금지 행위</h2>" +
      "<p>법령을 위반하는 목적으로 이용하거나, 서비스나 다른 이용자를 방해하거나, 권한 없이 시스템에 접근을 시도하거나, 법령 또는 오픈소스 라이선스가 허용하는 범위를 넘어 프로그램을 역분석하는 행위는 허용되지 않습니다.</p>" +
      "<h2>7. 서비스의 제공</h2>" +
      "<p>계정과 공동 작업 기능은 당사가 통제하지 않는 외부 서비스에 의존하므로 점검이나 불가항력적 사유로 중단될 수 있습니다. 이용자의 컴퓨터에서만 동작하는 기능은 오프라인에서도 계속 이용하실 수 있습니다.</p>" +
      "<h2>8. 보증의 부인</h2>" +
      "<p>LightDori는 현재 상태 그대로 제공됩니다. 법령이 허용하는 범위에서, 프로그램에 결함이 없다거나 특정 목적에 적합하다는 보증은 하지 않습니다. 다만 이 약관의 어떤 내용도 소비자 보호에 관한 강행 법규가 이용자에게 보장하는 권리를 제한하지 않습니다.</p>" +
      "<h2>9. 책임의 제한</h2>" +
      "<p>법령이 허용하는 범위에서, 간접손해나 결과적 손해, 일실이익, 통상적인 백업으로 방지할 수 있었던 데이터 손실에 대해서는 책임을 지지 않습니다. 고의 또는 중대한 과실로 인한 책임은 제한되지 않습니다.</p>" +
      "<h2>10. 약관의 변경</h2>" +
      "<p>이 약관은 변경될 수 있습니다. 개정된 약관은 개정일과 함께 이 페이지에 게시하며, 이용자에게 불리한 변경은 시행일 전에 공지합니다. 시행일 이후에도 계속 이용하시면 변경에 동의하신 것으로 봅니다.</p>" +
      "<h2>11. 준거법과 관할</h2>" +
      "<p>이 약관에는 대한민국 법을 적용하며, 분쟁이 발생한 경우 민사소송법에 따른 관할 법원에 제기합니다.</p>" +
      "<h2>12. 문의</h2>" +
      '<p><a href="mailto:xkxh4789@gmail.com">xkxh4789@gmail.com</a></p>',
  },
};

window.LIGHTDORI_I18N_STORAGE = "lightdori.lang";

/**
 * Looks a key up in the requested pack, then English. Returns null when neither
 * defines it, which lets callers keep whatever the markup already says.
 */
function lightdoriLookup(key, lang) {
  var pack = window.LIGHTDORI_I18N[lang];
  if (pack && pack[key] != null) return pack[key];
  var en = window.LIGHTDORI_I18N.en;
  if (en && en[key] != null) return en[key];
  return null;
}

/**
 * English copy lives in the markup, so remember it before the first swap and
 * restore it whenever a pack has no entry for the key.
 */
function lightdoriBaseline(el, slot, read) {
  var store = el.__lightdoriBaseline || (el.__lightdoriBaseline = {});
  if (!(slot in store)) store[slot] = read();
  return store[slot];
}

window.lightdoriT = function lightdoriT(key, lang) {
  var val = lightdoriLookup(key, lang);
  return val == null ? key : val;
};

window.lightdoriApplyLang = function lightdoriApplyLang(lang) {
  if (!window.LIGHTDORI_I18N[lang]) lang = "en";
  document.documentElement.lang = lang === "ko" ? "ko" : "en";
  document.documentElement.setAttribute("data-lang", lang);
  try {
    localStorage.setItem(window.LIGHTDORI_I18N_STORAGE, lang);
  } catch (e) {}

  function applyText(attr, slot, read, write) {
    document.querySelectorAll("[" + attr + "]").forEach(function (el) {
      var key = el.getAttribute(attr);
      if (!key) return;
      var base = lightdoriBaseline(el, slot, function () {
        return read(el);
      });
      var val = lightdoriLookup(key, lang);
      write(el, val == null ? base : val);
    });
  }

  applyText(
    "data-i18n",
    "text",
    function (el) {
      return el.textContent;
    },
    function (el, val) {
      el.textContent = val;
    }
  );

  applyText(
    "data-i18n-html",
    "html",
    function (el) {
      return el.innerHTML;
    },
    function (el, val) {
      el.innerHTML = val;
    }
  );

  [
    ["data-i18n-placeholder", "placeholder"],
    ["data-i18n-aria", "aria-label"],
    ["data-i18n-content", "content"],
    ["data-i18n-alt", "alt"],
  ].forEach(function (pair) {
    applyText(
      pair[0],
      pair[1],
      function (el) {
        return el.getAttribute(pair[1]) || "";
      },
      function (el, val) {
        el.setAttribute(pair[1], val);
      }
    );
  });

  document.querySelectorAll(".top__lang-btn").forEach(function (btn) {
    var active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  if (typeof window.lightdoriRefreshDownloadNotes === "function") {
    window.lightdoriRefreshDownloadNotes(lang);
  }

  document.dispatchEvent(
    new CustomEvent("lightdori:langchange", { detail: { lang: lang } })
  );
};

window.lightdoriInitLang = function lightdoriInitLang() {
  var lang = "en";
  try {
    lang = localStorage.getItem(window.LIGHTDORI_I18N_STORAGE) || lang;
  } catch (e) {}
  // ?lang=ko in a shared link wins over the stored choice
  var fromUrl = /[?&]lang=(en|ko)(?![a-z])/.exec(location.search);
  if (fromUrl) lang = fromUrl[1];
  if (!window.LIGHTDORI_I18N[lang]) lang = "en";
  window.lightdoriApplyLang(lang);

  document.querySelectorAll(".top__lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.lightdoriApplyLang(btn.getAttribute("data-lang") || "en");
    });
  });
};
