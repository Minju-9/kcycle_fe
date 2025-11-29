const MBTI_RESULTS = {
  INTJ: {
    type: "INTJ",
    groupColor: "#E7DFEA",             
    characterImage: "INTJ.png",         
    playerImage: "20190018.png",
    playerName: "임채빈 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/11/21/460113.mp4",
    keywords: ["레이스 마스터", "전략 설계", "흐름 주도"],
    descriptions: [
      "시작 전 전체 흐름을 먼저 계산하는 타입이다.",
      "계획에 따라 움직이는 편이다.",
      "감정보다 분석을 우선한다.",
      "복잡한 상황에도 흔들리지 않는다.",
      "선행처럼 주도권을 지향한다.",
      "잡은 리듬을 오래 유지한다.",
      "조용히 판을 설계하는 성향이다."
    ]
  },
  INTP: {
    type: "INTP",
    groupColor: "#E7DFEA",
    characterImage: "INTP.png",
    playerImage: "20130025.png",
    playerName: "정종진 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/11/9/440316.mp4",
    keywords: ["데이터 추격자", "패턴 분석", "계산 역전"],
    descriptions: [
      "구조를 먼저 이해하는 타입이다.",
      "원리를 탐구하는 성향이다.",
      "논리에 근거해 판단하는 편이다.",
      "흐름을 읽는 능력이 뛰어나다.",
      "젖히기로 역전을 노리는 유형이다.",
      "자신만의 방식이 뚜렷하다.",
      "새로운 전략을 구상하는 편이다."
    ]
  },
  ENTJ: {
    type: "ENTJ",
    groupColor: "#E7DFEA",
    characterImage: "ENTJ.png",
    playerImage: "20170020.png",
    playerName: "전원규 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/10/17/410114.mp4",
    keywords: ["지휘 전문가", "강한 주도력", "페이스 장악"],
    descriptions: [
      "목표가 보이면 즉시 움직이는 타입이다.",
      "상황을 직접 통제하려는 성향이다.",
      "흐름을 앞에서 이끄는 편이다.",
      "경쟁에서도 자신감이 높다.",
      "선행처럼 초반부터 장악한다.",
      "결단과 실행이 빠른 유형이다.",
      "효율과 결과를 중시하는 편이다."
    ]
  },
  ENTP: {
    type: "ENTP",
    groupColor: "#E7DFEA",
    characterImage: "ENTP.png",
    playerImage: "20160013.png",
    playerName: "정해민 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/8/17/330314.mp4",
    keywords: ["트릭 전문가", "예측 불가", "기습 역전"],
    descriptions: [
      "새로운 아이디어가 빠른 타입이다.",
      "변화에 두려움이 없는 성향이다.",
      "토론과 수싸움에 강한 편이다.",
      "고정된 방식보다 변화를 선호한다.",
      "추입처럼 마지막에 상황을 뒤집는 유형이다.",
      "흐름을 흔드는 전략을 즐긴다.",
      "유연한 사고로 해법을 만든다."
    ]
  },
  INFJ: {
    type: "INFJ",
    groupColor: "#D6ECE3",
    characterImage: "INFJ.png",
    playerImage: "20110008.png",
    playerName: "신은섭 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/11/16/450314.mp4",
    keywords: ["희망의 추월러", "감각 집중", "흐름 읽기"],
    descriptions: [
      "조용하지만 내면 에너지가 강한 타입이다.",
      "흐름을 깊게 느끼며 판단하는 편이다.",
      "혼란 속에서도 본질을 찾아간다.",
      "감정의 결이 섬세한 성향이다.",
      "추입처럼 끝에서 힘이 발휘된다.",
      "목표를 향해 묵묵히 꾸준하다.",
      "혼자서도 의미를 만들어가는 유형이다."
    ]
  },
  INFP: {
    type: "INFP",
    groupColor: "#D6ECE3",
    characterImage: "INFP.png",
    playerImage: "20120005.png",
    playerName: "류재열 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/10/25/420213.mp4",
    keywords: ["따뜻한 페이서", "자기 리듬", "온화한 추진"],
    descriptions: [
      "자신의 속도를 가장 잘 아는 타입이다.",
      "부드럽지만 흔들리지 않는 성향이다.",
      "감정을 진심으로 받아들이는 편이다.",
      "갈등보단 조화를 택한다.",
      "마크하며 안정적 흐름을 유지한다.",
      "의미 있는 일에 깊게 몰입한다.",
      "누군가에게 따뜻한 힘이 되는 유형이다."
    ]
  },
  ENFJ: {
    type: "ENFJ",
    groupColor: "#D6ECE3",
    characterImage: "ENFJ.png",
    playerImage: "20160009.png",
    playerName: "양승원 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/11/14/450113.mp4",
    keywords: ["선도 파이터", "분위기 리더", "흐름 조정"],
    descriptions: [
      "사람들을 자연스럽게 이끄는 타입이다.",
      "상황의 분위기를 잘 읽는 성향이다.",
      "흐름이 느려지면 먼저 나서서 움직인다.",
      "관계에서 조율 능력이 뛰어나다.",
      "젖히기를 통해 흐름을 강하게 바꾼다.",
      "타인의 성장을 함께 고민한다.",
      "모두가 잘 달리도록 판을 정리하는 유형이다."
    ]
  },
  ENFP: {
    type: "ENFP",
    groupColor: "#D6ECE3",
    characterImage: "ENFP.png",
    playerImage: "20120023.png",
    playerName: "황승호 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/11/21/460116.mp4",
    keywords: ["하이텐션 돌파러", "즉흥 에너지", "직감 스파크"],
    descriptions: [
      "감정과 영감이 빠르게 타오르는 타입이다.",
      "새로운 변화를 즐기는 성향이다.",
      "떠오르는 아이디어를 즉시 행동한다.",
      "단조로움보단 자극을 선호한다.",
      "추입으로 순간 폭발력이 강하다.",
      "분위기를 살리는 재능이 있다.",
      "자유롭고 밝은 흐름을 만드는 유형이다."
    ]
  },
  ISTJ: {
    type: "ISTJ",
    groupColor: "#D9EAF0",
    characterImage: "ISTJ.png",
    playerImage: "20110002.png",
    playerName: "김홍건 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/6/21/250203.mp4",
    keywords: ["페이스 통제러", "안정 주행", "규칙 준수"],
    descriptions: [
      "계획을 지키며 움직이는 유형이다.",
      "흐름을 안정적으로 관리하는 성향이다.",
      "혼란 속에서도 흔들림 없는 페이스가 특징.",
      "꾸준한 페이스 유지에 강점이 있다.",
      "과한 위험은 피하고 신중하게 생각한다.",
      "맡은 일은 끝까지 해내는 스타일이다.",
      "혼자서도 의미를 만들어가는 유형이다."
    ]
  },
  ISFJ: {
    type: "ISFJ",
    groupColor: "#D9EAF0",
    characterImage: "ISFJ.png",
    playerImage: "20010007.png",
    playerName: "김영섭 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/5/9/190115.mp4",
    keywords: ["안정 페이스러", "차분 운영", "세심 판단"],
    descriptions: [
      "조용하지만 책임감이 강한 타입이다.",
      "주변을 세심하게 챙기는 성향이다.",
      "흐름을 무리 없이 따라간다.",
      "갈등보다 조화를 중요하게 여긴다.",
      "위험보다 안정감을 선택한다.",
      "부드럽지만 단단한 유형이다."
    ]
  },
  ESTJ: {
    type: "ESTJ",
    groupColor: "#D9EAF0",
    characterImage: "ESTJ.png",
    playerImage: "20070024.png",
    playerName: "조봉철 선수",
    videoUrl: "https://vod.lepopark.or.kr/2025/10-05/f3902_07.mp4",
    keywords: ["레이스 감독관", "페이스 주도", "리드 운영"],
    descriptions: [
      "상황을 빠르게 장악하는 타입이다.",
      "규칙과 효율을 중시하는 성향이다.",
      "초반 흐름을 직접 잡는 편이다.",
      "책임감이 강하고 직접 해결하려 한다.",
      "결정이 빠르고 행동이 명확한 편이다.",
      "목표를 향해 빠르게 밀어붙인다.",
      "명확한 기준을 세우고 움직이는 유형이다."
    ]
  },
  ESFJ: {
    type: "ESFJ",
    groupColor: "#D9EAF0",
    characterImage: "ESFJ.png",
    playerImage: "20190003.png",
    playerName: "김민호 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/6/27/260110.mp4",
    keywords: ["분위기 페이서", "안정 호흡", "팀 에너지"],
    descriptions: [
      "사람들과 함께할 때 강해지는 타입이다.",
      "분위기를 자연스럽게 맞춘다.",
      "흐름을 무리 없이 이어가는 성향이다.",
      "관계 조율에 능숙한 편이다.",
      "과격함보다 안정적 운영을 선호한다.",
      "주변의 감정을 잘 살핀다.",
      "함께할 때 시너지가 큰 유형이다."
    ]
  },
  ISTP: {
    type: "ISTP",
    groupColor: "#F9EED7",
    characterImage: "ISTP.png",
    playerImage: "20210001.png",
    playerName: "강동규 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/11/21/460112.mp4",
    keywords: ["스킬 엔지니어", "기술 판단", "실전 감각"],
    descriptions: [
      "상황을 빠르게 파악하는 분석형이다.",
      "감정보다 기술과 효율을 우선하는 편이다.",
      "필요한 만큼만 움직이는 실용적인 유형이다.",
      "위기 상황에서도 침착함을 유지하는 타입이다.",
      "판단과 행동이 빠르게 연결되는 편이다.",
      "불필요한 시간 낭비를 싫어하는 편이다.",
      "새로운 변화에도 빠르게 적응하는 유형이다."
    ]
  },
  ISFP: {
    type: "ISFP",
    groupColor: "#F9EED7",
    characterImage: "ISFP.png",
    playerImage: "20060027.png",
    playerName: "이용희 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/10/17/410106.mp4",
    keywords: ["슬리핑 라이더", "흐름 중시", "부드러운 스퍼트"],
    descriptions: [
      "자신의 리듬을 조용히 지키는 유형이다.",
      "분위기와 흐름을 감각적으로 읽는 편이다.",
      "앞에 나서기보다 뒤에서 타이밍을 보는 타입.",
      "경쟁보다 안정적인 주행을 선호하는 편이다.",
      "과한 위험은 피하고 신중하게 생각한다.",
      "결정적인 순간에 부드럽게 치고 나가는 편.",
      "혼자만의 감성과 호흡을 중시하는 성향이다."
    ]
  },
  ESTP: {
    type: "ESTP",
    groupColor: "#F9EED7",
    characterImage: "ESTP.png",
    playerImage: "20170011.png",
    playerName: "김환윤 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/11/21/460112.mp4",
    keywords: ["위험 감수 추격자", "파워 스타트", "순간 판단"],
    descriptions: [
      "순간 판단으로 바로 움직이는 유형이다.",
      "기다리는 것보다 먼저 치고 나가는 편이다.",
      "위험을 감수하는 것을 두려워하지 않는 성향.",
      "틀을 스스로 깨고 만들고 싶어 하는 타입이다.",
      "안정보단 변화와 자극 쪽에 더 끌리는 유형.",
      "정면 승부로 흐름을 끌어가는 성향이다.",
      "몸으로 부딪히며 배워가는 실전파이다."
    ]
  },
  ESFP: {
    type: "ESFP",
    groupColor: "#F9EED7",
    characterImage: "ESFP.png",
    playerImage: "20170005.png",
    playerName: "김민배 선수",
    videoUrl: "https://cast.kcycle.or.kr/vod/pds/2025/10/31/430107.mp4",
    keywords: ["엔터테이너 러너", "임팩트 플레이", "에너지 러너"],
    descriptions: [
      "에너지가 넘치는 활발한 유형",
      "조용한 전개보다 다이내믹한 흐름을 선호",
      "판을 뒤집는 장면을 좋아하는 타입이다.",
      "사람들의 시선이 모일 때 더 힘이 나는 성향.",
      "분위기를 살리고 즐기는 데 재능있는 스타일.",
      "계산보다 직각으로 먼저 움직이는 편이다.",
      "지루한 상황일 때 판을 흔들고 싶어하는 편"
    ]
  }
};

