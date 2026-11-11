/**
 * LightDori site strings — EN / KO
 * Usage: elements with data-i18n="key" (text) or data-i18n-placeholder / data-i18n-aria / data-i18n-src
 */
window.LIGHTDORI_I18N = {
  en: {
    "meta.title": "LightDori — From patch to blocking, ready before the call",
    "nav.features": "Features",
    "nav.workflow": "Workflow",
    "nav.download": "Download",
    "nav.manual": "Manual",
    "nav.beta": "Beta",
    "nav.primary": "Primary",
    "download.note.hash":
      "Download URL looks like a SHA256 checksum. On the Release page, right-click the .exe file name and Copy link address.",
    "download.soon": "Coming soon",
    "beta.mail.subject": "LightDori beta request",
    "beta.err.name": "Add your name.",
    "beta.err.email": "Check your email address.",
    "beta.err.role": "Choose what you do.",
    "beta.err.computer": "Choose your computer.",
    "beta.err.consent": "Tick the privacy box to send.",
    "beta.sending": "Sending.",
    "beta.sent": "Got it. We'll email you a build when a seat opens up.",
    "beta.failed": "That didn't go through. Try again in a moment, or email xkxh4789@gmail.com.",
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
    "privacy.updated": "Last updated: 12 November 2026",
    "terms.meta.title": "Terms of Service — LightDori",
    "terms.title": "Terms of Service",
    "terms.updated": "Last updated: 13 August 2026",
    // The English text of privacy.body and terms.body lives in the markup of
    // privacy.html and terms.html; the Korean pack below overrides it.
  },
  ko: {
    "meta.title": "LightDori, 패치부터 동선까지 콜타임 전에",
    "meta.desc":
      "LightDori는 패치 시트, 공연 문서, 매직시트, 젤 컬러, 대본 큐와 동선표를 한곳에서 만들고 Vectorworks와 실시간으로 맞추는 조명 데스크톱 앱이에요.",
    "nav.features": "기능",
    "nav.workflow": "워크플로",
    "nav.download": "다운로드",
    "nav.manual": "매뉴얼",
    "nav.beta": "베타",
    "nav.primary": "주요 메뉴",
    "hero.eyebrow": "Windows와 macOS용 데스크톱 앱",
    "hero.title1": "패치부터 동선까지,",
    "hero.title2": "콜타임 전에",
    "hero.title3": "끝내요.",
    "hero.lede":
      "기구 목록 하나로 시트와 문서, 매직시트, 대본 큐와 동선표까지 만들어요. 작업하는 동안 Vectorworks와도 맞춰져요.",
    "hero.download": "LightDori 다운로드",
    "hero.more": "기능 살펴보기",
    "hero.works": "연동 지원",
    "reel.aria": "LightDori 화면",
    "reel.1": "시트",
    "reel.2": "동선표",
    "reel.3": "컬러",
    "reel.4": "매직시트",
    "reel.5": "패치 문서",
    "reel.1.alt": "내보낼 행을 모두 체크한 시트 화면",
    "reel.2.alt": "대본 옆 무대 평면에 그린 동선",
    "reel.3.alt": "작은 3D 무대에 젤 빛을 비추는 컬러 라이브러리",
    "reel.4.alt": "인쇄 준비가 된 매직시트",
    "reel.5.alt": "패치 문서의 채널 훅업 미리보기",
    "shot.sheet": "./assets/shots/ko/sheet.webp",
    "shot.blocking": "./assets/shots/ko/blocking.webp",
    "shot.blocking_grid": "./assets/shots/ko/blocking_grid.webp",
    "shot.blocking_report": "./assets/shots/ko/blocking_report.webp",
    "shot.color": "./assets/shots/ko/color.webp",
    "shot.magic": "./assets/shots/ko/magic.webp",
    "shot.patchdoc": "./assets/shots/ko/patchdoc.webp",
    "shot.patchdoc.label": "패치 문서",
    "shot.blocking.label": "대본 / 큐시트",
    "shot.color.label": "색상",
    "shot.magic.label": "매직시트",
    "ch.sheet.eyebrow": "시트와 내보내기",
    "ch.sheet.title": "체크한 행이 그대로 인쇄용 문서가 돼요",
    "ch.sheet.lede": "시트에서 기구를 고르고 내보내기를 누르면 채널 훅업, 디머 훅업, 어드레스 훅업, 기구 일람표, 포커스 차트가 바로 나와요.",
    "ch.sheet.f1.t": "크레딧이 채워지는 머리글",
    "ch.sheet.f1.b": "연출, 디자이너, 공연장이 모든 쪽 머리에 들어가요.",
    "ch.sheet.f2.t": "세 가지 표 스타일과 용지",
    "ch.sheet.f2.b": "Classic, Grid, Compact 중에서 고르고 용지 크기도 정해요.",
    "ch.sheet.f3.t": "PDF, 데이터, XML, MVR",
    "ch.sheet.f3.b": "만든 PDF는 모두 보관함에 모여요.",
    "ch.sheet.alt": "채널 훅업 미리보기",
    "ch.blocking.eyebrow": "동선표",
    "ch.blocking.title": "대본의 큐마다 배우가 어디로 가는지",
    "ch.blocking.lede": "대본에 찍은 큐가 그대로 동선의 단계가 돼요. 배우와 세트를 무대 평면에 놓고 큐마다 옮기면 이동이 화살표로 남아요.",
    "ch.blocking.f1.t": "비트 나누기와 팔로우 스팟",
    "ch.blocking.f1.b": "한 큐 안의 여러 움직임을 나누고, 스팟마다 누구를 잡는지 정해요.",
    "ch.blocking.f2.t": "한눈에 보기, 등퇴장표, 동선 리포트",
    "ch.blocking.f2.b": "가장 붐비는 구역과 배우마다 걸은 거리까지 보여 줘요.",
    "ch.blocking.f3.t": "A4 동선표와 휴대폰용 이미지",
    "ch.blocking.f3.b": "인쇄용 동선표로 뽑거나, 단톡방에 올릴 긴 이미지 한 장으로 내보내요.",
    "ch.blocking.alt": "동선 평면에서 로미오와 줄리엣을 비추는 두 대의 팔로우 스팟",
    "ch.blocking.v1": "한눈에 보기",
    "ch.blocking.v2": "동선 리포트",
    "ch.color.eyebrow": "컬러",
    "ch.color.title": "젤을 고르기 전에 빛으로 먼저 봐요",
    "ch.color.lede": "LEE와 Rosco 필터 526개를 작은 3D 무대에 비춰 봐요. 디머를 내리면 텅스텐 램프처럼 따뜻해져요.",
    "ch.color.f1.t": "투과율, 색온도 변화, 스펙트럼",
    "ch.color.f1.b": "제조사가 공개한 자료를 그대로 보여 줘요.",
    "ch.color.f2.t": "다른 브랜드에서 가장 가까운 젤",
    "ch.color.f2.b": "LEE에서 Rosco로, Rosco에서 LEE로 바로 찾아요.",
    "ch.color.f3.t": "시트에서도 같은 라이브러리",
    "ch.color.f3.b": "시트의 컬러 칸을 열면 이 라이브러리에서 골라요.",
    "ch.color.alt": "3D 무대 위의 L079 Just Blue와 그 스펙트럼",
    "ch.magic.eyebrow": "매직시트",
    "ch.magic.title": "시트를 고치면 매직시트도 따라와요",
    "ch.magic.lede": "용도나 포지션으로 묶은 칸에 채널이 무대 모양대로 놓여요. 버블은 젤 색으로 칠해지고 빛이 가는 방향을 가리켜요.",
    "ch.magic.f1.t": "배치를 고르고 손으로 다듬기",
    "ch.magic.f1.b": "채널을 끌어 옮기고 둥근 핸들로 방향을 돌려요.",
    "ch.magic.f2.t": "평면도와 젤 범례",
    "ch.magic.f2.b": "무대 평면이 칸 뒤에 흐리게 깔려요.",
    "ch.magic.f3.t": "A3나 A4 인쇄용 PDF",
    "ch.magic.f3.b": "문서와 같은 머리글로 나가요.",
    "ch.magic.alt": "시스템 다섯 개로 나뉜 매직시트",
    "try.label": "직접 해 보기",
    "try.blocking": "큐를 누르면 배우들이 그 자리로 움직여요",
    "try.blocking.aria": "배우 여섯 명과 팔로우 스팟 두 대가 있는 무대 평면",
    "try.color": "젤을 고르고 디머를 내려 보세요",
    "try.color.gels": "젤",
    "try.color.dimmer": "디머",
    "try.color.lamp": "램프 약",
    "try.color.light": "빛의 색",
    "try.color.y": "투과율",
    "zoom.open": "크게 보기",
    "zoom.title": "스크린샷 크게 보기",
    "zoom.close": "닫기",
    "more.eyebrow": "그 밖의 기능",
    "more.title": "쇼 준비에 필요한 나머지도<br />한곳에 있어요.",
    "more.lede": "모두 같은 시트를 읽어요. 한 곳을 고치면 나머지도 따라와요.",
    "more.cable.t": "케이블",
    "more.cable.b": "DMX와 전원 경로를 그리고, 연결 안 된 기구와 겹친 어드레스, 용량을 넘긴 회로를 짚어 줘요.",
    "more.gobo.t": "고보와 고보 휠",
    "more.gobo.b": "쇼에서 쓰는 고보를 찾아 기구에 넣고, 기구 종류마다 고보 휠 문서를 뽑아요.",
    "more.vw.t": "Vectorworks",
    "more.vw.b": "도면과 시트를 실시간으로 맞추고, 플롯 보기에서 기구를 심볼 그대로 확인해요.",
    "more.console.t": "콘솔 연동",
    "more.console.b": "ETC Eos와는 OSC로, grandMA와는 Telnet으로 패치와 큐를 주고받아요.",
    "more.script.t": "대본과 큐시트",
    "more.script.b": "대본 줄에 Q, SQ, FS 큐를 찍으면 큐시트가 채워져요. 뮤지컬 넘버에는 음원도 붙여요.",
    "more.mood.t": "무드보드",
    "more.mood.b": "장면마다 페이지를 만들어 레퍼런스를 모으고, 사진에서 가까운 젤을 찾아요.",
    "more.dmx.t": "유니버스 맵",
    "more.dmx.b": "모든 유니버스를 한눈에 보고, 고른 기구를 원하는 시작 주소부터 한 번에 패치해요.",
    "more.workflow.t": "작업 흐름",
    "more.workflow.b": "시트가 바뀌어 다시 뽑아야 할 문서를 알려 주고, PDF를 쇼 패킷 하나로 묶어요.",
    "more.collab.t": "공동 작업",
    "more.collab.b": "열린 시트로 세션을 열고 동료를 초대해 같은 쇼를 함께 고쳐요.",
    "more.gdtf.t": "GDTF와 캘린더",
    "more.gdtf.b": "기구 정의 파일을 받아 보고 새로 만들고, 제작 일정을 한곳에 둬요.",
    "workflow.eyebrow": "워크플로",
    "workflow.title": "도면에서<br />부스까지.",
    "workflow.lede": "데이터는 한 번만 가져오면 돼요. 나머지 작업은 모두 그 데이터를 그대로 써요.",
    "workflow.1.title": "가져오기",
    "workflow.1.body": "Vectorworks, MVR, CSV, 엑셀 파일을 불러와요. 기존 시트에 합쳐도 열이 흐트러지지 않아요.",
    "workflow.2.title": "패치와 검사",
    "workflow.2.body": "시트에서 편집하고, 유니버스를 자동으로 패치하고, 오류를 모두 정리해요.",
    "workflow.3.title": "문서 출력",
    "workflow.3.body": "훅업, 매직시트, 큐시트, 동선표를 PDF 보관함으로 바로 뽑아요.",
    "workflow.4.title": "전달",
    "workflow.4.body": "콘솔로 넘기고, 리비전을 비교하고, Vectorworks와 계속 맞춰 둬요.",
    "download.eyebrow": "다운로드",
    "download.title": "LightDori 다운로드",
    "download.lede": "극장, 투어, 렌탈샵 어디서든 쓸 수 있어요. 인터넷 없이도 돌아가고, 공연 파일은 내 컴퓨터에만 남아요.",
    "download.win.meta": "설치 파일, .exe, 64비트",
    "download.mac.meta": "디스크 이미지, .dmg",
    "download.manual": "매뉴얼 보기",
    "download.note.hash":
      "다운로드 주소가 SHA256 체크섬처럼 보여요. Release 페이지에서 .exe 파일 이름을 우클릭한 뒤 링크 주소를 복사해 주세요.",
    "beta.eyebrow": "클로즈드 베타",
    "beta.title": "현장에서 일하는 사람들과<br />함께 만들어요.",
    "beta.lede": "조명 디자이너, 프로덕션 일렉트리션, 렌탈샵 분들을 모시고 있어요. 자리가 나는 대로 빌드를 보내 드릴게요.",
    "download.soon": "준비 중이에요",
    "beta.name": "이름",
    "beta.email": "이메일",
    "beta.role": "하는 일",
    "beta.choose": "골라 주세요",
    "beta.role.ld": "조명 디자이너",
    "beta.role.pe": "프로덕션 일렉트리션",
    "beta.role.op": "프로그래머, 오퍼레이터",
    "beta.role.shop": "렌탈샵",
    "beta.role.student": "학생",
    "beta.role.other": "기타",
    "beta.computer": "쓰는 컴퓨터",
    "beta.computer.both": "둘 다",
    "beta.company": "소속이나 공연 <em>선택</em>",
    "beta.message": "어디에 쓰고 싶은지 <em>선택</em>",
    "beta.consent": "적은 내용을 베타 운영과 안내 연락에만 쓰는 데 동의해요. 자세한 내용은 <a href=\"./privacy.html#beta\">개인정보 처리방침</a>에 있어요.",
    "beta.submit": "베타 신청",
    "beta.or": "메일로 문의하기:",
    "beta.mail.subject": "LightDori 베타 신청",
    "beta.err.name": "이름을 적어 주세요.",
    "beta.err.email": "이메일 주소를 확인해 주세요.",
    "beta.err.role": "하는 일을 골라 주세요.",
    "beta.err.computer": "쓰는 컴퓨터를 골라 주세요.",
    "beta.err.consent": "개인정보 동의에 체크해 주세요.",
    "beta.sending": "보내는 중이에요.",
    "beta.sent": "신청을 받았어요. 자리가 나면 메일로 빌드를 보내 드릴게요.",
    "beta.failed": "보내지 못했어요. 잠시 뒤 다시 하거나 xkxh4789@gmail.com 으로 메일을 보내 주세요.",
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
    "privacy.updated": "최종 개정일: 2026년 11월 12일",
    "privacy.body":
      "<h2>1. 수집하는 개인정보 항목</h2>" +
      "<p>LightDori는 계정과 공동 작업 기능을 제공하는 데 필요한 최소한의 정보만 수집합니다.</p>" +
      "<ul>" +
      "<li><strong>계정 정보</strong> — 이름, 이메일 주소, 비밀번호(솔트를 적용한 해시로만 저장하며 원문은 보관하지 않습니다)</li>" +
      "<li><strong>라이선스 정보</strong> — 계정에 연결된 라이선스 키와 활성화 상태</li>" +
      "<li><strong>공동 작업 데이터</strong> — 세션 이름, 참여자 정보, 이용자가 세션에 공유하기로 선택한 프로젝트 데이터와 편집 이력</li>" +
      "<li><strong>문의 내용</strong> — 이메일로 보내 주신 문의와 그에 대한 회신</li>" +
      "<li id=\"beta\"><strong>베타 신청</strong> — 홈페이지 베타 신청서에 적으신 이름, 이메일 주소, 하는 일, 쓰는 컴퓨터, 남기신 내용</li>" +
      "</ul>" +
      "<p>행태정보 수집이나 광고 식별자 이용은 하지 않습니다. 이용자의 컴퓨터에 저장된 프로젝트 파일의 내용은 수집하지 않으며, 공동 작업 세션에 직접 공유하지 않는 한 파일은 이용자의 컴퓨터에만 남습니다.</p>" +
      "<h2>2. 이용 목적</h2>" +
      "<p>계정 생성과 본인 확인, 공동 작업 세션 운영, 라이선스 유효성 확인, 문의 응대, 베타 운영과 신청하신 분께 빌드를 보내 드리기 위해 이용합니다. 광고 목적으로 이용하거나 제3자에게 판매하지 않습니다.</p>" +
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
      "<p>홈페이지에서 보내신 베타 신청서는 신청서 전달 서비스 Web3Forms를 거쳐, 미국에 서버를 둔 Google(Gmail)의 운영자 메일함으로 전송됩니다. 베타 신청 버튼을 누르는 시점에 신청서에 적으신 내용만 전송되며, 베타 운영에만 이용합니다. 신청서를 쓰고 싶지 않으시면 이메일로 신청하실 수 있습니다.</p>" +
      "<h2>5. 보유 기간과 파기</h2>" +
      "<p>계정 정보는 회원 탈퇴 시까지 보유하며 탈퇴 후 지체 없이 파기합니다. 공동 작업 이력은 해당 세션이 유지되는 동안 보관하고 세션 삭제 시 함께 파기합니다. 법령에서 일정 기간 보존을 요구하는 경우에는 해당 기록에 한해 법령이 정한 기간 동안 보관합니다. 베타 신청 내용은 베타가 끝나면 파기하며, 요청하시면 그 전에라도 파기합니다.</p>" +
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
    ["data-i18n-src", "src"],
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
