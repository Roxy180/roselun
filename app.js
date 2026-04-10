const CDN_BASE = "https://cdn.jsdelivr.net/gh/Roxy180/roselun@main";

const slides = [
  {
    text: "柔和贴合，像日常生活里的一层安心。",
    image: `${CDN_BASE}/assets/optimized/hero.jpg`,
    fallbackImage: "assets/optimized/hero.jpg",
  },
];

const questions = [
  {
    id: "Q1",
    section: "基础信息",
    title: "您的年龄是？",
    type: "single",
    options: ["15-18岁", "19-22岁", "23-26岁", "26-30岁"],
    style: "radio",
    cols: 2,
  },
  {
    id: "Q2",
    section: "基础信息",
    title: "您的身份是？",
    type: "single",
    options: ["在校学生", "已工作（职场女性）", "其他"],
    style: "radio",
  },
  {
    id: "Q3",
    section: "基础信息",
    title: "你目前平均每月的可支配收入/生活费大约是？",
    type: "slider",
    options: ["1500元以下", "1500-3000元", "3001-5000元", "5000元以上"],
  },
  {
    id: "Q4",
    section: "消费行为",
    title: "您购买内衣的主要渠道是？",
    type: "single",
    options: ["淘宝/天猫", "抖音/快手直播", "小红书/微信小程序", "线下商场/内衣店", "其他"],
    style: "image",
    thumbs: ["🛒", "🎥", "📕", "🏬", "✨"],
    cols: 2,
  },
  {
    id: "Q5",
    section: "消费行为",
    title: "你购买内衣的频率大概是？",
    type: "single",
    options: ["每月1-2次", "每3个月1-2次", "每半年1-2次", "有需要才买，不固定"],
    style: "icon",
  },
  {
    id: "Q6",
    section: "消费行为",
    title: "你通常接受的文胸单件价格是？",
    type: "slider",
    options: ["30元以下", "30-100元", "100-200元", "200-500元", "500元以上"],
  },
  {
    id: "Q7",
    section: "消费行为",
    title: "你通常接受的内裤单件价格是？",
    type: "slider",
    options: ["10元以下", "10-30元", "30-100元", "100-150元", "150元以上"],
  },
  {
    id: "Q8",
    section: "偏好选择",
    title: "以下内衣材质，你最喜欢哪一种？（可多选，最多3项）",
    type: "multi",
    options: ["纯棉", "莫代尔", "桑蚕丝", "蕾丝", "莱卡（优质氨纶）", "锦纶", "其他"],
    style: "material",
    imageFiles: [
      "cotton.png",
      "modal.png",
      "silk.png",
      "lace.png",
      "lycra.png",
      "nylon.png",
      "",
    ],
    maxSelect: 3,
    cols: 2,
  },
  {
    id: "Q9",
    section: "偏好选择",
    title: "以下内衣款式，你更倾向哪一种？（可多选2种）",
    type: "multi",
    options: ["无钢圈文胸", "有钢圈文胸", "聚拢型", "运动内衣", "抹胸/胸贴"],
    style: "chip",
    maxSelect: 2,
  },
  {
    id: "Q10",
    section: "偏好选择",
    title: "购买内衣时，你最看重的三个因素是？（选前三项）",
    type: "multi",
    options: ["舒适度", "材质安全", "价格", "款式好看", "品牌", "抑菌/卫生", "承托效果", "便于清洗"],
    style: "chip",
    maxSelect: 3,
    cols: 2,
  },
  {
    id: "Q11",
    section: "穿着体验",
    title: "你在穿内衣时，遇到过以下哪些问题？（可多选）",
    type: "multi",
    options: ["钢圈压迫/勒痕", "空杯/跑位", "面料过敏/起疹", "闷汗/不透气", "内裤卷边/卡裆", "肩带滑落", "基本没有不适"],
    style: "chip",
    cols: 2,
  },
  {
    id: "Q12",
    section: "健康认知",
    title: "你是否有过因为内衣问题导致的皮肤或私处不适？",
    type: "single",
    options: ["经常有", "偶尔有", "很少", "从来没有"],
    style: "radio",
  },
  {
    id: "Q13",
    section: "健康认知",
    title: "你购买新内衣后，会先清洗再穿吗？",
    type: "single",
    options: ["每次都会", "经常会", "偶尔会", "从来不会，觉得新的就是干净的"],
    style: "radio",
  },
  {
    id: "Q14",
    section: "健康认知",
    title: "你听说过“新内衣可能携带细菌或致病菌”吗？",
    type: "single",
    options: ["听说过，而且很在意", "听说过，但觉得无所谓", "没听说过"],
    style: "radio",
  },
  {
    id: "Q15",
    section: "健康认知",
    title:
      "如果有一款“出厂前经过医用紫外线消毒、独立密封包装、开袋即穿”的内衣，价格比普通内衣贵20%左右，你愿意购买吗？",
    type: "single",
    options: ["非常愿意", "愿意", "不确定", "不太愿意", "完全不愿意"],
    style: "radio",
  },
  {
    id: "Q16",
    section: "校园专属",
    title: "你在学校宿舍洗内衣时，遇到过哪些困难？（可多选）",
    type: "multi",
    options: ["晾晒空间小/不通风", "阴天/冬天干得慢", "用公共洗衣机怕不卫生", "手洗太累/没时间", "基本没有困难"],
    style: "image",
    thumbs: ["🏠", "🌧️", "🧺", "⏰", "✅"],
    condition: (answers) => answers.Q2 === "在校学生",
  },
  {
    id: "Q17",
    section: "校园专属",
    title: "考试周或忙碌的时候，你会如何解决内衣换洗问题？",
    type: "single",
    options: ["囤积几天一起洗", "买一次性内裤", "硬着头皮手洗", "请室友/家人帮忙"],
    style: "radio",
    condition: (answers) => answers.Q2 === "在校学生",
  },
  {
    id: "Q18",
    section: "校园专属",
    title: "如果学校里有“熹芮内衣体验站”（可试穿、科普、匿名购买），你会有兴趣去看看吗？",
    type: "single",
    options: ["非常感兴趣", "有点兴趣", "一般", "没兴趣"],
    style: "radio",
    condition: (answers) => answers.Q2 === "在校学生",
  },
];

const state = {
  currentSlide: 0,
  answers: {},
  missingJumpIndex: 0,
};

const el = {
  heroStage: document.getElementById("heroStage"),
  experienceScreen: document.getElementById("experienceScreen"),
  survey: document.getElementById("surveyScreen"),
  done: document.getElementById("doneScreen"),
  track: document.getElementById("carouselTrack"),
  dots: document.getElementById("carouselDots"),
  prevSlide: document.getElementById("prevSlide"),
  nextSlide: document.getElementById("nextSlide"),
  questionsContainer: document.getElementById("questionsContainer"),
  counter: document.getElementById("questionCounter"),
  progressFill: document.getElementById("progressFill"),
  submitBtn: document.getElementById("submitBtn"),
  restartBtn: document.getElementById("restartBtn"),
  wechatBtn: document.getElementById("wechatBtn"),
  wechatModal: document.getElementById("wechatModal"),
  wechatCloseBtn: document.getElementById("wechatCloseBtn"),
  wechatQrImage: document.getElementById("wechatQrImage"),
  wechatQrTip: document.getElementById("wechatQrTip"),
  copyWechatIdBtn: document.getElementById("copyWechatIdBtn"),
  downloadQrBtn: document.getElementById("downloadQrBtn"),
  wechatActionStatus: document.getElementById("wechatActionStatus"),
  aboutBtn: document.getElementById("aboutBtn"),
  aboutModal: document.getElementById("aboutModal"),
  aboutCloseBtn: document.getElementById("aboutCloseBtn"),
  aboutImage: document.getElementById("aboutImage"),
  aboutTip: document.getElementById("aboutTip"),
  policyBtn: document.getElementById("policyBtn"),
  policyModal: document.getElementById("policyModal"),
  policyCloseBtn: document.getElementById("policyCloseBtn"),
  policyImage: document.getElementById("policyImage"),
  policyTip: document.getElementById("policyTip"),
  bizBtn: document.getElementById("bizBtn"),
  bizModal: document.getElementById("bizModal"),
  bizCloseBtn: document.getElementById("bizCloseBtn"),
  bizImage: document.getElementById("bizImage"),
  bizTip: document.getElementById("bizTip"),
  copyBizEmailBtn: document.getElementById("copyBizEmailBtn"),
  bizActionStatus: document.getElementById("bizActionStatus"),
};

function setActiveScreen(name) {
  el.done.classList.remove("active");
  if (name === "done") el.done.classList.add("active");
}

function renderSlide() {
  const slide = slides[state.currentSlide];
  el.track.innerHTML = `
    <div class="carousel-item">
      <img
        src="${slide.image}"
        alt="${slide.text}"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        data-fallback-src="${slide.fallbackImage || ""}"
      />
      <div class="carousel-overlay"></div>
      <p>${slide.text}</p>
    </div>
  `;
  const slideImage = el.track.querySelector("img[data-fallback-src]");
  if (slideImage) {
    slideImage.addEventListener(
      "error",
      () => {
        const fallbackSrc = slideImage.getAttribute("data-fallback-src");
        if (fallbackSrc && slideImage.getAttribute("src") !== fallbackSrc) {
          slideImage.setAttribute("src", fallbackSrc);
        }
      },
      { once: true }
    );
  }
  if (slides.length <= 1) {
    el.prevSlide.style.display = "none";
    el.nextSlide.style.display = "none";
    el.dots.innerHTML = "";
    el.track.classList.add("single-image-mode");
  } else {
    el.prevSlide.style.display = "inline-flex";
    el.nextSlide.style.display = "inline-flex";
    el.track.classList.remove("single-image-mode");
    el.dots.innerHTML = slides
      .map((_, i) => `<span class="dot ${i === state.currentSlide ? "active" : ""}"></span>`)
      .join("");
  }
}

function nextSlide(step) {
  state.currentSlide = (state.currentSlide + step + slides.length) % slides.length;
  renderSlide();
}

function answerOf(id) {
  return state.answers[id];
}

function isAnswered(q) {
  const value = answerOf(q.id);
  if (q.type === "multi") return Array.isArray(value) && value.length > 0;
  return value !== undefined && value !== null;
}

function getActiveQuestions() {
  return questions.filter((q) => !q.condition || q.condition(state.answers));
}

function updateTopInfo() {
  const activeQuestions = getActiveQuestions();
  const answeredCount = activeQuestions.filter((q) => isAnswered(q)).length;
  const percent = activeQuestions.length ? (answeredCount / activeQuestions.length) * 100 : 0;
  el.counter.textContent = `${answeredCount} / ${activeQuestions.length} 已完成`;
  el.progressFill.style.width = `${percent}%`;
}

function renderSingle(q) {
  const selected = answerOf(q.id);
  const cls = q.style === "icon" ? "icon-option" : q.style === "image" ? "image-option" : "chip";
  const gridClass = q.cols === 2 ? "options-grid two-col" : "options-grid";
  return `
    <div class="${gridClass}">
      ${q.options
        .map((opt, idx) => {
          const active = selected === opt ? "active" : "";
          if (q.style === "radio") {
            return `<button type="button" class="${cls} ${active}" data-value="${opt}">
              <span class="radio-circle"></span>${opt}
            </button>`;
          }
          if (q.style === "image") {
            const emoji = q.thumbs?.[idx] || "🧷";
            return `<button type="button" class="${cls} ${active}" data-value="${opt}">
              <span class="img-thumb">${emoji}</span><span>${opt}</span>
            </button>`;
          }
          return `<button type="button" class="${cls} ${active}" data-value="${opt}">${opt}</button>`;
        })
        .join("")}
    </div>
  `;
}

function renderSlider(q) {
  const current = answerOf(q.id) ?? 0;
  return `
    <div class="slider-wrap">
      <span class="slider-value">${q.options[current]}</span>
      <input type="range" min="0" max="${q.options.length - 1}" step="1" value="${current}" />
      <div class="ticks">${q.options.map((o) => `<span>${o}</span>`).join("")}</div>
    </div>
  `;
}

function renderScale(q) {
  const selected = answerOf(q.id);
  return `
    <div class="options-grid">
      <div class="scale-row">
        ${[1, 2, 3, 4, 5]
          .map(
            (num) => `<button type="button" class="scale-point ${selected === num ? "active" : ""}" data-value="${num}">
            ${num}
          </button>`
          )
          .join("")}
      </div>
      <div class="scale-tip">
        <span>完全不符合</span>
        <span>完全符合</span>
      </div>
    </div>
  `;
}

function renderMulti(q) {
  const selected = answerOf(q.id) || [];
  const gridClass = q.cols === 2 ? "options-grid two-col" : "options-grid";
  return `
    <div class="${gridClass}">
      ${q.options
        .map((opt, idx) => {
          const active = selected.includes(opt) ? "active" : "";
          if (q.style === "material") {
            const imgSrc = q.imageFiles?.[idx] || "";
            return `<button type="button" class="material-option ${active}" data-value="${opt}">
              <div class="material-photo-wrap">
                ${
                  imgSrc
                    ? `<img src="${imgSrc}" alt="${opt}" class="material-photo" loading="lazy" />`
                    : `<div class="material-no-photo">其他材质</div>`
                }
              </div>
              <span class="material-label">${opt}</span>
            </button>`;
          }
          if (q.style === "chip") {
            return `<button type="button" class="chip ${active}" data-value="${opt}">${opt}</button>`;
          }
          const emoji = q.thumbs?.[idx] || "✅";
          return `<button type="button" class="image-option ${active}" data-value="${opt}">
            <span class="img-thumb">${emoji}</span><span>${opt}</span>
          </button>`;
        })
        .join("")}
    </div>
  `;
}

function renderQuestionCard(q) {
  let body = "";
  if (q.type === "single") body = renderSingle(q);
  if (q.type === "slider") body = renderSlider(q);
  if (q.type === "scale") body = renderScale(q);
  if (q.type === "multi") body = renderMulti(q);

  const intro =
    q.id === "Q7"
      ? `<p class="question-label">以下题目请根据真实感受选择：1=完全不符合，5=完全符合</p>`
      : `<p class="question-label">${q.id}</p>`;

  return `
    <article id="card-${q.id}" class="question-card">
    <p class="question-label">${q.section}</p>
    ${intro}
    <h2 class="question-title">${q.title}</h2>
    ${body}
    </article>
  `;
}

function renderAllQuestions() {
  const activeQuestions = getActiveQuestions();
  el.questionsContainer.innerHTML = activeQuestions.map((q) => renderQuestionCard(q)).join("");

  activeQuestions.forEach((q) => {
    const card = document.getElementById(`card-${q.id}`);
    if (!card) return;

    if (q.type === "slider") {
      const slider = card.querySelector('input[type="range"]');
      const valueTag = card.querySelector(".slider-value");
      if (answerOf(q.id) === undefined) state.answers[q.id] = 0;
      slider.value = answerOf(q.id);
      valueTag.textContent = q.options[Number(slider.value)];
      slider.addEventListener("input", () => {
        state.answers[q.id] = Number(slider.value);
        valueTag.textContent = q.options[Number(slider.value)];
        updateTopInfo();
      });
    }

    card.querySelectorAll("button[data-value]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-value");
        if (q.type === "multi") {
          const arr = answerOf(q.id) || [];
          const exclusiveOption = q.id === "Q11" ? "基本没有不适" : null;
          if (arr.includes(val)) {
            state.answers[q.id] = arr.filter((i) => i !== val);
          } else {
            if (exclusiveOption && val === exclusiveOption) {
              state.answers[q.id] = [exclusiveOption];
              state.missingJumpIndex = 0;
              renderAllQuestions();
              updateTopInfo();
              return;
            }
            const max = q.maxSelect || Number.MAX_SAFE_INTEGER;
            const base = exclusiveOption ? arr.filter((i) => i !== exclusiveOption) : arr;
            if (base.length >= max) return;
            state.answers[q.id] = [...base, val];
          }
        } else if (q.type === "scale") {
          state.answers[q.id] = Number(val);
        } else {
          state.answers[q.id] = val;
        }
        state.missingJumpIndex = 0;
        renderAllQuestions();
        updateTopInfo();
      });
    });
  });
}

function goSubmit() {
  const unanswered = getActiveQuestions().filter((q) => !isAnswered(q));
  if (unanswered.length > 0) {
    const targetQuestion = unanswered[state.missingJumpIndex % unanswered.length];
    state.missingJumpIndex += 1;
    const target = document.getElementById(`card-${targetQuestion.id}`);
    document.querySelectorAll(".question-card.error-card").forEach((card) => {
      card.classList.remove("error-card");
    });
    if (target) {
      target.classList.add("error-card");
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }
  state.missingJumpIndex = 0;
  console.log("问卷答案：", state.answers);
  setActiveScreen("done");
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function updateHeroOnScroll() {
  const rect = el.experienceScreen.getBoundingClientRect();
  const maxRange = window.innerHeight * 0.95;
  const progress = Math.max(0, Math.min(1, -rect.top / maxRange));
  const scale = 1 - progress * 0.26;
  const blur = progress * 2.8;
  const fade = 1 - progress * 0.42;
  el.heroStage.style.setProperty("--hero-scale", scale.toFixed(3));
  el.heroStage.style.setProperty("--hero-blur", `${blur.toFixed(2)}px`);
  el.heroStage.style.setProperty("--hero-fade", fade.toFixed(3));
}

function openModal(modal) {
  const modalImage = modal.querySelector("img[data-src]");
  if (modalImage && !modalImage.getAttribute("src")) {
    modalImage.setAttribute("src", modalImage.getAttribute("data-src"));
    modalImage.addEventListener(
      "error",
      () => {
        const fallbackSrc = modalImage.getAttribute("data-fallback-src");
        if (fallbackSrc && modalImage.getAttribute("src") !== fallbackSrc) {
          modalImage.setAttribute("src", fallbackSrc);
        }
      },
      { once: true }
    );
  }
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function bindImageFallback(img, tip) {
  if (!img || !tip) return;
  img.addEventListener("error", () => {
    img.style.display = "none";
    tip.style.display = "block";
  });
  img.addEventListener("load", () => {
    img.style.display = "inline-block";
    tip.style.display = "none";
  });
}

async function copyWechatId() {
  const value = el.copyWechatIdBtn?.getAttribute("data-wechat-id") || "ventusdedian";
  try {
    await navigator.clipboard.writeText(value);
    el.wechatActionStatus.textContent = `已复制微信号：${value}`;
  } catch {
    const temp = document.createElement("input");
    temp.value = value;
    document.body.appendChild(temp);
    temp.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(temp);
    el.wechatActionStatus.textContent = ok ? `已复制微信号：${value}` : "复制失败，请手动复制";
  }
}

async function copyBizEmail() {
  const value = el.copyBizEmailBtn?.getAttribute("data-biz-email") || "2429026050@qq.com";
  try {
    await navigator.clipboard.writeText(value);
    el.bizActionStatus.textContent = `已复制邮箱：${value}`;
  } catch {
    const temp = document.createElement("input");
    temp.value = value;
    document.body.appendChild(temp);
    temp.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(temp);
    el.bizActionStatus.textContent = ok ? `已复制邮箱：${value}` : "复制失败，请手动复制";
  }
}

el.prevSlide.addEventListener("click", () => nextSlide(-1));
el.nextSlide.addEventListener("click", () => nextSlide(1));
el.submitBtn.addEventListener("click", goSubmit);
el.restartBtn.addEventListener("click", () => {
  state.answers = {};
  setActiveScreen("survey");
  renderAllQuestions();
  updateTopInfo();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", updateHeroOnScroll, { passive: true });
el.wechatBtn.addEventListener("click", () => openModal(el.wechatModal));
el.aboutBtn.addEventListener("click", () => openModal(el.aboutModal));
el.policyBtn.addEventListener("click", () => openModal(el.policyModal));
el.bizBtn.addEventListener("click", () => openModal(el.bizModal));
el.wechatCloseBtn.addEventListener("click", () => closeModal(el.wechatModal));
el.aboutCloseBtn.addEventListener("click", () => closeModal(el.aboutModal));
el.policyCloseBtn.addEventListener("click", () => closeModal(el.policyModal));
el.bizCloseBtn.addEventListener("click", () => closeModal(el.bizModal));
[el.wechatModal, el.aboutModal, el.policyModal, el.bizModal].forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal);
  });
});
bindImageFallback(el.wechatQrImage, el.wechatQrTip);
bindImageFallback(el.aboutImage, el.aboutTip);
bindImageFallback(el.policyImage, el.policyTip);
bindImageFallback(el.bizImage, el.bizTip);
el.copyWechatIdBtn.addEventListener("click", copyWechatId);
el.copyBizEmailBtn.addEventListener("click", copyBizEmail);
el.downloadQrBtn.addEventListener("click", () => {
  el.wechatActionStatus.textContent = "已开始下载二维码";
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(el.wechatModal);
    closeModal(el.aboutModal);
    closeModal(el.policyModal);
    closeModal(el.bizModal);
  }
});

if (slides.length > 1) {
  setInterval(() => nextSlide(1), 4200);
}
renderSlide();
renderAllQuestions();
updateTopInfo();
updateHeroOnScroll();
