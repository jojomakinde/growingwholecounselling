const questions = [
  {
    title: "Who is the support for?",
    help: "Choose the option that feels closest. You can always discuss the details on an intro call.",
    key: "service",
    options: [
      { value: "individual", label: "For me", detail: "Individual counselling" },
      { value: "couples", label: "For my relationship", detail: "Couples counselling" },
      { value: "caregiver", label: "For me as a caregiver", detail: "Caregiver support" },
      { value: "youth", label: "For a child or young person", detail: "Child and youth counselling" },
    ],
  },
  {
    title: "What would feel most helpful right now?",
    help: "There is no perfect answer—pick the starting point that stands out most.",
    key: "need",
    options: [
      { value: "understand", label: "Understanding what I’m feeling", detail: "Making sense of emotions or patterns" },
      { value: "tools", label: "Practical tools", detail: "Strategies I can use day to day" },
      { value: "relationships", label: "Healthier relationships", detail: "Communication, boundaries, or connection" },
      { value: "support", label: "A steady place to talk", detail: "Support through stress, grief, or change" },
    ],
  },
  {
    title: "How do you hope counselling will feel?",
    help: "This helps reflect the kind of working relationship you may prefer.",
    key: "style",
    options: [
      { value: "collaborative", label: "Collaborative", detail: "We make sense of things together" },
      { value: "practical", label: "Practical and focused", detail: "Clear ideas and manageable next steps" },
      { value: "gentle", label: "Warm and nonjudgmental", detail: "Space to be honest without shame" },
      { value: "faith", label: "Open to including faith", detail: "Only when I want it included" },
    ],
  },
  {
    title: "What works best for your life?",
    help: "Choose a starting preference. Availability can be discussed during the intro call.",
    key: "format",
    options: [
      { value: "virtual", label: "Virtual sessions", detail: "Meet securely from your own space" },
      { value: "person", label: "In-person sessions", detail: "Meet face to face" },
      { value: "either", label: "Either could work", detail: "I’m flexible about the format" },
      { value: "unsure", label: "I’m not sure yet", detail: "I’d like to talk it through" },
    ],
  },
];

const explorer = document.querySelector("[data-fit-explorer]");

if (explorer) {
  const title = explorer.querySelector("#question-title");
  const help = explorer.querySelector("#question-help");
  const stepLabel = explorer.querySelector("#step-label");
  const optionsWrap = explorer.querySelector("[data-options]");
  const progress = explorer.querySelector("[data-progress]");
  const questionPanel = explorer.querySelector("[data-question-panel]");
  const resultPanel = explorer.querySelector("[data-result]");
  const resultTitle = explorer.querySelector("#result-title");
  const resultCopy = explorer.querySelector("[data-result-copy]");
  const resultNotes = explorer.querySelector("[data-result-notes]");
  const next = explorer.querySelector("[data-next]");
  const back = explorer.querySelector("[data-back]");
  const resets = explorer.querySelectorAll("[data-reset]");

  let step = 0;
  const answers = {};

  const resultLanguage = {
    individual: "individual counselling",
    couples: "couples counselling",
    caregiver: "caregiver support",
    youth: "child or youth counselling",
    understand: "understand emotions and patterns",
    tools: "build practical strategies for everyday life",
    relationships: "work on communication, boundaries, or connection",
    support: "have a steady place to move through stress, grief, or change",
    collaborative: "a collaborative process",
    practical: "a practical and focused approach",
    gentle: "a warm, nonjudgmental space",
    faith: "the option to include faith when you choose",
    virtual: "virtual sessions",
    person: "in-person sessions",
    either: "either virtual or in-person sessions",
    unsure: "help deciding which session format may work best",
  };

  function renderQuestion({ focus = false } = {}) {
    const current = questions[step];
    stepLabel.textContent = `Question ${step + 1} of ${questions.length}`;
    progress.style.width = `${((step + 1) / questions.length) * 100}%`;
    title.textContent = current.title;
    help.textContent = current.help;
    back.disabled = step === 0;
    next.textContent = step === questions.length - 1 ? "See my reflection" : "Continue";
    optionsWrap.innerHTML = "";

    current.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.dataset.value = option.value;
      button.setAttribute("aria-pressed", String(answers[current.key] === option.value));
      button.innerHTML = `${option.label}<small>${option.detail}</small>`;
      button.addEventListener("click", () => {
        answers[current.key] = option.value;
        optionsWrap.querySelectorAll(".option-button").forEach((item) => {
          item.setAttribute("aria-pressed", String(item === button));
        });
        next.disabled = false;
      });
      optionsWrap.appendChild(button);
    });

    next.disabled = !answers[current.key];
    if (focus) title.focus();
  }

  function showResult() {
    questionPanel.hidden = true;
    resultPanel.hidden = false;
    stepLabel.textContent = "Reflection complete";
    progress.style.width = "100%";
    explorer.querySelector(".explorer-topline [data-reset]").hidden = false;

    const service = resultLanguage[answers.service];
    const need = resultLanguage[answers.need];
    const style = resultLanguage[answers.style];
    const format = resultLanguage[answers.format];

    resultCopy.textContent = `You’re looking for ${service} to ${need}, with ${style}. Growing Whole Counselling may offer a helpful place to begin that conversation.`;
    resultNotes.innerHTML = [
      `Your preference: ${format}`,
      "Evening and weekend appointments are currently offered",
      "Fit, availability, and any questions can be discussed before you commit",
    ].map((note) => `<div class="result-note"><span aria-hidden="true">✓</span><div>${note}</div></div>`).join("");
    resultTitle.focus();
  }

  next.addEventListener("click", () => {
    if (!answers[questions[step].key]) return;
    if (step < questions.length - 1) {
      step += 1;
      renderQuestion({ focus: true });
    } else {
      showResult();
    }
  });

  back.addEventListener("click", () => {
    if (step > 0) {
      step -= 1;
      renderQuestion({ focus: true });
    }
  });

  resets.forEach((reset) => {
    reset.addEventListener("click", () => {
      Object.keys(answers).forEach((key) => delete answers[key]);
      step = 0;
      resultPanel.hidden = true;
      questionPanel.hidden = false;
      explorer.querySelector(".explorer-topline [data-reset]").hidden = true;
      renderQuestion({ focus: true });
    });
  });

  renderQuestion();
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  reveals.forEach((item) => observer.observe(item));
}
