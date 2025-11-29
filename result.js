
const params = new URLSearchParams(window.location.search);
const type = params.get("type") || "INTJ";

const data = MBTI_RESULTS[type];

if (!data) {
  alert("잘못된 결과 타입입니다.");
  const defaultData = MBTI_RESULTS["INTJ"];
  if (defaultData) {
    renderResult(defaultData);
  }
} else {
  renderResult(data);
}

function renderResult(data) {
  const card = document.querySelector(".result-card");
  const title = document.querySelector(".result-title");
  const keywordListEl = document.getElementById("keywordList");
  const descListEl = document.getElementById("descList");
  const characterImgEl = document.getElementById("characterImage");
  const playerImgEl = document.getElementById("playerImage");
  const playerNameEl = document.getElementById("playerName");
  const videoButton = document.getElementById("videoButton");

  card.style.background = data.groupColor;
  videoButton.style.background = data.groupColor;

  characterImgEl.src = `./assets/${data.characterImage}`;
  playerImgEl.src = `./assets/${data.playerImage}`;
  playerNameEl.textContent = data.playerName;

  keywordListEl.innerHTML = "";
  data.keywords.forEach((kw) => {
    const pill = document.createElement("div");
    pill.className = "keyword-pill";
    pill.textContent = kw;
    keywordListEl.appendChild(pill);
  });

  descListEl.innerHTML = "";
  data.descriptions.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    descListEl.appendChild(li);
  });

  videoButton.addEventListener("click", () => {
    window.open(data.videoUrl, "_blank");
  });

  // 다시 해보기 > 메인 페이지
  document.getElementById("retryButton").addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  const shareButton = document.getElementById("shareButton");
  shareButton.addEventListener("click", async () => {
    const target = document.querySelector(".result-card");
    if (!target) return;

    try {
      const canvas = await html2canvas(target, {
        scale: 2,      
        useCORS: true 
      });

      const link = document.createElement("a");
      const type = data?.type || "result";
      link.download = `kcycle_${type}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("이미지 캡처 실패:", error);
      alert("이미지 저장에 실패했어요. 다시 시도해 주세요.");
    }
  });
}

