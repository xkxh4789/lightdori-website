/**
 * LightDori site strings — EN / KO
 * Usage: elements with data-i18n="key" (text) or data-i18n-placeholder / data-i18n-aria
 */
window.LIGHTDORI_I18N = {
  en: {
    "meta.title": "LightDori — Patch, document, and sync lighting data",
    "nav.work": "Work",
    "nav.download": "Download",
    "nav.manual": "Manual",
    "nav.beta": "Beta",
    "nav.primary": "Primary",
    "hero.title": "Lighting data, ready before the call.",
    "hero.lede":
      "Patch lists, print-ready PDFs, and Vectorworks sync in one desktop app.",
    "hero.download": "Download",
    "hero.beta": "Request beta",
    "work.eyebrow": "Features",
    "work.title": "Three jobs. One workspace.",
    "work.1.title": "Patch documents",
    "work.1.body":
      "Build instrument schedules and export clean PDFs for the shop and the booth.",
    "work.2.title": "Vectorworks sync",
    "work.2.body":
      "Exchange fixture data through a shared file so LD and Vectorworks stay aligned.",
    "work.3.title": "Sheet workspace",
    "work.3.body":
      "Edit, sort, and export fixture sheets without jumping between spreadsheets and consoles.",
    "work.prev": "Previous feature",
    "work.next": "Next feature",
    "work.1.img.alt": "Patch sheet preview inside LightDori",
    "work.2.img.alt": "Workflow module visual",
    "work.3.img.alt": "Sheet module visual",
    "download.eyebrow": "Download",
    "download.title": "Download for Windows and macOS.",
    "download.lede":
      "Desktop builds for theatre, tour, and the shop floor — ready to use offline.",
    "download.win.meta": ".exe installer",
    "download.mac.meta": ".dmg / .app",
    "download.note.none": "",
    "download.note.one": "",
    "download.note.both": "",
    "download.note.hash":
      "Download URL looks like a SHA256 checksum. On the Release page, right-click the .exe file name and Copy link address.",
    "beta.eyebrow": "Closed beta",
    "beta.title": "Join the closed beta.",
    "beta.lede":
      "We're inviting a small group of lighting designers, production electricians, and rental shops. Tell us your workflow and OS — we'll send a build when a seat opens.",
    "beta.email": "Email",
    "beta.submit": "Request access",
    "beta.or": "Or email us directly:",
    "foot.rights": "LightDori. All rights reserved.",
    "beta.mail.subject": "LightDori beta request",
    "beta.mail.body": "Beta request from: {email}\n\nOS:\nWorkflow notes:\n",
    "lang.label": "Language",
    "manual.meta.title": "Manual — LightDori",
    "manual.meta.desc":
      "LightDori user manual: getting started, sheet workspace, patch documents, Vectorworks sync, console OSC, and export workflows.",
    "manual.toc.aria": "Manual contents",
    "manual.toc.eyebrow": "Contents",
    "manual.toc.overview": "Overview",
    "manual.toc.start": "Getting started",
    "manual.toc.sheet": "Sheet workspace",
    "manual.toc.patch": "Patch documents",
    "manual.toc.vw": "Vectorworks sync",
    "manual.toc.export": "Import & export",
    "manual.toc.console": "Console connection",
    "manual.toc.tips": "Tips & troubleshooting",
    "manual.hero.eyebrow": "User manual",
    "manual.hero.title": "LightDori guide",
    "manual.hero.lede":
      "A practical walkthrough for patch lists, print-ready PDFs, and Vectorworks exchange. Written for lighting designers, production electricians, and shop teams.",
    "manual.overview.title": "1. Overview",
    "manual.overview.p1":
      "LightDori is a desktop workspace for lighting production data. Use it to build and edit fixture sheets, export patch documents, and keep Vectorworks data in sync without living inside spreadsheets.",
    "manual.overview.li1": "<strong>Windows</strong> and <strong>macOS</strong> desktop builds",
    "manual.overview.li2": "Offline-friendly for theatre, tour, and shop floors",
    "manual.overview.li3": "Core loop: Sheet → Patch PDF → Vectorworks / console handoff",
    "manual.start.title": "2. Getting started",
    "manual.start.s1": "Launch LightDori and sign in from the hub when prompted.",
    "manual.start.s2": "Choose <strong>New File</strong> or open an existing project.",
    "manual.start.s3":
      "Pick a fixture start mode: blank sheet, import existing data, or sample data.",
    "manual.start.s4":
      "Open the Sheet workspace to begin editing channels, addresses, and types.",
    "manual.start.p1":
      "Theme and app preferences can be previewed in Settings. Changes apply permanently only after you save settings.",
    "manual.sheet.title": "3. Sheet workspace",
    "manual.sheet.p1":
      "The Sheet is the main fixture table. Edit mode lets you add, delete, duplicate, and rearrange rows or columns.",
    "manual.sheet.li1": "<strong>Edit</strong> — unlock cell editing and row tools",
    "manual.sheet.li2": "<strong>Filter / Sort</strong> — focus positions or reorder before print",
    "manual.sheet.li3":
      "<strong>Auto Universe</strong> — help assign DMX universes from addresses",
    "manual.sheet.li4":
      "<strong>Export</strong> — CSV, XML, MVR, ASCII, and PDF document paths",
    "manual.sheet.p2":
      "Common fields include Channel, Device Type, Universe / Address, Position, Color, and UID. Keep UIDs stable when syncing with Vectorworks.",
    "manual.patch.title": "4. Patch documents",
    "manual.patch.p1":
      "Patch Document builds a print-ready PDF (instrument schedule / patch list) from the current sheet selection.",
    "manual.patch.s1":
      "Choose the columns to include and set title, notes, and date styles.",
    "manual.patch.s2": "Preview the layout, then export PDF.",
    "manual.patch.s3":
      "Exported PDFs can be collected in the PDF Store for later merge.",
    "manual.patch.p2":
      "Use this for shop handouts, booth patch tables, and production meetings. Title fonts are chosen for consistent Windows / macOS output.",
    "manual.vw.title": "5. Vectorworks sync",
    "manual.vw.p1":
      "LightDori exchanges fixture data through a shared JSON file so LD and VW stay aligned.",
    "manual.vw.li1":
      "<strong>Sync Now</strong> — write LightDori devices to the exchange file",
    "manual.vw.li2":
      "<strong>Import</strong> — Merge updates matching fixtures; Overwrite replaces the sheet",
    "manual.vw.li3":
      "<strong>Live sync</strong> — poll for VW exports and apply when available",
    "manual.vw.p2":
      "If the exchange file is missing, export from Vectorworks first. Close the sync panel when prompted so pending keystroke nudges can apply on Windows setups that use them.",
    "manual.export.title": "6. Import & export",
    "manual.export.p1": "Typical formats supported in the Sheet / file workflows:",
    "manual.export.li1": "CSV / Excel / JSON / XML",
    "manual.export.li2": "MVR fixture packages",
    "manual.export.li3": "ASCII (ASC) patch and cue imports",
    "manual.export.li4": "Patch Document PDF and Magic Sheet PDF exports",
    "manual.export.p2":
      "After import, verify Channel / Address collisions and Position filters before sending anything to a console.",
    "manual.console.title": "7. Console connection",
    "manual.console.p1":
      "LightDori can connect to lighting consoles. Use the Eos OSC ports or MA Telnet login below.",
    "manual.console.eos.title": "Eos connection",
    "manual.console.eos.s1":
      "Open <strong>Setup → System → Show Control → OSC</strong>.",
    "manual.console.eos.s2":
      "Enable <strong>OSC RX</strong> and <strong>OSC TX</strong>.",
    "manual.console.eos.s3":
      "Set <strong>OSC UDP RX Port</strong> to <strong>8000</strong>.",
    "manual.console.eos.s4":
      "Set <strong>OSC UDP TX Port</strong> to <strong>8001</strong>.",
    "manual.console.eos.img.alt":
      "ETC Eos OSC settings with RX/TX enabled, RX port 8000, TX port 8001",
    "manual.console.eos.caption":
      "Eos OSC RX / TX enabled — UDP RX 8000, UDP TX 8001.",
    "manual.console.ma.title": "MA connection",
    "manual.console.ma.s1":
      "Open <strong>Setup → Console → Global Settings</strong>.",
    "manual.console.ma.s2":
      "Set <strong>Telnet</strong> to <strong>Login Enabled</strong>.",
    "manual.console.ma.img.alt":
      "grandMA Setup Console Global Settings with Telnet Login Enabled",
    "manual.console.ma.caption":
      "MA Global Settings — Telnet set to Login Enabled.",
    "manual.tips.title": "8. Tips & troubleshooting",
    "manual.tips.li1":
      "After UI changes, fully quit and relaunch so the WebUI rebuild is loaded.",
    "manual.tips.li2":
      "macOS builds need a Mac venv and Node for packaging — do not copy a Windows venv.",
    "manual.tips.li3":
      "If PDF titles look different across machines, use the latest build with shared sans fonts.",
    "manual.tips.li4":
      "Display scaling changes (125% / 150%) may need an app restart.",
    "manual.tips.li5":
      'Questions: <a href="mailto:hello@lightdori.app">hello@lightdori.app</a>',
  },
  ko: {
    "meta.title": "LightDori — 패치·문서·조명 데이터 동기화",
    "nav.work": "기능",
    "nav.download": "다운로드",
    "nav.manual": "매뉴얼",
    "nav.beta": "베타",
    "nav.primary": "주요 메뉴",
    "hero.title": "조명 데이터, 콜 전에 끝내 두세요.",
    "hero.lede":
      "패치 리스트, 인쇄용 PDF, Vectorworks 연동을 하나의 데스크톱 앱에서.",
    "hero.download": "다운로드",
    "hero.beta": "베타 신청",
    "work.eyebrow": "기능",
    "work.title": "흩어져 있던 세 가지 일을 한곳에서.",
    "work.1.title": "패치 문서",
    "work.1.body":
      "기구 스케줄을 정리하고, 샵과 부스에서 바로 쓰는 인쇄용 PDF를 만듭니다.",
    "work.2.title": "Vectorworks 동기화",
    "work.2.body":
      "공유 파일로 기구 데이터를 주고받아 LD와 Vectorworks를 맞춰 둡니다.",
    "work.3.title": "시트 워크스페이스",
    "work.3.body":
      "엑셀과 콘솔을 오가지 않고 시트를 편집·정렬한 뒤 내보냅니다.",
    "work.prev": "이전 기능",
    "work.next": "다음 기능",
    "work.1.img.alt": "LightDori 패치 시트 미리보기",
    "work.2.img.alt": "워크플로 모듈 화면",
    "work.3.img.alt": "시트 모듈 화면",
    "download.eyebrow": "다운로드",
    "download.title": "Windows · macOS 다운로드",
    "download.lede":
      "극장, 투어, 샵에서도 오프라인으로 쓸 수 있는 데스크톱 빌드입니다.",
    "download.win.meta": ".exe 설치 파일",
    "download.mac.meta": ".dmg / .app",
    "download.note.none": "",
    "download.note.one": "",
    "download.note.both": "",
    "download.note.hash":
      "다운로드 주소가 SHA256 체크섬처럼 보입니다. Release 페이지에서 .exe 파일 이름을 우클릭한 뒤 링크 주소 복사를 하세요.",
    "beta.eyebrow": "클로즈드 베타",
    "beta.title": "클로즈드 베타에 참여하세요.",
    "beta.lede":
      "조명 디자이너, 프로덕션 일렉트리션, 렌탈샵을 소규모로 모집합니다. 워크플로와 OS를 알려주시면, 자리가 날 때 빌드를 보내 드립니다.",
    "beta.email": "이메일",
    "beta.submit": "신청하기",
    "beta.or": "또는 메일로 직접 문의:",
    "foot.rights": "LightDori. All rights reserved.",
    "beta.mail.subject": "LightDori 베타 신청",
    "beta.mail.body": "베타 신청: {email}\n\nOS:\n워크플로 메모:\n",
    "lang.label": "언어",
    "manual.meta.title": "매뉴얼 — LightDori",
    "manual.meta.desc":
      "LightDori 사용자 매뉴얼: 시작하기, 시트 워크스페이스, 패치 문서, Vectorworks 동기화, 콘솔 OSC 연동, 가져오기·내보내기.",
    "manual.toc.aria": "매뉴얼 목차",
    "manual.toc.eyebrow": "목차",
    "manual.toc.overview": "개요",
    "manual.toc.start": "시작하기",
    "manual.toc.sheet": "시트 워크스페이스",
    "manual.toc.patch": "패치 문서",
    "manual.toc.vw": "Vectorworks 동기화",
    "manual.toc.export": "가져오기·내보내기",
    "manual.toc.console": "콘솔 연동",
    "manual.toc.tips": "팁·문제 해결",
    "manual.hero.eyebrow": "사용자 매뉴얼",
    "manual.hero.title": "LightDori 가이드",
    "manual.hero.lede":
      "패치 리스트, 인쇄용 PDF, Vectorworks 교환을 위한 실무 안내입니다. 조명 디자이너, 프로덕션 일렉트리션, 샵 팀을 위해 작성했습니다.",
    "manual.overview.title": "1. 개요",
    "manual.overview.p1":
      "LightDori는 조명 프로덕션 데이터를 위한 데스크톱 워크스페이스입니다. 기구 시트를 만들고 편집하고, 패치 문서를 내보내며, 스프레드시트에 묶이지 않고 Vectorworks 데이터를 맞춰 둘 수 있습니다.",
    "manual.overview.li1": "<strong>Windows</strong>와 <strong>macOS</strong> 데스크톱 빌드",
    "manual.overview.li2": "극장·투어·샵에서 쓰기 좋은 오프라인 환경",
    "manual.overview.li3": "핵심 흐름: 시트 → 패치 PDF → Vectorworks / 콘솔 인수인계",
    "manual.start.title": "2. 시작하기",
    "manual.start.s1": "LightDori를 실행하고, 안내가 뜨면 허브에서 로그인합니다.",
    "manual.start.s2": "<strong>New File</strong>을 선택하거나 기존 프로젝트를 엽니다.",
    "manual.start.s3":
      "기구 시작 모드를 고릅니다: 빈 시트, 기존 데이터 가져오기, 또는 샘플 데이터.",
    "manual.start.s4":
      "시트 워크스페이스를 열어 채널·주소·타입 편집을 시작합니다.",
    "manual.start.p1":
      "테마와 앱 환경설정은 Settings에서 미리볼 수 있습니다. 저장한 뒤에만 영구 적용됩니다.",
    "manual.sheet.title": "3. 시트 워크스페이스",
    "manual.sheet.p1":
      "시트는 메인 기구 표입니다. 편집 모드에서 행·열을 추가·삭제·복제·재배치할 수 있습니다.",
    "manual.sheet.li1": "<strong>Edit</strong> — 셀 편집과 행 도구 잠금 해제",
    "manual.sheet.li2": "<strong>Filter / Sort</strong> — 포지션에 집중하거나 인쇄 전 정렬",
    "manual.sheet.li3":
      "<strong>Auto Universe</strong> — 주소로 DMX 유니버스 할당을 돕습니다",
    "manual.sheet.li4":
      "<strong>Export</strong> — CSV, XML, MVR, ASCII, PDF 문서 경로",
    "manual.sheet.p2":
      "자주 쓰는 필드는 Channel, Device Type, Universe / Address, Position, Color, UID입니다. Vectorworks와 동기화할 때는 UID를 안정적으로 유지하세요.",
    "manual.patch.title": "4. 패치 문서",
    "manual.patch.p1":
      "Patch Document는 현재 시트 선택으로 인쇄용 PDF(기구 스케줄 / 패치 리스트)를 만듭니다.",
    "manual.patch.s1":
      "포함할 열을 고르고 제목·메모·날짜 스타일을 설정합니다.",
    "manual.patch.s2": "레이아웃을 미리본 뒤 PDF로 내보냅니다.",
    "manual.patch.s3":
      "내보낸 PDF는 PDF Store에 모아 두었다가 나중에 병합할 수 있습니다.",
    "manual.patch.p2":
      "샵 핸드아웃, 부스 패치 표, 프로덕션 미팅에 사용하세요. 제목 글꼴은 Windows / macOS에서 비슷하게 보이도록 맞춰 두었습니다.",
    "manual.vw.title": "5. Vectorworks 동기화",
    "manual.vw.p1":
      "LightDori는 공유 JSON 파일로 기구 데이터를 주고받아 LD와 VW를 맞춰 둡니다.",
    "manual.vw.li1":
      "<strong>Sync Now</strong> — LightDori 디바이스를 교환 파일에 씁니다",
    "manual.vw.li2":
      "<strong>Import</strong> — Merge는 일치하는 기구를 갱신하고, Overwrite는 시트를 교체합니다",
    "manual.vw.li3":
      "<strong>Live sync</strong> — VW 보내기를 감시하다가 있으면 적용합니다",
    "manual.vw.p2":
      "교환 파일이 없으면 먼저 Vectorworks에서 내보냅니다. 안내가 뜨면 동기화 패널을 닫아, Windows에서 사용하는 키 입력 보정이 적용되게 하세요.",
    "manual.export.title": "6. 가져오기·내보내기",
    "manual.export.p1": "시트 / 파일 워크플로에서 자주 쓰는 형식:",
    "manual.export.li1": "CSV / Excel / JSON / XML",
    "manual.export.li2": "MVR 기구 패키지",
    "manual.export.li3": "ASCII (ASC) 패치·큐 가져오기",
    "manual.export.li4": "Patch Document PDF 및 Magic Sheet PDF 내보내기",
    "manual.export.p2":
      "가져온 뒤에는 콘솔로 보내기 전에 Channel / Address 충돌과 Position 필터를 확인하세요.",
    "manual.console.title": "7. 콘솔 연동",
    "manual.console.p1":
      "LightDori는 조명 콘솔과 연결할 수 있습니다. 아래 Eos OSC 포트 또는 MA Telnet 설정을 사용하세요.",
    "manual.console.eos.title": "Eos 연결",
    "manual.console.eos.s1":
      "<strong>Setup → System → Show Control → OSC</strong>로 이동합니다.",
    "manual.console.eos.s2":
      "<strong>OSC RX</strong>와 <strong>OSC TX</strong>를 활성화합니다.",
    "manual.console.eos.s3":
      "<strong>OSC UDP RX Port</strong>를 <strong>8000</strong>으로 설정합니다.",
    "manual.console.eos.s4":
      "<strong>OSC UDP TX Port</strong>를 <strong>8001</strong>로 설정합니다.",
    "manual.console.eos.img.alt":
      "ETC Eos OSC 설정: RX/TX 활성화, RX 포트 8000, TX 포트 8001",
    "manual.console.eos.caption":
      "Eos OSC RX / TX 활성화 — UDP RX 8000, UDP TX 8001.",
    "manual.console.ma.title": "MA 연결",
    "manual.console.ma.s1":
      "<strong>Setup → Console → Global Settings</strong>로 이동합니다.",
    "manual.console.ma.s2":
      "<strong>Telnet</strong>을 <strong>Login Enabled</strong>로 설정합니다.",
    "manual.console.ma.img.alt":
      "grandMA Setup Console Global Settings에서 Telnet Login Enabled",
    "manual.console.ma.caption":
      "MA Global Settings — Telnet을 Login Enabled로 설정.",
    "manual.tips.title": "8. 팁·문제 해결",
    "manual.tips.li1":
      "UI를 바꾼 뒤에는 완전히 종료했다가 다시 실행해 WebUI 빌드가 로드되게 하세요.",
    "manual.tips.li2":
      "macOS 빌드는 Mac venv와 Node가 필요합니다 — Windows venv를 그대로 복사하지 마세요.",
    "manual.tips.li3":
      "기기마다 PDF 제목 글꼴이 다르면, 공통 sans 글꼴이 들어간 최신 빌드를 쓰세요.",
    "manual.tips.li4":
      "디스플레이 배율(125% / 150%)을 바꾸면 앱을 다시 실행해야 할 수 있습니다.",
    "manual.tips.li5":
      '문의: <a href="mailto:hello@lightdori.app">hello@lightdori.app</a>',
  },
};

window.LIGHTDORI_I18N_STORAGE = "lightdori.lang";

window.lightdoriT = function lightdoriT(key, lang) {
  var pack = window.LIGHTDORI_I18N[lang] || window.LIGHTDORI_I18N.en;
  return pack[key] != null ? pack[key] : (window.LIGHTDORI_I18N.en[key] || key);
};

window.lightdoriApplyLang = function lightdoriApplyLang(lang) {
  if (!window.LIGHTDORI_I18N[lang]) lang = "en";
  document.documentElement.lang = lang === "ko" ? "ko" : "en";
  document.documentElement.setAttribute("data-lang", lang);
  try {
    localStorage.setItem(window.LIGHTDORI_I18N_STORAGE, lang);
  } catch (e) {}

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (!key) return;
    var val = window.lightdoriT(key, lang);
    if (el.tagName === "TITLE") {
      el.textContent = val;
      return;
    }
    el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-html");
    if (!key) return;
    el.innerHTML = window.lightdoriT(key, lang);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    el.setAttribute("placeholder", window.lightdoriT(key, lang));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-aria");
    if (!key) return;
    el.setAttribute("aria-label", window.lightdoriT(key, lang));
  });

  document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-content");
    if (!key) return;
    el.setAttribute("content", window.lightdoriT(key, lang));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-alt");
    if (!key) return;
    el.setAttribute("alt", window.lightdoriT(key, lang));
  });

  document.querySelectorAll(".top__lang-btn").forEach(function (btn) {
    var active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  if (typeof window.lightdoriRefreshDownloadNotes === "function") {
    window.lightdoriRefreshDownloadNotes(lang);
  }
};

window.lightdoriInitLang = function lightdoriInitLang() {
  var lang = "en";
  try {
    lang = localStorage.getItem(window.LIGHTDORI_I18N_STORAGE) || lang;
  } catch (e) {}
  if (!window.LIGHTDORI_I18N[lang]) lang = "en";
  window.lightdoriApplyLang(lang);

  document.querySelectorAll(".top__lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.lightdoriApplyLang(btn.getAttribute("data-lang") || "en");
    });
  });
};
