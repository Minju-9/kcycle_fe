/* 타입 정의*/
const TYPE_KEYS = ['INTJ','INTP','ENTJ','ENTP','ENFP','INFJ','INFP',
      'ENFJ','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'];

const PRIORITY  = ['INTJ','INTP','ENTJ','ENTP','ENFP','INFJ','INFP',
      'ENFJ','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'];

const TYPE_INFO = {
  INTJ:{ label: '레이스 마스터',  desc: '모든 상황을 계산하고 설계하는 짱짱 전략가', img: '' },
  INTP:{ label: '데이터 추격자',  desc: '기록,패턴, 상대 데이터를 뜯어 연구하는 연구자', img: '' },
  ENTJ:{ label: '지휘 전문가',   desc: '흐름을 주도하고 앞에서 판을 만들어 이끌어가버리는 리더형', img: '' },
  ENTP:{ label: '트릭 전문가',   desc: '예측 불가한 사람이고 상대 교란 작전으로 판을 뒤집는 수싸움형 스타일', img: '' },
  INFJ:{ label: '희망의 추월러',  desc: '조용하지만 결정적인 순간 폭발하는 신비의 선수', img: '' },
  INFP:{ label: '따뜻한 페이서',  desc: '자신만의 리듬을 타며 부드럽게 달리는 감성 주자', img: '' },
  ENFJ:{ label: '선도 파이터',    desc: '경기를 이끌고 가며 흐름을 바꾸는 카리스마있는 주자', img: '' },
  ENFP:{ label: '하이텐션 돌파러', desc: '재미와 열정으로 달리는 에너지 폭발 선수', img: '' },
  ISTJ:{ label: '페이스 통제러',   desc: '정해진 루틴과 페이스를 지키는 안정형의 대표 선수', img: '' },
  ISFJ:{ label: '안정 페이스러',  desc: '안정적으로 경기를 장악하는 페이스형 선수', img: '' },
  ESTJ:{ label: '레이스 감독관',   desc: '경기 흐름을 장악하고 모두를 정렬시키는 카리스마 리더형', img: '' },
  ESFJ:{ label: '분위기 페이서',   desc: '흐름을 부드럽게 이어가는 안정형 주자', img: '' },
  ISTP:{ label: '스킬 엔지니어',   desc: '상황 판단 능력이 높고 기술적 움직임이 뛰어난 테크니션 선수', img: '' },
  ISFP:{ label: '슬리핑 라이더',   desc: '조용히 에너지 절약하다가 필요할 때 갑자기 치고 나오는 감각형 선수', img: '' },
  ESTP:{ label: '위험 감수 추격자', desc: '강한 승부욕과 스릴을 즐기는 도전적이고 추격형 선수', img: '' },
  ESFP:{ label: '엔터테이너 러너',  desc: '관중 환호 먹고 크는 흥 폭발 선수', img: '' }
};

/* 기본 세팅*/
let idx = 0;
let scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

const totalQuestions = 10;

const app = document.getElementById("app");
const sections = Array.from(document.querySelectorAll('section.question'));
const progress = document.getElementById('progress');
const resultEl = document.getElementById('result');

const resultImg = document.getElementById('result-img');
const resultTitle  = document.getElementById('result-title');
const resultDesc   = document.getElementById('result-desc');
const resultScores = document.getElementById('result-scores');
const retryBtn     = document.getElementById('retryBtn');

const introSection = document.getElementById('intro');
const startBtn = introSection.querySelector('button[data-skip="true"]');

/* 초기 상태: 질문/결과 전부 가리기 */
sections.forEach(sec => {
  sec.style.display = 'none';
});
resultEl.style.display = 'none';
progress.style.display = "none";

/* 시작 버튼 */
startBtn.addEventListener('click', () => {
  introSection.style.display = 'none';  // 인트로 숨기기
  idx = 0;
  showSection(idx);                      // Q1 보여주기
});

/* 진행도 바 */
function updateProgress(current, total) {
  let bar = progress.querySelector(".bar");

  if (!bar) {
    bar = document.createElement("div");
    bar.className = "bar";
    progress.appendChild(bar);
  }

  const percent = Math.round((current / total) * 100);
  bar.style.width = percent + "%";
  progress.style.display = "block";
}

/* 질문 표시 */
function showSection(i){
  sections.forEach((sec, n)=> {
    sec.style.display = (n === i) ? 'block' : 'none';
  });
  resultEl.style.display = 'none';

  // 진행도 (1번 문제일 때 1/10 → 10%) 아직 안 됨
  updateProgress(i + 1, totalQuestions);
}

/* 질문 숨기기*/
function hideAllQuestions(){
  sections.forEach(sec => {
    sec.style.display = 'none';
  });
}

/* 답변 클릭 시 실행되는 함수 */
function onAnswer(button){
  const type = button.dataset.type;
  if (!type) return;

  // 점수 누적
  scores[type]++;

  // 마지막 질문이면 → 결과 계산
  if (idx === totalQuestions - 1) {
    finalize();
  } else {
    idx++;
    showSection(idx);
  }
}

/* 결과 계산 */
function finalize(){
  hideAllQuestions();
  progress.style.display = "none";

  // MBTI 계산
  const EI = scores.E >= scores.I ? "E" : "I";
  const SN = scores.S >= scores.N ? "S" : "N";
  const TF = scores.T >= scores.F ? "T" : "F";
  const JP = scores.J >= scores.P ? "J" : "P";

  const mbti = EI + SN + TF + JP;
  const info = TYPE_INFO[mbti];

  resultImg.src = info.img;
  resultTitle.textContent = info.label;
  resultDesc.textContent  = info.desc;
  resultScores.textContent = `당신의 유형: ${mbti}`;

  resultEl.style.display = 'block';
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* 다시 하기 */
function resetAll(){
  idx = 0;
  scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

  showSection(idx);
  resultEl.style.display = 'none';
  resultTitle.textContent = '';
  resultDesc.textContent = '';
  resultScores.textContent = '';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

retryBtn.addEventListener('click', resetAll);

/* 각 질문 버튼에 클릭 이벤트 연결 */
sections.forEach(sec => {
  sec.querySelectorAll('.option button').forEach(btn => {
    btn.addEventListener('click', () => onAnswer(btn));
  });
});
